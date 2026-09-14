import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Sheffield",
  description:
    "Need professional Web Design Sheffield services? Crea Web creates modern, SEO-friendly websites that help Sheffield businesses increase enquiries and build credibility.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-sheffield" },
  openGraph: {
    title: "Web Design Sheffield | Crea Web Agency",
    description: "Bespoke, responsive website design for Sheffield and South Yorkshire businesses.",
    url: "https://creaweb.co.uk/web-design-sheffield",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.sheffield} />;
}
