import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Legal Web Design UK | Crea Web",
  },
  description:
    "Crea Web provides professional legal web design in the UK, creating bespoke, SEO-friendly websites for solicitors, law firms, barristers, and legal professionals.",
  alternates: { canonical: "https://creaweb.co.uk/industries/legal" },
  openGraph: {
    title: "Legal Web Design UK | Crea Web",
    description: "Crea Web provides professional legal web design in the UK, creating bespoke, SEO-friendly websites for solicitors, law firms, barristers, and legal professionals.",
    url: "https://creaweb.co.uk/industries/legal",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["legal"]} />;
}
