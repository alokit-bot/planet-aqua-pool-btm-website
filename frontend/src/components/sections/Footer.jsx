import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { BUSINESS } from "@/data/site";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-[#001d3d] text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-[#003566] flex items-center justify-center relative overflow-hidden">
                <span className="absolute inset-0 bg-[#00B4D8] origin-bottom scale-y-[0.45]" />
                <span className="relative font-display font-black text-white text-xl">P</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-lg">Planet Aqua Pool</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#90e0ef]">BTM Layout, Bengaluru</div>
              </div>
            </div>
            <p className="text-white/65 leading-relaxed max-w-md">
              BTM's most-loved swimming pool & coaching centre. 885+ swimmers
              and counting trust us to help them dive into their best selves.
            </p>
          </div>

          <div>
            <div className="font-display font-bold text-sm uppercase tracking-wider text-[#90e0ef] mb-4">
              Get in touch
            </div>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                data-testid="footer-phone"
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#FFB703]" />
                <span className="link-underline">{BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-address"
                className="flex items-start gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#FFB703]" />
                <span>BTM 1st Stage, Bengaluru 560068</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/80">
                <Clock className="w-4 h-4 text-[#FFB703]" />
                <span>{BUSINESS.hoursShort}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-sm uppercase tracking-wider text-[#90e0ef] mb-4">
              Quick links
            </div>
            <div className="space-y-2.5 text-sm">
              {["About", "Programs", "Why Us", "Reviews", "Gallery", "Contact"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(/\s+/g, "")}`}
                    data-testid={`footer-link-${l.toLowerCase()}`}
                    className="block text-white/70 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div data-testid="footer-copyright">
            © {new Date().getFullYear()} Planet Aqua Pool. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Made with love for BTM swimmers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
