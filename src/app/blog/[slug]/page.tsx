import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleServiceCta } from "@/components/blog/ArticleServiceCta";
import { ArticleRelatedPosts } from "@/components/blog/ArticleRelatedPosts";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  const pageTitle = post.seoTitle || `${post.title} | Owl Studio Journal`;
  const pageDescription = post.seoDescription || post.excerpt;
  const pageUrl = getCanonicalUrl(`/blog/${post.slug}`);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: post.tags,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "article",
      url: pageUrl,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug);
  const pageUrl = getCanonicalUrl(`/blog/${post.slug}`);

  // Structured Data (BlogPosting & BreadcrumbList)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: getCanonicalUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: getCanonicalUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: getCanonicalUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <article className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container>
        {/* Header */}
        <ArticleHeader post={post} />

        {/* Content Body */}
        <ArticleBody post={post} />

        {/* Contextual Studio Service CTA */}
        <ArticleServiceCta
          relatedServiceSlug={post.relatedServiceSlug}
          relatedCaseStudySlug={post.relatedCaseStudySlug}
          category={post.category}
        />

        {/* Related Articles */}
        <ArticleRelatedPosts relatedPosts={related} />
      </Container>
    </article>
  );
}
