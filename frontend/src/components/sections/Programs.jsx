import { Check, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROGRAMS, BUSINESS } from "@/data/site";

export const Programs = () => {
  return (
    <section
      id="programs"
      data-testid="programs-section"
      className="relative py-24 sm:py-32 bg-[#fbf9f4]"
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
            <span className="w-8 h-px bg-[#00B4D8]" />
            Programs & Pricing
          </div>
          <h2
            data-testid="programs-headline"
            className="font-display font-black text-[#003566] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
          >
            Pick the program that fits your life.
          </h2>
          <p className="mt-5 text-[#0a1e33]/70 text-base sm:text-lg leading-relaxed">
            All prices in INR. Exact pricing varies by season and age group —
            ring the front desk for the rate that fits you best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, idx) => (
            <ProgramCard key={p.id} program={p} index={idx} />
          ))}
        </div>

        <div
          data-testid="programs-disclaimer"
          className="mt-12 text-center text-sm text-[#0a1e33]/55"
        >
          * Pricing ranges are indicative. Please call to confirm batch availability & current rates.
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ program, index }) => {
  const isPremium = program.badge === "Premium" || program.badge === "Best Value";
  return (
    <Card
      data-testid={`program-card-${program.id}`}
      className={`group relative overflow-hidden rounded-2xl p-7 sm:p-8 border-2 transition-all duration-500 hover:-translate-y-1 ${
        isPremium
          ? "bg-[#003566] text-white border-[#003566] hover:shadow-[0_30px_60px_-20px_rgba(0,53,102,0.5)]"
          : "bg-white border-[#003566]/8 hover:border-[#00B4D8]/40 hover:shadow-[0_30px_60px_-25px_rgba(0,180,216,0.35)]"
      }`}
    >
      {program.badge && (
        <Badge
          data-testid={`program-badge-${program.id}`}
          className={`absolute top-5 right-5 rounded-full font-semibold border-0 ${
            isPremium
              ? "bg-[#FFB703] text-[#0a1e33]"
              : program.badge === "Most Loved"
                ? "bg-[#00B4D8] text-white"
                : "bg-[#caf0f8] text-[#003566]"
          }`}
        >
          {program.badge}
        </Badge>
      )}

      <div className={`text-xs uppercase tracking-[0.18em] font-semibold mb-4 ${isPremium ? "text-[#90e0ef]" : "text-[#00B4D8]"}`}>
        {program.id === "annual" ? "Yearly" : program.id === "day-pass" ? "Drop-in" : "Recurring"}
      </div>

      <h3
        className={`font-display font-extrabold text-2xl sm:text-[28px] leading-tight mb-5 ${
          isPremium ? "text-white" : "text-[#003566]"
        }`}
      >
        {program.title}
      </h3>

      <div className="flex items-baseline gap-2 mb-5">
        <span
          className={`font-display font-black text-3xl sm:text-4xl ${
            isPremium ? "text-white" : "text-[#003566]"
          }`}
        >
          {program.price}
        </span>
        <span className={`text-sm ${isPremium ? "text-white/70" : "text-[#0a1e33]/55"}`}>
          {program.unit}
        </span>
      </div>

      <p
        className={`text-[15px] leading-relaxed mb-6 ${
          isPremium ? "text-white/80" : "text-[#0a1e33]/70"
        }`}
      >
        {program.description}
      </p>

      <ul className="space-y-2.5 mb-7">
        {program.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                isPremium ? "text-[#FFB703]" : "text-[#00B4D8]"
              }`}
            />
            <span className={isPremium ? "text-white/85" : "text-[#0a1e33]/80"}>{perk}</span>
          </li>
        ))}
      </ul>

      <a href={`tel:${BUSINESS.phoneTel}`} data-testid={`program-cta-${program.id}`}>
        <Button
          className={`w-full rounded-full h-11 font-semibold transition-all ${
            isPremium
              ? "bg-[#FFB703] hover:bg-[#fb8500] text-[#0a1e33]"
              : "bg-[#003566] hover:bg-[#001d3d] text-white"
          }`}
        >
          <Phone className="w-4 h-4 mr-2" />
          Enquire about this
        </Button>
      </a>
    </Card>
  );
};
