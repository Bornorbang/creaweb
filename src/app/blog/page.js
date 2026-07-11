import { redirect } from "next/navigation";

export const metadata = {
  title: "Blog",
  description:
    "Read the Crea Web blog for expert web design tips, digital strategy insights, and perspectives on building effective online presences for UK businesses.",
  alternates: { canonical: "https://creaweb.co.uk/blog" },
};

export default function BlogPage() {
  redirect("/insights");
}
