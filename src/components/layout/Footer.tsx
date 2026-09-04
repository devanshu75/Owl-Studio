import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050b18] overflow-hidden">
      {/* Background subtle radial ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Mission - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.svg"
                  alt="Owl Studio"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Owl Studio
              </span>
            </Link>

            <p className="max-w-sm text-sm sm:text-base leading-relaxed text-textMuted">
              We design and build bold digital experiences, generative AI video commercials,
              and cinematic short films that inspire, engage, and convert.
              Based in India, collaborating worldwide.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {SITE_CONFIG.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-gray-300 transition-all hover:border-accent hover:bg-accent hover:text-black hover:scale-105"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-accent uppercase">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-textMuted">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  AI Generated Video &amp; Motion
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Short Films &amp; Narratives
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  High-Converting Video Ads
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  UI / UX Design &amp; Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-accent uppercase">
              Studio
            </h4>
            <ul className="space-y-2.5 text-sm text-textMuted">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#ourwork" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Journal</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-accent uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-textMuted">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} Owl Studio. All rights reserved. Made with{" "}
            <span className="text-rose-500">♥</span> by{" "}
            <span className="text-accent font-medium">Owl Studio</span>.
          </p>
          <p className="text-gray-400 font-medium">
            Designed to stand out.
          </p>
        </div>
      </div>
    </footer>
  );
}
