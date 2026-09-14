import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "E-Commerce Website Design UK",
  description:
    "Professional e-commerce website design and development for UK businesses. Crea Web builds conversion-focused online stores on Shopify, WooCommerce, and custom platforms.",
  alternates: { canonical: "https://creaweb.co.uk/ecommerce-websites" },
  openGraph: {
    title: "E-Commerce Website Design UK | Crea Web Agency",
    description: "Conversion-focused online stores for UK brands on Shopify and WooCommerce.",
    url: "https://creaweb.co.uk/ecommerce-websites",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="ecommerce-websites" />;
}
