import MarketingPage from "../components/pages/MarketingPage";

export const metadata = {
  title: "WordPress Development UK",
  description:
    "Professional WordPress development for UK businesses. Crea Web builds bespoke, fast, and secure WordPress websites — custom themes, plugin development, and WooCommerce.",
  alternates: { canonical: "https://creaweb.co.uk/wordpress-development" },
  openGraph: {
    title: "WordPress Development UK | Crea Web Agency",
    description: "Bespoke WordPress websites for UK businesses — custom themes, plugins, and WooCommerce.",
    url: "https://creaweb.co.uk/wordpress-development",
    type: "website",
  },
};

export default function Page() {
 return <MarketingPage slug="wordpress-development" />;
}
