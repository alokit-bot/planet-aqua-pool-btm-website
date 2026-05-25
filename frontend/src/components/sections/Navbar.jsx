import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/data/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#why", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_24px_rgba(0,53,102,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#003566] flex items-center justify-center relative overflow-hidden">
            <span className="absolute inset-0 bg-[#00B4D8] origin-bottom scale-y-[0.45] transition-transform duration-500 group-hover:scale-y-100" />
            <span className="relative font-display font-black text-white text-lg">P</span>
          </div>
          <div className="leading-tight">
            <div
              className={`font-display font-extrabold text-[15px] sm:text-base transition-colors ${
                scrolled ? "text-[#003566]" : "text-white"
              }`}
            >
              Planet Aqua Pool
            </div>
            <div
              className={`text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-[#00B4D8]" : "text-white/80"
              }`}
            >
              BTM Layout
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`link-underline text-sm font-medium transition-colors ${
                scrolled ? "text-[#0a1e33] hover:text-[#003566]" : "text-white/95 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            data-testid="navbar-call-btn"
          >
            <Button
              className="rounded-full px-5 bg-[#FFB703] hover:bg-[#fb8500] text-[#0a1e33] font-semibold shadow-[0_8px_20px_-6px_rgba(255,183,3,0.6)] transition-transform hover:-translate-y-0.5"
              data-testid="navbar-call-button-inner"
            >
              <Phone className="w-4 h-4 mr-1.5" />
              Call Us
            </Button>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          data-testid="navbar-mobile-toggle"
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[#003566]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-panel"
          className="lg:hidden bg-white border-t border-[#003566]/10 shadow-lg"
        >
          <div className="px-5 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className="block py-3 text-[#0a1e33] font-medium border-b border-[#003566]/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              data-testid="mobile-nav-call"
              className="block pt-3"
            >
              <Button className="w-full rounded-full bg-[#FFB703] hover:bg-[#fb8500] text-[#0a1e33] font-semibold">
                <Phone className="w-4 h-4 mr-1.5" /> {BUSINESS.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
