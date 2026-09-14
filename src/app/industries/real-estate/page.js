import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Real Estate Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke real estate websites for UK estate agents, property developers, and letting agencies. SEO-friendly, responsive, and built to generate more property enquiries.",
  alternates: { canonical: "https://creaweb.co.uk/industries/real-estate" },
  openGraph: {
    title: "Real Estate Web Design UK | Crea Web",
    description: "Crea Web designs bespoke real estate websites for UK estate agents, property developers, and letting agencies. SEO-friendly, responsive, and built to generate more property enquiries.",
    url: "https://creaweb.co.uk/industries/real-estate",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["real-estate"]} />;
}
