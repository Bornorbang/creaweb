import LocationPage from "../components/locations/LocationPage";
import { cities } from "../components/locations/cities";

export const metadata = {
  title: "Web Design Bristol",
  description:
    "Crea Web delivers professional Web Design Bristol services, building responsive, SEO-ready websites that help Bristol businesses strengthen their online presence.",
  alternates: { canonical: "https://creaweb.co.uk/web-design-bristol" },
  openGraph: {
    title: "Web Design Bristol | Crea Web Agency",
    description: "Bespoke, high-performance website design for Bristol and South West businesses.",
    url: "https://creaweb.co.uk/web-design-bristol",
    type: "website",
  },
};

export default function Page() {
  return <LocationPage location={cities.bristol} />;
}
