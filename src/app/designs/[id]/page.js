import { notFound } from "next/navigation";
import { directions } from "../content";
import DesignPage from "../DesignPage";
import DesignPicker from "../DesignPicker";
import ModernDesign from "../ModernDesign";

export function generateStaticParams() {
  return directions.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const direction = directions.find((d) => d.id === id);
  return { title: { absolute: direction ? `${direction.name} — Crea Web design ${id}` : "Design not found" } };
}

export default async function DirectionPage({ params }) {
  const { id } = await params;
  const direction = directions.find((d) => d.id === id);
  if (!direction) notFound();
  return <><DesignPicker key={id} current={id} />{Number(id) >= 6 ? <ModernDesign direction={direction} /> : <DesignPage direction={direction} />}</>;
}
