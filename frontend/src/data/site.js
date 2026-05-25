// Centralised business data for Planet Aqua Pool
export const BUSINESS = {
  name: "Planet Aqua Pool",
  tagline: "Dive Into Your Best Self",
  location: "BTM Layout, Bengaluru",
  address:
    "425, 34th Main Rd, Old Madiwala, Dollar Scheme Colony, BTM 1st Stage, Bengaluru, Karnataka 560068",
  phoneDisplay: "+91 80730 30696",
  phoneTel: "+918073030696",
  hours: "5:00 AM – 11:00 PM",
  hoursShort: "5 AM – 11 PM, all days",
  rating: 4.6,
  reviewCount: 885,
  mapsUrl:
    "https://www.google.com/maps/place/Planet+Aqua+Pool/@12.9198653,77.6190964,17z/",
  mapsEmbed:
    "https://www.google.com/maps?q=Planet+Aqua+Pool,+425+34th+Main+Rd,+BTM+1st+Stage,+Bengaluru&output=embed",
};

export const PROGRAMS = [
  {
    id: "day-pass",
    title: "Single Day Pass",
    price: "₹150 – ₹200",
    unit: "per visit",
    description:
      "Just visiting? Drop in for a refreshing swim, anytime between 5 AM and 11 PM. Towels, showers, and a clean pool ready for you.",
    perks: ["All-day access", "Showers & lockers", "No commitment"],
    badge: null,
  },
  {
    id: "beginner",
    title: "Beginner Classes",
    price: "₹3,000 – ₹4,000",
    unit: "per month",
    description:
      "Personal, step-by-step coaching from Koushik Sir & Danish Sir. Most students go from nervous to confident in 3 weeks.",
    perks: ["Daily coached batches", "Small group focus", "All skill checks included"],
    badge: "Most Loved",
  },
  {
    id: "kids",
    title: "Kids Summer Program",
    price: "₹2,000 – ₹3,000",
    unit: "per session",
    description:
      "Built for ages 5–14. Splash, play, learn — limited batches with extra safety eyes on every kid in the water.",
    perks: ["Limited batches", "Certified safety", "Weekly progress notes"],
    badge: "Seasonal",
  },
  {
    id: "monthly",
    title: "Monthly Membership",
    price: "₹1,500 – ₹2,500",
    unit: "per month",
    description:
      "For regulars who swim solo. Daily lap access without lesson coaching. Adult & student pricing available.",
    perks: ["Daily swim access", "Student pricing", "Flexible timings"],
    badge: null,
  },
  {
    id: "personal",
    title: "Personal Coaching",
    price: "₹5,000 – ₹8,000",
    unit: "per month",
    description:
      "One-on-one with a senior coach. Stroke correction, endurance, race technique — designed around your body and your goal.",
    perks: ["1-on-1 sessions", "Custom plan", "Stroke video review"],
    badge: "Premium",
  },
  {
    id: "annual",
    title: "Annual Membership",
    price: "₹15,000 – ₹20,000",
    unit: "per year",
    description:
      "Our best value. Swim every day, every season, without thinking about it. Includes priority enrolment in coached batches.",
    perks: ["365-day access", "Priority enrolment", "Save vs monthly"],
    badge: "Best Value",
  },
];

export const REASONS = [
  {
    icon: "Award",
    title: "Expert Coaches",
    text: "Koushik Sir, Danish Sir & the team — patient with beginners, sharp with technique. They actually teach.",
  },
  {
    icon: "Droplets",
    title: "Spotless Pool",
    text: "Daily filtration, chemical balance checks twice a day. Clear water you'll actually want to swim in.",
  },
  {
    icon: "Users",
    title: "All Age Groups",
    text: "From 5-year-olds learning to float to 60-year-olds doing daily laps. Everyone fits here.",
  },
  {
    icon: "Clock",
    title: "Open 5 AM – 11 PM",
    text: "Early-morning swimmers, late-night unwinders, post-school kids — there's a slot that fits your life.",
  },
  {
    icon: "ParkingSquare",
    title: "Parking & Easy Entry",
    text: "On-site parking, wheelchair accessible, clean restrooms, refreshments. The small stuff, sorted.",
  },
  {
    icon: "Trophy",
    title: "885+ Happy Members",
    text: "4.6 stars on Google. BTM's most-rated pool isn't an accident — it's earned, one swimmer at a time.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya R.",
    role: "Parent, BTM 2nd Stage",
    body: "My 8-year-old was terrified of water. After the summer batch with Koushik Sir, she was diving off the side. The patience and care here is genuine.",
    stars: 5,
  },
  {
    name: "Arjun M.",
    role: "Software Engineer, HSR Layout",
    body: "5 AM swim before work has changed my life. The pool is always clean, never overcrowded in the mornings, and the staff knows everyone by name.",
    stars: 5,
  },
  {
    name: "Meera K.",
    role: "College Student",
    body: "Joined as an absolute beginner. Within a month I was swimming a full lap. Danish Sir breaks everything down so simply. Best decision of my year.",
    stars: 5,
  },
  {
    name: "Ravi S.",
    role: "Annual Member, 2 years",
    body: "Jaffar at the front desk handles everything smoothly — bookings, queries, refills. Feels less like a gym and more like a neighbourhood club.",
    stars: 5,
  },
];

export const GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean swimming pool with crystal blue water",
    caption: "Our main pool",
  },
  {
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Swimmer doing freestyle stroke underwater",
    caption: "Train your technique",
  },
  {
    url: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1200&q=80",
    alt: "Child learning to swim with coach",
    caption: "Kids summer batch",
  },
  {
    url: "https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?auto=format&fit=crop&w=1200&q=80",
    alt: "Empty lane lines in a pool",
    caption: "Lap lanes, all day",
  },
  {
    url: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=1200&q=80",
    alt: "Underwater shot of swimmer",
    caption: "Find your flow",
  },
  {
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    alt: "Outdoor swimming pool with sun reflection",
    caption: "Open 5 AM to 11 PM",
  },
];
