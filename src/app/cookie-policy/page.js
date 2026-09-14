import LegalPage from "../components/pages/LegalPage";

export const metadata = {
  title: "Cookie Policy",
  description: "How Crea Web uses cookies and similar technologies.",
  alternates: { canonical: "https://creaweb.co.uk/cookie-policy" },
};

export default function Page() {
 return <LegalPage slug="cookie-policy" />;
}
