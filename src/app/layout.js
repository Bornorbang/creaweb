import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://creaweb.co.uk"),
  title: {
    default: "Web Design Agency UK | Crea Web Agency",
    template: "%s | Crea Web Agency",
  },
  description:
    "Crea Web is a professional web design agency in the UK, crafting bespoke, responsive websites for British businesses. Expert custom website design tailored to your brand.",
  keywords: [
    "Web Design Agency in UK",
    "Bespoke Website Design",
    "Website Design Company UK",
    "Professional Web Design",
    "Custom Website Design",
    "Responsive Website Design",
  ],
  openGraph: {
    siteName: "Crea Web Agency",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/images/Crea%20Web%20Favicon.png", type: "image/png" }],
    shortcut: "/images/Crea%20Web%20Favicon.png",
    apple: "/images/Crea%20Web%20Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#F6F1E8] text-[#1C1C1C]" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": "https://creaweb.co.uk/#organization",
                  "name": "Crea Web Agency",
                  "url": "https://creaweb.co.uk",
                  "description": "Professional web design agency in the UK offering bespoke website design, custom web development, and responsive website design for British businesses.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Manchester",
                    "addressRegion": "England",
                    "addressCountry": "GB"
                  },
                  "email": "contact@creaweb.co.uk",
                  "telephone": "+44-20-7123-4567",
                  "areaServed": { "@type": "Country", "name": "United Kingdom" },
                  "priceRange": "£££",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Web Design Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bespoke Web Design" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Redesign" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Websites" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO" } }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://creaweb.co.uk/#website",
                  "url": "https://creaweb.co.uk",
                  "name": "Crea Web Agency",
                  "publisher": { "@id": "https://creaweb.co.uk/#organization" }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
