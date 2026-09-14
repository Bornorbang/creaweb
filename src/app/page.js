import WildcardHome from "./components/wildcard/WildcardHome";

export const metadata = {
  title: {
    absolute: "Web Design Agency UK | Bespoke Websites | Crea Web Agency",
  },
  description:
    "Crea Web Agency is a UK web design agency based in Manchester. We build bespoke, responsive websites with SEO built in. Get a quote for your project.",
  keywords: [
    "Web Design Agency in UK",
    "Bespoke Website Design",
    "Website Design Company UK",
    "Professional Web Design",
    "Custom Website Design",
    "Responsive Website Design",
  ],
  openGraph: {
    title: "Web Design Agency UK | Bespoke Websites | Crea Web Agency",
    description:
      "Crea Web Agency is a UK web design agency based in Manchester. We build bespoke, responsive websites with SEO built in. Get a quote for your project.",
    url: "https://creaweb.co.uk",
    type: "website",
    locale: "en_GB",
    siteName: "Crea Web Agency",
    images: [{ url: "/images/crea-web-hero.webp", alt: "Website interface design at Crea Web, a UK web design agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Agency UK | Bespoke Websites | Crea Web Agency",
    description: "Crea Web Agency is a UK web design agency based in Manchester. We build bespoke, responsive websites with SEO built in. Get a quote for your project.",
    images: [{ url: "/images/crea-web-hero.webp", alt: "Website interface design at Crea Web" }],
  },
  alternates: { canonical: "https://creaweb.co.uk" },
};

export default function Home() {
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://creaweb.co.uk/#webpage",
    url: "https://creaweb.co.uk/",
    name: "Web Design Agency UK | Bespoke Websites | Crea Web Agency",
    description: metadata.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://creaweb.co.uk/#website" },
    about: { "@id": "https://creaweb.co.uk/#organization" },
    publisher: { "@id": "https://creaweb.co.uk/#organization" },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage).replace(/</g, "\\u003c") }} /><WildcardHome /></>;
}
