import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Edinburgh",
  description:
    "Crea Web provides premium Web Design Edinburgh services, designing bespoke websites that help businesses improve visibility, attract customers, and grow online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-edinburgh" },
  openGraph: {
    title: "Web Design Edinburgh | Crea Web Agency",
    description: "Bespoke, responsive website design for Edinburgh and Scottish businesses.",
    url: "https://creaweb.co.uk/web-design-edinburgh",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.edinburgh} />;
}
