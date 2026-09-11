import { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog-data";
import { getAllServices } from "@/lib/services-data";
import { getAllProjects } from "@/lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const services = getAllServices();
  const projects = getAllProjects();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: getCanonicalUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: getCanonicalUrl(`/services/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: getCanonicalUrl(`/work/${project.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: getCanonicalUrl(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: getCanonicalUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getCanonicalUrl("/services"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...serviceEntries,
    {
      url: getCanonicalUrl("/work"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectEntries,
    {
      url: getCanonicalUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
    },
    ...blogEntries,
    {
      url: getCanonicalUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: getCanonicalUrl("/privacy-policy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: getCanonicalUrl("/terms"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
