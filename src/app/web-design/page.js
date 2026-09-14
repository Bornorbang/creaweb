import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "Bespoke Web Design UK",
  description:
    "Award-quality bespoke web design for UK businesses. Crea Web creates custom, responsive websites that reflect your brand and convert visitors into clients.",
  alternates: { canonical: "https://creaweb.co.uk/web-design" },
  openGraph: {
    title: "Bespoke Web Design UK | Crea Web Agency",
    description: "Custom, responsive websites that reflect your brand and convert visitors into clients.",
    url: "https://creaweb.co.uk/web-design",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="web-design" />;
}
