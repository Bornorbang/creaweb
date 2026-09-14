import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Hospitality Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs bespoke hospitality websites for hotels, restaurants, bars, resorts, and hospitality brands. Responsive, SEO-friendly, and built to increase bookings.",
  alternates: { canonical: "https://creaweb.co.uk/industries/hospitality" },
  openGraph: {
    title: "Hospitality Web Design UK | Crea Web",
    description: "Crea Web designs bespoke hospitality websites for hotels, restaurants, bars, resorts, and hospitality brands. Responsive, SEO-friendly, and built to increase bookings.",
    url: "https://creaweb.co.uk/industries/hospitality",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["hospitality"]} />;
}
