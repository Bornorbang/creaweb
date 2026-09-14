import { notFound } from "next/navigation";
import IndustryPage from "../../components/industries/IndustryPage";
import industryPages from "../../components/industries/industries.json";
import industries from "../../components/industries/dynamic-industries.json";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.metaDesc,
    alternates: { canonical: `https://creaweb.co.uk/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} | Crea Web Agency`,
      description: industry.metaDesc,
      url: `https://creaweb.co.uk/industries/${industry.slug}`,
      type: "website",
    },
  };
}


export default async function Page({ params }) {
  const { slug } = await params;
  const original = industries.find(i => i.slug === slug);
  if (!original) notFound();
  const base = industryPages[slug === "charities" ? "charity" : slug];
  return <IndustryPage industry={{ ...base, slug, label: original.label, keyword: original.title.replace(/ UK$/, ""), heroTitle: original.headline + " " + original.subHeadline, intro: original.intro, reasons: original.features, sectors: original.sectors, cta: "Discuss your project" }} />;
}
