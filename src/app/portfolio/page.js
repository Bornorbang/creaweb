import { redirect } from "next/navigation";

export const metadata = {
  title: "Portfolio",
  description:
    "View Crea Web's portfolio of bespoke website design projects for UK businesses â€” from professional services and retail to hospitality and technology.",
  alternates: { canonical: "https://creaweb.co.uk/portfolio" },
};

export default function PortfolioPage() {
  redirect("/projects");
}

