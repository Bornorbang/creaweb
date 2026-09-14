import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "Shopify Development UK",
  description:
    "Expert Shopify development for UK e-commerce businesses. Crea Web builds bespoke Shopify stores with custom themes, app integrations, and conversion-optimised design.",
  alternates: { canonical: "https://creaweb.co.uk/shopify-development" },
  openGraph: {
    title: "Shopify Development UK | Crea Web Agency",
    description: "Bespoke Shopify stores for UK businesses — custom themes, integrations, and conversion-optimised design.",
    url: "https://creaweb.co.uk/shopify-development",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="shopify-development" />;
}
