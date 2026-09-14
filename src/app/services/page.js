import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "Web Design Services UK",
  description:
    "Bespoke web design, custom website development, e-commerce, SEO, WordPress and Shopify development for British businesses. Professional web design services tailored to your brand.",
  alternates: { canonical: "https://creaweb.co.uk/services" },
  openGraph: {
    title: "Web Design Services UK | Crea Web Agency",
    description: "Bespoke web design, development, e-commerce and SEO services for British businesses.",
    url: "https://creaweb.co.uk/services",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="services" />;
}
