import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "SEO Services UK",
  description:
    "Professional SEO services for UK businesses. Crea Web delivers technical SEO, on-page optimisation, and content strategy that builds lasting organic visibility.",
  alternates: { canonical: "https://creaweb.co.uk/seo" },
  openGraph: {
    title: "SEO Services UK | Crea Web Agency",
    description: "Technical SEO and content strategy that builds lasting organic visibility for UK businesses.",
    url: "https://creaweb.co.uk/seo",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="seo" />;
}
