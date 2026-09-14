import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: {
    absolute: "About Crea Web | UK Web Design Agency & Digital Studio",
  },
  description:
    "Learn about Crea Web, a UK web design agency creating bespoke, SEO-friendly websites for ambitious businesses. Discover our mission, values, and design philosophy.",
  alternates: { canonical: "https://creaweb.co.uk/about" },
  openGraph: {
    title: "About Crea Web Agency | Web Design Agency UK",
    description: "A British web design agency built on craft, clarity, and honest partnership.",
    url: "https://creaweb.co.uk/about",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="about" />;
}
