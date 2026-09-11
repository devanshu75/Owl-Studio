import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { getWebSiteSchema, getProfessionalServiceSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#F5F3EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "branding agency",
    "brand strategy",
    "brand design",
    "digital branding",
    "website development",
    "Next.js agency",
    "digital marketing agency",
    "creative studio",
    "UI UX design studio",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getCanonicalUrl(),
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: "We build bold brands and scalable digital experiences through strategy, design, and Next.js engineering.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/favicon-32.png" }],
  },
  verification: {
    google: "Cbnlfl-ysdjib84JDjTCeT8XntYdtXBjCJK8gvXdD9Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [getWebSiteSchema(), getProfessionalServiceSchema()],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MCS8L3S');`,
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QH9R0EH7WG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QH9R0EH7WG');
          `}
        </Script>
        {/* Structured Data (WebSite + ProfessionalService) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-brand-dark min-h-screen">
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-brand-dark focus:font-bold focus:shadow-owl-md focus:outline-none"
        >
          Skip to content
        </a>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MCS8L3S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
          <CustomCursor />
          <Toaster
            theme="light"
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#FFFFFF",
                color: "#161616",
                border: "1px solid rgba(22, 22, 22, 0.1)",
              },
            }}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
