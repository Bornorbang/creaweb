import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Leicester",
  description:
    "Crea Web delivers expert Web Design Leicester services, building bespoke websites that help Leicester businesses grow, improve visibility, and attract new customers.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-leicester" },
  openGraph: {
    title: "Web Design Leicester | Crea Web Agency",
    description: "Bespoke, responsive website design for Leicester and East Midlands businesses.",
    url: "https://creaweb.co.uk/web-design-leicester",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.leicester} />;
}
