import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Glasgow",
  description:
    "Crea Web offers professional Web Design Glasgow services, creating high-performing websites that help Glasgow businesses build trust and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-glasgow" },
  openGraph: {
    title: "Web Design Glasgow | Crea Web Agency",
    description: "Bespoke, responsive website design for Glasgow and Scottish businesses.",
    url: "https://creaweb.co.uk/web-design-glasgow",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.glasgow} />;
}
