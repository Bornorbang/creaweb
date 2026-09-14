import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Birmingham",
  description:
    "Discover expert Web Design Birmingham services with Crea Web. We build modern, SEO-optimised websites that help Birmingham businesses stand out and win more customers.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-birmingham" },
  openGraph: {
    title: "Web Design Birmingham | Crea Web Agency",
    description: "Bespoke, responsive website design for Birmingham and West Midlands businesses.",
    url: "https://creaweb.co.uk/web-design-birmingham",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.birmingham} />;
}
