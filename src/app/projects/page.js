import SiteShell, { Button } from "../components/pages/SiteShell";
import { Hero } from "../components/pages/MarketingPage";
import ProjectGallery from "../components/pages/ProjectGallery";
import content from "../components/pages/content.json";
export const metadata = {
  title: "Web Design Portfolio UK | Our Projects",
  description: "Explore Crea Web Agency’s web design portfolio, with bespoke websites for healthcare, education, technology, e-commerce and other UK businesses.",
  alternates: { canonical: "https://creaweb.co.uk/projects" },
  openGraph: { title: "Web Design Portfolio UK | Crea Web Agency", description: "Explore bespoke websites from the Crea Web Agency portfolio.", url: "https://creaweb.co.uk/projects", type: "website" },
};
export default function ProjectsPage() {
  return <SiteShell page="projects"><Hero label="Selected work" title="Good ideas. Made real." intro={[content.projects.title,...content.projects.intro]} tone="lime"><a href="#portfolio" className="sp-text-link">Explore all 12 projects ↓</a><Button>Start your project</Button></Hero><ProjectGallery /></SiteShell>;
}
