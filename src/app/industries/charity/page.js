import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Charity Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke charity websites for UK charities, non-profit organisations, NGOs, and community groups. Accessible, SEO-friendly, and built to increase donations and engagement.",
  alternates: { canonical: "https://creaweb.co.uk/industries/charity" },
  openGraph: {
    title: "Charity Web Design UK | Crea Web",
    description: "Crea Web designs bespoke charity websites for UK charities, non-profit organisations, NGOs, and community groups. Accessible, SEO-friendly, and built to increase donations and engagement.",
    url: "https://creaweb.co.uk/industries/charity",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["charity"]} />;
}
