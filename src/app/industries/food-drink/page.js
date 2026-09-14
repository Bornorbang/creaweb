import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Food & Drink Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke food and drink websites for restaurants, cafés, bakeries, breweries, food brands, and beverage companies. SEO-friendly, responsive, and built to grow your business.",
  alternates: { canonical: "https://creaweb.co.uk/industries/food-drink" },
  openGraph: {
    title: "Food & Drink Web Design UK | Crea Web",
    description: "Crea Web designs bespoke food and drink websites for restaurants, cafés, bakeries, breweries, food brands, and beverage companies. SEO-friendly, responsive, and built to grow your business.",
    url: "https://creaweb.co.uk/industries/food-drink",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["food-drink"]} />;
}
