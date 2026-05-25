import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, BUSINESS } from "@/data/site";

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32 bg-[#001d3d] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#00B4D8]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#003566] blur-3xl" />
      </div>
      <div className="grain" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#90e0ef] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
            <span className="w-8 h-px bg-[#90e0ef]" />
            What Members Say
          </div>
          <h2
            data-testid="testimonials-headline"
            className="font-display font-black text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
          >
            <span className="text-[#FFB703]">{BUSINESS.rating}★</span> from {BUSINESS.reviewCount}+ swimmers.
            <br />Here's why.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-testid={`testimonial-${i}`}
              className="relative p-7 sm:p-9 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-[#00B4D8]/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="absolute top-7 right-7 w-10 h-10 text-[#00B4D8]/20" />
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#FFB703] text-[#FFB703]"
                  />
                ))}
              </div>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-light">
                "{t.body}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#003566] flex items-center justify-center font-display font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://www.google.com/maps/place/Planet+Aqua+Pool/@12.9198653,77.6190964,17z/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="testimonials-google-link"
            className="inline-flex items-center gap-2 text-[#90e0ef] hover:text-white transition-colors text-sm font-semibold link-underline"
          >
            Read all {BUSINESS.reviewCount}+ reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};
