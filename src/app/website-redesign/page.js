import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "Website Redesign UK",
  description:
    "Is your website holding your business back? Crea Web specialises in professional website redesign for UK businesses — improving design, performance, and conversion rates.",
  alternates: { canonical: "https://creaweb.co.uk/website-redesign" },
  openGraph: {
    title: "Website Redesign UK | Crea Web Agency",
    description: "Professional website redesign for UK businesses — better design, performance, and conversions.",
    url: "https://creaweb.co.uk/website-redesign",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="website-redesign" />;
}
