import Navbar        from "./components/Navbar";
import Hero           from "./components/Hero";
import TrustedBy      from "./components/TrustedBy";
import Technologies   from "./components/Technologies";
import EditorialIntro from "./components/EditorialIntro";
import Services       from "./components/Services";
import CaseStudies    from "./components/CaseStudies";
import Industries     from "./components/Industries";
import Process        from "./components/Process";
import Testimonials   from "./components/Testimonials";
import Journal        from "./components/Journal";
import FAQ            from "./components/FAQ";
import ContactCTA     from "./components/ContactCTA";
import Footer         from "./components/Footer";

export const metadata = {
  title: {
    absolute: "Web Design Agency UK | Bespoke Website Design | Crea Web",
  },
  description:
    "Crea Web is a leading Web Design Agency UK offering professional website design services for businesses. We create fast, SEO-friendly, responsive websites that drive growth.",
  keywords: [
    "Web Design Agency in UK",
    "Bespoke Website Design",
    "Website Design Company UK",
    "Professional Web Design",
    "Custom Website Design",
    "Responsive Website Design",
  ],
  openGraph: {
    title: "Web Design Agency UK | Bespoke Website Design | Crea Web",
    description:
      "Leading web design agency UK offering professional website design services. Fast, SEO-friendly, responsive websites that drive growth.",
    url: "https://creaweb.co.uk",
    type: "website",
  },
  alternates: { canonical: "https://creaweb.co.uk" },
};

async function getLatestPosts() {
  try {
    const api = (process.env.API_URL || "http://localhost:8000").replace(/\/api\/?$/, "");
    const res = await fetch(
      `${api}/api/posts?limit=3`,
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      return data.posts ?? null;
    }
  } catch {
    // PHP server not running — use static fallback in Journal
  }
  return null;
}

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <EditorialIntro />
        <Services />
        <Technologies />
        <CaseStudies />
        <Industries />
        <Process />
        <Testimonials />
        <Journal posts={posts} />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
