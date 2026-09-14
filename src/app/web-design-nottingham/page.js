import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Nottingham",
  description:
    "Choose Crea Web for expert Web Design Nottingham services. We design bespoke websites that help Nottingham businesses generate leads and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-nottingham" },
  openGraph: {
    title: "Web Design Nottingham | Crea Web Agency",
    description: "Bespoke, responsive website design for Nottingham and East Midlands businesses.",
    url: "https://creaweb.co.uk/web-design-nottingham",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.nottingham} />;
}
