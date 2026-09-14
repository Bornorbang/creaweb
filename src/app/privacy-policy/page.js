import LegalPage from "../components/pages/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How Crea Web collects, uses, and protects your personal data.",
  alternates: { canonical: "https://creaweb.co.uk/privacy-policy" },
};

export default function Page() {
 return <LegalPage slug="privacy-policy" />;
}
