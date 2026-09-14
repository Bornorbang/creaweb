import "./designs.css";
import "./modern.css";

export const metadata = {
  title: { absolute: "Crea Web — Design explorations" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function DesignLayout({ children }) {
  return <div className="design-lab">{children}</div>;
}
