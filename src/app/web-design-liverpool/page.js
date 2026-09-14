import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Liverpool",
  description:
    "Looking for trusted Web Design Liverpool services? Crea Web creates bespoke, SEO-friendly websites that help Liverpool businesses grow and attract more customers online.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-liverpool" },
  openGraph: {
    title: "Web Design Liverpool | Crea Web Agency",
    description: "Bespoke, responsive website design for Liverpool and Merseyside businesses.",
    url: "https://creaweb.co.uk/web-design-liverpool",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.liverpool} />;
}
