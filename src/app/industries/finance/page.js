import IndustryPage from "../../components/industries/IndustryPage";
import industries from "../../components/industries/industries.json";

export const metadata = {
  title: {
    absolute: "Finance Web Design UK | Crea Web",
  },
  description:
    "Crea Web designs professional finance websites for accountants, financial advisers, mortgage brokers, and fintech companies. Bespoke, SEO-friendly, and built for trust.",
  alternates: { canonical: "https://creaweb.co.uk/industries/finance" },
  openGraph: {
    title: "Finance Web Design UK | Crea Web",
    description: "Crea Web designs professional finance websites for accountants, financial advisers, mortgage brokers, and fintech companies. Bespoke, SEO-friendly, and built for trust.",
    url: "https://creaweb.co.uk/industries/finance",
    type: "website",
  },
};


export default function Page() {
  return <IndustryPage industry={industries["finance"]} />;
}
