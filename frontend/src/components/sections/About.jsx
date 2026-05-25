import { Heart, Sparkles, Users } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
              <span className="w-8 h-px bg-[#00B4D8]" />
              About Us
            </div>
            <h2
              data-testid="about-headline"
              className="font-display font-black text-[#003566] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
            >
              A neighbourhood pool with <span className="text-[#00B4D8]">Olympic-grade</span> heart.
            </h2>
            <p className="mt-7 text-[#0a1e33]/75 text-base sm:text-lg leading-relaxed">
              Planet Aqua Pool has been BTM Layout's go-to since day one. Not
              the flashiest. Not the priciest. Just the one where the coaches
              actually remember your name, the water is always clean, and the
              kid who was scared of the deep end last month is now doing
              cannonballs.
            </p>
            <p className="mt-5 text-[#0a1e33]/75 text-base sm:text-lg leading-relaxed">
              We're a community first, a fitness centre second. Whether you're
              a 5 AM lap-counter, a parent enrolling your first swimmer, or
              someone finally chasing the skill you put off for 20 years — you
              belong here.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              <StatCard
                value="885+"
                label="Happy Members"
                icon={Users}
                tone="ocean"
                testId="about-stat-members"
              />
              <StatCard
                value="4.6★"
                label="Google Rating"
                icon={Sparkles}
                tone="gold"
                testId="about-stat-rating"
              />
              <StatCard
                value="18 hrs"
                label="Open Every Day"
                icon={Heart}
                tone="aqua"
                testId="about-stat-hours"
              />
              <div
                data-testid="about-stat-quote"
                className="relative rounded-2xl p-7 bg-[#001d3d] text-white overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#00B4D8]/20 blur-2xl" />
                <div className="relative">
                  <div className="text-[#FFB703] text-5xl leading-none font-serif">"</div>
                  <p className="mt-2 text-white/90 leading-relaxed">
                    Built on trust, run by people who care, kept clean every single day.
                  </p>
                  <div className="mt-4 text-xs uppercase tracking-widest text-[#90e0ef]">
                    — The Planet Aqua promise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const tonePalette = {
  ocean: "bg-[#003566] text-white",
  aqua: "bg-[#caf0f8] text-[#003566]",
  gold: "bg-[#FFB703] text-[#0a1e33]",
};

const StatCard = ({ value, label, icon: Icon, tone, testId }) => (
  <div
    data-testid={testId}
    className={`rounded-2xl p-7 ${tonePalette[tone]} transition-transform hover:-translate-y-1 hover:shadow-xl duration-300`}
  >
    <Icon className="w-7 h-7 mb-5 opacity-80" />
    <div className="font-display font-black text-4xl sm:text-5xl tracking-tight">
      {value}
    </div>
    <div className="mt-2 text-sm font-medium opacity-85">{label}</div>
  </div>
);
