import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Technology Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs modern technology websites for SaaS companies, startups, software firms, IT providers, and technology businesses across the UK. SEO-friendly and built to scale.",
  alternates: { canonical: "https://creaweb.co.uk/industries/technology" },
  openGraph: {
    title: "Technology Web Design UK | Crea Web",
    description: "Crea Web designs modern technology websites for SaaS companies, startups, software firms, IT providers, and technology businesses across the UK. SEO-friendly and built to scale.",
    url: "https://creaweb.co.uk/industries/technology",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["technology"]} />;
}
