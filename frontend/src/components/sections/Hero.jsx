import { Phone, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/data/site";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100vh] overflow-hidden isolate"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=80"
          alt="Swimmer underwater"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001d3d]/85 via-[#003566]/70 to-[#003566]/95" />
        <div className="grain" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${(i * 11) % 100}%`,
              width: `${10 + (i % 4) * 8}px`,
              height: `${10 + (i % 4) * 8}px`,
              animationDuration: `${10 + (i % 5) * 3}s`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 pb-24 min-h-[100vh] flex flex-col justify-center">
        {/* Rating badge */}
        <div
          data-testid="hero-rating-badge"
          className="rise-in inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full pl-2 pr-4 py-1.5 w-fit mb-7"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="flex items-center gap-0.5 bg-[#FFB703] text-[#0a1e33] rounded-full px-2 py-0.5 text-xs font-bold">
            <Star className="w-3 h-3 fill-current" /> {BUSINESS.rating}
          </span>
          <span className="text-sm font-medium">
            {BUSINESS.reviewCount}+ Google reviews
          </span>
        </div>

        <h1
          data-testid="hero-headline"
          className="rise-in font-display font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] max-w-5xl"
          style={{ animationDelay: "0.15s" }}
        >
          Dive Into Your
          <br />
          <span className="shimmer-text">Best Self.</span>
        </h1>

        <p
          data-testid="hero-subheadline"
          className="rise-in mt-7 max-w-2xl text-white/85 text-base sm:text-lg leading-relaxed"
          style={{ animationDelay: "0.25s" }}
        >
          BTM Layout's most-loved swimming pool & coaching centre. From your
          first nervous splash to a confident lap — our coaches have been
          there. <span className="text-[#90e0ef] font-semibold">885+ swimmers</span> already
          trust us.
        </p>

        <div
          className="rise-in mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <a href={`tel:${BUSINESS.phoneTel}`} data-testid="hero-cta-call">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-7 rounded-full bg-[#FFB703] hover:bg-[#fb8500] text-[#0a1e33] font-bold text-base shadow-[0_14px_40px_-10px_rgba(255,183,3,0.55)] transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 mr-2" />
              Enquire Now — Call {BUSINESS.phoneDisplay}
            </Button>
          </a>
          <a href="#programs" data-testid="hero-cta-programs">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white hover:text-white font-semibold text-base"
            >
              See Programs & Pricing
            </Button>
          </a>
        </div>

        {/* Bottom strip */}
        <div
          className="rise-in mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-4xl"
          style={{ animationDelay: "0.5s" }}
          data-testid="hero-info-strip"
        >
          <div className="flex items-start gap-3 text-white">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center shrink-0 border border-white/20">
              <Clock className="w-5 h-5 text-[#90e0ef]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                Open
              </div>
              <div className="font-semibold">{BUSINESS.hoursShort}</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center shrink-0 border border-white/20">
              <MapPin className="w-5 h-5 text-[#90e0ef]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                Where
              </div>
              <div className="font-semibold">BTM 1st Stage, Bengaluru</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center shrink-0 border border-white/20">
              <Star className="w-5 h-5 text-[#FFB703] fill-[#FFB703]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                Rated
              </div>
              <div className="font-semibold">
                {BUSINESS.rating} / 5 on Google
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[60px] sm:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,90 480,0 720,40 C960,80 1200,30 1440,60 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};
