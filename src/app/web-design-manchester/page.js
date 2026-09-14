import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Manchester",
  description:
    "Crea Web offers professional Web Design Manchester services, creating bespoke, responsive websites that help businesses increase visibility, generate enquiries, and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-manchester" },
  openGraph: {
    title: "Web Design Manchester | Crea Web Agency",
    description: "Bespoke, high-performance website design for Manchester businesses.",
    url: "https://creaweb.co.uk/web-design-manchester",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.manchester} />;
}
