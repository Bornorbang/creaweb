import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Newcastle",
  description:
    "Looking for expert Web Design Newcastle services? Crea Web builds responsive, SEO-optimised websites that help Newcastle businesses attract customers and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-newcastle" },
  openGraph: {
    title: "Web Design Newcastle | Crea Web Agency",
    description: "Bespoke, responsive website design for Newcastle and North East businesses.",
    url: "https://creaweb.co.uk/web-design-newcastle",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.newcastle} />;
}
