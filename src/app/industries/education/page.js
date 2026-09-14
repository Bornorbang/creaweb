import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Education Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke education websites for schools, colleges, universities, academies, and training providers. Responsive, SEO-friendly, and built to engage students and parents.",
  alternates: { canonical: "https://creaweb.co.uk/industries/education" },
  openGraph: {
    title: "Education Web Design UK | Crea Web",
    description: "Crea Web designs bespoke education websites for schools, colleges, universities, academies, and training providers. Responsive, SEO-friendly, and built to engage students and parents.",
    url: "https://creaweb.co.uk/industries/education",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["education"]} />;
}
