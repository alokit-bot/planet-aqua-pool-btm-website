import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/site";

export const StickyCallBar = () => {
  return (
    <a
      href={`tel:${BUSINESS.phoneTel}`}
      data-testid="sticky-call-bar"
      className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 h-14 rounded-full bg-[#FFB703] text-[#0a1e33] font-bold shadow-[0_18px_40px_-10px_rgba(255,183,3,0.7)] active:scale-95 transition-transform"
    >
      <Phone className="w-5 h-5" />
      Call {BUSINESS.phoneDisplay}
    </a>
  );
};
