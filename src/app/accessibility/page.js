import LegalPage from "../components/pages/LegalPage";

export const metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to making creaweb.co.uk accessible to everyone.",
  alternates: { canonical: "https://creaweb.co.uk/accessibility" },
};

export default function Page() {
 return <LegalPage slug="accessibility" />;
}
