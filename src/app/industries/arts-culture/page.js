import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Arts & Culture Web Design UK | Crea Web",
  },
  description:
    "Crea Web creates bespoke arts and culture websites for galleries, museums, artists, theatres, festivals, and cultural organisations. Beautiful, responsive, and SEO-friendly.",
  alternates: { canonical: "https://creaweb.co.uk/industries/arts-culture" },
  openGraph: {
    title: "Arts & Culture Web Design UK | Crea Web",
    description: "Crea Web creates bespoke arts and culture websites for galleries, museums, artists, theatres, festivals, and cultural organisations. Beautiful, responsive, and SEO-friendly.",
    url: "https://creaweb.co.uk/industries/arts-culture",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["arts-culture"]} />;
}
