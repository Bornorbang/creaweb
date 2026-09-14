import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Local Services Web Design UK | Crea Web",
  },
  description:
    "Crea Web creates bespoke local services websites for tradespeople, contractors, home services, and local businesses. SEO-friendly websites designed to generate more enquiries.",
  alternates: { canonical: "https://creaweb.co.uk/industries/local-services" },
  openGraph: {
    title: "Local Services Web Design UK | Crea Web",
    description: "Crea Web creates bespoke local services websites for tradespeople, contractors, home services, and local businesses. SEO-friendly websites designed to generate more enquiries.",
    url: "https://creaweb.co.uk/industries/local-services",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["local-services"]} />;
}
