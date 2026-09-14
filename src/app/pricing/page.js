import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "Website Design Pricing UK | Web Design Packages",
  description:
    "Explore Crea Web's Website Design Pricing UK with flexible web design packages for businesses. Bespoke websites, transparent pricing, and no hidden fees.",
  alternates: { canonical: "https://creaweb.co.uk/pricing" },
  openGraph: {
    title: "Web Design Pricing UK | Crea Web Agency",
    description: "Transparent pricing for bespoke web design in the UK. No hidden fees — from £5,000.",
    url: "https://creaweb.co.uk/pricing",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="pricing" />;
}
