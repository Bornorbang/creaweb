import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "E-Commerce Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke e-commerce websites for UK businesses. Shopify, WooCommerce, and custom online stores built to increase sales, improve user experience, and support growth.",
  alternates: { canonical: "https://creaweb.co.uk/industries/ecommerce" },
  openGraph: {
    title: "E-Commerce Web Design UK | Crea Web",
    description: "Crea Web designs bespoke e-commerce websites for UK businesses. Shopify, WooCommerce, and custom online stores built to increase sales, improve user experience, and support growth.",
    url: "https://creaweb.co.uk/industries/ecommerce",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["ecommerce"]} />;
}
