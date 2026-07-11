// Logos provided by client — direct image URLs
import Reveal from "./Reveal";
const logos = [
  { name: "Google",       src: "https://pngimg.com/uploads/google/google_PNG19644.png" },
  { name: "Trustpilot",   src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Trustpilot_logo.png" },
  { name: "HubSpot",      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/3840px-HubSpot_Logo.svg.png" },
  { name: "Partner",      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpgy85kHxDxPOka-PUCed8QvG1K5z8uNTYQ&s" },
  { name: "Ocado",        src: "https://brandlogos.net/wp-content/uploads/2025/06/ocado-logo_brandlogos.net_zfxda.png" },
  { name: "RingCentral",  src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ringcentral_logo_%282009%29.png" },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#F6F1E8] border-t border-b border-[#1C1C1C]/8 py-8">
      <Reveal direction="fade" threshold={0.05}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Label */}
          <p className="text-[#7C746A] text-[0.65rem] tracking-[0.18em] uppercase font-sans whitespace-nowrap shrink-0">
            Trusted by amazing companies
          </p>

          {/* Thin divider — desktop only */}
          <div className="hidden sm:block w-px h-7 bg-[#1C1C1C]/12 shrink-0" />

          {/* Logo strip — hidden scrollbar, swipeable on mobile */}
          <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <ul className="flex items-center gap-8 md:gap-10 min-w-max md:min-w-0 md:justify-between">
              {logos.map((logo) => (
                <li key={logo.name} className="shrink-0 flex items-center justify-center h-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
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
