import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  "Bespoke Web Design",
  "Web Development",
  "Brand & Identity",
  "E-Commerce",
  "SEO & Performance",
  "Ongoing Partnership",
];

const legalLinks = [
  { label: "Privacy Policy",    href: "/privacy-policy" },
  { label: "Cookie Policy",     href: "/cookie-policy" },
  { label: "Terms of Service",  href: "/terms-of-service" },
  { label: "Accessibility",     href: "/accessibility" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/creaweb",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/creaweb",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@creaweb",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F6F1E8] border-t border-[#1C1C1C]/10">
      {/* Main footer body */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-5 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/images/Crea%20Web%20Logo%20-%20green.png"
              alt="Crea Web Agency"
              width={32}
              height={32}
              className="h-7 w-auto"
            />
            <span className="font-serif-display text-[#12372A] text-[1.2rem] tracking-wide">
              Crea Web Agency
            </span>
          </Link>
          <p className="text-[#7C746A] text-[0.82rem] leading-relaxed font-sans font-light mb-6 max-w-[28ch]">
            Crea Web is a UK web design agency focused on creating beautiful,
            high-performing websites for businesses that want to grow.
          </p>
          <p className="text-[#B08D57] text-[0.7rem] tracking-[0.16em] uppercase font-sans mb-1">
            Based in the United Kingdom
          </p>
          <p className="text-[#7C746A] text-[0.75rem] font-sans">
            Manchester · Remote across the UK
          </p>

          {/* Social */}
          <div className="flex gap-5 mt-8">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C746A] hover:text-[#12372A] transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase font-sans text-[#B08D57] mb-6">
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-[0.82rem] font-sans text-[#7C746A] hover:text-[#12372A] transition-colors duration-300"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase font-sans text-[#B08D57] mb-6">
            Navigate
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Work",     href: "#work"     },
              { label: "About",    href: "#about"    },
              { label: "Process",  href: "#process"  },
              { label: "Insights", href: "#insights" },
              { label: "Contact",  href: "#contact"  },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[0.82rem] font-sans text-[#7C746A] hover:text-[#12372A] transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase font-sans text-[#B08D57] mb-6">
            Contact
          </p>
          <div className="flex flex-col gap-4 text-[0.82rem] font-sans text-[#7C746A]">
            <div>
              <p className="text-[0.62rem] tracking-[0.1em] uppercase text-[#B08D57]/70 mb-0.5">
                Email
              </p>
              <a
                href="mailto:contact@creaweb.co.uk"
                className="hover:text-[#12372A] transition-colors duration-300"
              >
                contact@creaweb.co.uk
              </a>
            </div>
            <div>
              <p className="text-[0.62rem] tracking-[0.1em] uppercase text-[#B08D57]/70 mb-0.5">
                Phone
              </p>
              <a
                href="tel:+442071234567"
                className="hover:text-[#12372A] transition-colors duration-300"
              >
                +44 20 7123 4567
              </a>
            </div>
            <div>
              <p className="text-[0.62rem] tracking-[0.1em] uppercase text-[#B08D57]/70 mb-0.5">
                Office Hours
              </p>
              <p>Mon – Fri, 9am – 6pm GMT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1C1C1C]/8">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6 flex-wrap">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase font-sans text-[#B08D57]">
            Locations
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { city: "London",     href: "/web-design-london"     },
              { city: "Manchester", href: "/web-design-manchester"  },
              { city: "Birmingham", href: "/web-design-birmingham"  },
              { city: "Leeds",      href: "/web-design-leeds"       },
              { city: "Liverpool",  href: "/web-design-liverpool"   },
              { city: "Bristol",    href: "/web-design-bristol"     },
              { city: "Nottingham", href: "/web-design-nottingham"  },
              { city: "Glasgow",    href: "/web-design-glasgow"     },
              { city: "Edinburgh",  href: "/web-design-edinburgh"   },
              { city: "Sheffield",  href: "/web-design-sheffield"   },
              { city: "Leicester",  href: "/web-design-leicester"   },
              { city: "Newcastle",  href: "/web-design-newcastle"   },
            ].map((l) => (
              <Link
                key={l.city}
                href={l.href}
                className="text-[0.75rem] font-sans text-[#7C746A] hover:text-[#12372A] transition-colors duration-300"
              >
                {l.city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1C1C1C]/8">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#7C746A] text-[0.7rem] font-sans">
            &copy; 2026 Crea Web Agency. Registered in England &amp; Wales.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[#7C746A] text-[0.68rem] font-sans hover:text-[#12372A] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
