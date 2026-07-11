import Reveal from "./Reveal";

const technologies = [
  {
    name: "WordPress",
    src: "https://www.citypng.com/public/uploads/preview/wordpress-logo-image-png-701751694773680sodsik7zlf.png",
  },
  {
    name: "Shopify",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwUD_9cuhEdxBf-dP2FCbuDHF7bTVQG4ujuCnCW11YfBlPmAhlXojhcag&s=10",
  },
  {
    name: "Python",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/250px-Python-logo-notext.svg.png",
  },
  {
    name: "Django",
    src: "https://www.websitedesigner.ng/static/img/django-logo.png",
  },
  {
    name: "PHP",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/3840px-PHP-logo.svg.png",
  },
  {
    name: "JavaScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Tailwind CSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Next.js",
    src: "https://w7.pngwing.com/pngs/643/143/png-transparent-nextjs-hd-logo.png",
  },
  {
    name: "Wix",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/3840px-Wix.com_website_logo.svg.png",
  },
  {
    name: "React",
    src: "https://www.websitedesigner.ng/static/img/react-logo.png",
  },
  {
    name: "MySQL",
    src: "https://www.websitedesigner.ng/static/img/mysql-logo.png",
  },
];

export default function Technologies() {
  return (
    <section className="bg-[#F6F1E8] border-t border-b border-[#1C1C1C]/8 py-8">
      <Reveal direction="fade" threshold={0.05}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Label */}
          <p className="text-[#7C746A] text-[0.65rem] tracking-[0.18em] uppercase font-sans whitespace-nowrap shrink-0">
            Technologies we use
          </p>

          {/* Thin divider — desktop only */}
          <div className="hidden sm:block w-px h-7 bg-[#1C1C1C]/12 shrink-0" />

          {/* Logo strip — hidden scrollbar, swipeable on mobile */}
          <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <ul className="flex items-center gap-8 md:gap-10 min-w-max md:min-w-0 md:justify-between">
              {technologies.map((tech) => (
                <li key={tech.name} className="shrink-0 flex items-center justify-center h-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.src}
                    alt="Web Design Agency UK"
                    width={80}
                    height={28}
                    loading="lazy"
                    className="h-7 w-auto max-w-[100px] object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
