import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design London",
  description:
    "Looking for professional Web Design London services? Crea Web designs bespoke, SEO-friendly websites that help London businesses attract customers, build trust, and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-london" },
  openGraph: {
    title: "Web Design London | Crea Web Agency",
    description: "Bespoke, responsive website design for London businesses.",
    url: "https://creaweb.co.uk/web-design-london",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.london} />;
}
