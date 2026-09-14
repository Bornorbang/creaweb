import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Healthcare Web Design UK | Crea Web",
  },
  description:
    "Crea Web provides professional healthcare web design in the UK, creating secure, SEO-friendly websites for clinics, hospitals, dentists, and healthcare providers.",
  alternates: { canonical: "https://creaweb.co.uk/industries/healthcare" },
  openGraph: {
    title: "Healthcare Web Design UK | Crea Web",
    description: "Crea Web provides professional healthcare web design in the UK, creating secure, SEO-friendly websites for clinics, hospitals, dentists, and healthcare providers.",
    url: "https://creaweb.co.uk/industries/healthcare",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["healthcare"]} />;
}
