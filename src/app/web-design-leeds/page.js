import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Leeds",
  description:
    "Crea Web provides premium Web Design Leeds services, designing bespoke websites that improve user experience, increase visibility, and support long-term business growth.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-leeds" },
  openGraph: {
    title: "Web Design Leeds | Crea Web Agency",
    description: "Bespoke, responsive website design for Leeds and Yorkshire businesses.",
    url: "https://creaweb.co.uk/web-design-leeds",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.leeds} />;
}
