import { Phone, MapPin, Clock, ExternalLink, Accessibility, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/data/site";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 sm:py-32 bg-[#fbf9f4]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
            <span className="w-8 h-px bg-[#00B4D8]" />
            Visit Us
          </div>
          <h2
            data-testid="contact-headline"
            className="font-display font-black text-[#003566] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
          >
            Come swim with us.
          </h2>
          <p className="mt-5 text-[#0a1e33]/70 text-base sm:text-lg leading-relaxed">
            Drop by any day between 5 AM and 11 PM. Or call Jaffar at the front desk — he'll sort out everything from batch enrolment to trial visits.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              data-testid="contact-phone-card"
              className="block group p-6 sm:p-7 rounded-2xl bg-[#003566] text-white hover:bg-[#001d3d] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFB703] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0a1e33]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#90e0ef] font-semibold mb-1">
                    Call us
                  </div>
                  <div className="font-display font-bold text-xl sm:text-2xl">
                    {BUSINESS.phoneDisplay}
                  </div>
                  <div className="text-sm text-white/70 mt-2">
                    Tap to call directly →
                  </div>
                </div>
              </div>
            </a>

            <div
              data-testid="contact-address-card"
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#003566]/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#caf0f8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#003566]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#00B4D8] font-semibold mb-1">
                    Address
                  </div>
                  <div className="font-semibold text-[#003566] leading-relaxed">
                    {BUSINESS.address}
                  </div>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-directions-link"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00B4D8] hover:text-[#003566] transition-colors"
                  >
                    Get directions <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div
              data-testid="contact-hours-card"
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#003566]/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFB703]/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#fb8500]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#fb8500] font-semibold mb-1">
                    Hours
                  </div>
                  <div className="font-semibold text-[#003566] text-lg">
                    {BUSINESS.hours}
                  </div>
                  <div className="text-sm text-[#0a1e33]/60 mt-1">
                    Open all 7 days
                  </div>
                </div>
              </div>
            </div>

            <div
              data-testid="contact-amenities"
              className="grid grid-cols-3 gap-3"
            >
              <Amenity icon={Car} label="Parking" />
              <Amenity icon={Accessibility} label="Accessible" />
              <Amenity icon={Coffee} label="Refreshments" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              data-testid="contact-map"
              className="relative rounded-2xl overflow-hidden border border-[#003566]/10 bg-white h-[380px] sm:h-[480px] lg:h-full lg:min-h-[560px]"
            >
              <iframe
                title="Planet Aqua Pool location"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-map-overlay-link"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-5 py-2.5 text-sm font-semibold text-[#003566] hover:bg-[#003566] hover:text-white transition-all"
              >
                Open in Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div
          data-testid="contact-final-cta"
          className="mt-12 sm:mt-16 rounded-2xl bg-[#003566] text-white p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00B4D8]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#FFB703]/20 blur-3xl" />
          <div className="relative">
            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Ready to take the plunge?
            </h3>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-base sm:text-lg">
              One call. One visit. That's all it takes to find your new favourite morning.
            </p>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              data-testid="contact-final-call-btn"
              className="inline-block mt-7"
            >
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-[#FFB703] hover:bg-[#fb8500] text-[#0a1e33] font-bold text-base shadow-[0_14px_40px_-10px_rgba(255,183,3,0.55)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Amenity = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-[#003566]/8">
    <Icon className="w-5 h-5 text-[#00B4D8]" />
    <span className="text-xs font-semibold text-[#003566]">{label}</span>
  </div>
);
