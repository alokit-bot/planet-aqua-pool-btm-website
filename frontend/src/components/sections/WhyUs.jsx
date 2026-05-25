import {
  Award,
  Droplets,
  Users,
  Clock,
  ParkingSquare,
  Trophy,
} from "lucide-react";
import { REASONS } from "@/data/site";

const iconMap = { Award, Droplets, Users, Clock, ParkingSquare, Trophy };

export const WhyUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Decorative wave bg */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#caf0f8] opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-[#FFB703]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
            <span className="w-8 h-px bg-[#00B4D8]" />
            Why Choose Us
          </div>
          <h2
            data-testid="why-headline"
            className="font-display font-black text-[#003566] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
          >
            Six reasons BTM keeps coming back.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => {
            const Icon = iconMap[r.icon];
            return (
              <div
                key={r.title}
                data-testid={`why-card-${i}`}
                className="group relative p-7 sm:p-8 rounded-2xl border border-[#003566]/8 bg-white hover:border-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(0,53,102,0.25)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#caf0f8]/0 to-[#caf0f8]/0 group-hover:from-[#caf0f8]/40 transition-all duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#003566] flex items-center justify-center mb-6 group-hover:bg-[#00B4D8] transition-colors duration-500 group-hover:rotate-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-[#003566] text-xl sm:text-2xl mb-3">
                    {r.title}
                  </h3>
                  <p className="text-[#0a1e33]/70 leading-relaxed text-[15px]">
                    {r.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
