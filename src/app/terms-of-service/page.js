import LegalPage from "../components/pages/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing use of Crea Web services.",
  alternates: { canonical: "https://creaweb.co.uk/terms-of-service" },
};

export default function Page() {
 return <LegalPage slug="terms-of-service" />;
}
