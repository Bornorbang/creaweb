import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "Website Development UK",
  description:
    "Expert website development services in the UK. Crea Web builds fast, secure, and scalable websites using Next.js, PHP, WordPress, and Shopify for British businesses.",
  alternates: { canonical: "https://creaweb.co.uk/website-development" },
  openGraph: {
    title: "Website Development UK | Crea Web Agency",
    description: "Fast, secure, and scalable website development for British businesses.",
    url: "https://creaweb.co.uk/website-development",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="website-development" />;
}
