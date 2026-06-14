// ============================================================
// DrinkWell Customs — Centralized Site Data
// All content is structured for future CMS/API integration.
// Replace these static exports with API calls when backend is ready.
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImage: string;
}

export interface TrustItem {
  label: string;
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface BrandingCase {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ProductItem {
  id: string;
  name: string;
  size: string;
  image: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterData {
  quickLinks: NavLink[];
  services: NavLink[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: { platform: string; href: string; icon: string }[];
}

// ─── Navigation ──────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Why Us", href: "#why-drinkwell" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Showcase", href: "#branding-showcase" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#cta" },
];

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  headline: "Custom Branded Water Bottles That Promote Your Business",
  subheadline:
    "Premium packaged drinking water with custom branding, printing, filling and bulk delivery for businesses, events and celebrations.",
  primaryCta: { label: "Get Quote", href: "#cta" },
  secondaryCta: { label: "View Samples", href: "#branding-showcase" },
  heroImage: "/images/hero-bottle.png",
};

// ─── Trust Bar ───────────────────────────────────────────────
export const trustItems: TrustItem[] = [
  { label: "Restaurants" },
  { label: "Hotels" },
  { label: "Events" },
  { label: "Corporate Clients" },
  { label: "Exhibitions" },
  { label: "Weddings" },
  { label: "Cafés" },
  { label: "Schools" },
  { label: "Product Launches" },
  { label: "Political Campaigns" },
];

// ─── Why DrinkWell ───────────────────────────────────────────
export const featureCards: FeatureCard[] = [
  {
    id: "ready-to-serve",
    icon: "droplet",
    title: "Ready-To-Serve Bottles",
    description:
      "Receive fully filled, sealed, and labeled bottles — ready to hand out to your guests the moment they arrive.",
  },
  {
    id: "custom-branding",
    icon: "palette",
    title: "Fully Custom Branding",
    description:
      "From logo placement to full-wrap designs, every bottle becomes a premium extension of your brand identity.",
  },
  {
    id: "bulk-delivery",
    icon: "truck",
    title: "Bulk Event Delivery",
    description:
      "Whether it's 100 or 10,000 bottles, we handle production and logistics so you can focus on your event.",
  },
  {
    id: "hygienic",
    icon: "shield",
    title: "Hygienic Packaged Drinking Water",
    description:
      "Multi-stage purified, mineral-enriched water that meets the highest safety and quality standards.",
  },
];

// ─── How It Works ────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Share Your Logo",
    description:
      "Send us your brand assets — logo, colors, tagline. We'll take it from there.",
    icon: "upload",
  },
  {
    step: 2,
    title: "We Design & Print Labels",
    description:
      "Our design team creates stunning label artwork and prints on premium label stock.",
    icon: "pen-tool",
  },
  {
    step: 3,
    title: "We Deliver Ready Bottles",
    description:
      "Filled, sealed, branded bottles delivered to your doorstep — on time, every time.",
    icon: "package",
  },
];

// ─── Branding Showcase ───────────────────────────────────────
export const brandingCases: BrandingCase[] = [
  {
    id: "restaurant",
    title: "Restaurant Branding",
    category: "Hospitality",
    image: "/images/branding-restaurant.png",
    description:
      "Premium branded water for fine dining restaurants, enhancing the guest experience at every table.",
  },
  {
    id: "hotel",
    title: "Hotel Branding",
    category: "Hospitality",
    image: "/images/branding-hotel.png",
    description:
      "Custom room water and event water that elevates hotel brand presence across every touchpoint.",
  },
  {
    id: "wedding",
    title: "Wedding Branding",
    category: "Events",
    image: "/images/branding-wedding.png",
    description:
      "Personalized bottles that add an elegant, memorable touch to your special day.",
  },
  {
    id: "corporate",
    title: "Corporate Branding",
    category: "Corporate",
    image: "/images/branding-corporate.png",
    description:
      "Conference and office water that reinforces brand identity in every meeting and event.",
  },
  {
    id: "event",
    title: "Event Branding",
    category: "Events",
    image: "/images/branding-event.png",
    description:
      "Exhibition and launch event water that makes your brand impossible to ignore.",
  },
];

// ─── Product Showcase ────────────────────────────────────────
export const products: ProductItem[] = [
  {
    id: "300ml",
    name: "Compact 300ml",
    size: "300ml",
    image: "/images/hero-bottle.png",
    description: "Perfect for conferences, seminars, and compact events.",
  },
  {
    id: "500ml",
    name: "Classic 500ml",
    size: "500ml",
    image: "/images/hero-bottle.png",
    description: "Our most popular size — ideal for every occasion.",
  },
  {
    id: "1l",
    name: "Premium 1L",
    size: "1L",
    image: "/images/hero-bottle.png",
    description:
      "Maximum branding surface for hotels, restaurants, and VIP events.",
  },
];

// ─── Industries ──────────────────────────────────────────────
export const industries: IndustryItem[] = [
  {
    id: "hotels",
    title: "Hotels",
    icon: "building",
    description: "In-room water, banquet events, and poolside branding.",
  },
  {
    id: "restaurants",
    title: "Restaurants",
    icon: "utensils",
    description: "Table water that extends your dining brand identity.",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    icon: "briefcase",
    description: "Conferences, board meetings, and office hydration.",
  },
  {
    id: "weddings",
    title: "Weddings",
    icon: "heart",
    description: "Personalized bottles for the couple's special day.",
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    icon: "layout",
    description: "Trade shows, stalls, and product launch events.",
  },
  {
    id: "cafes",
    title: "Cafés",
    icon: "coffee",
    description: "Branded hydration for trendy cafés and bakeries.",
  },
  {
    id: "schools",
    title: "Schools",
    icon: "book-open",
    description: "Educational events, sports days, and campus branding.",
  },
  {
    id: "political",
    title: "Political Campaigns",
    icon: "megaphone",
    description: "Rally distribution and constituency engagement.",
  },
];

// ─── Benefits ────────────────────────────────────────────────
export const benefits: Benefit[] = [
  {
    title: "Brand Visibility",
    description:
      "Every bottle travels — from table to desk to gym bag. Your brand follows.",
    icon: "eye",
  },
  {
    title: "Premium Experience",
    description:
      "Custom water communicates care and attention to detail that guests remember.",
    icon: "sparkles",
  },
  {
    title: "QR Code Marketing",
    description:
      "Add QR codes to labels linking to your website, menu, or campaign page.",
    icon: "qr-code",
  },
  {
    title: "Event Personalization",
    description:
      "Every event deserves its own branded hydration — weddings, launches, conferences.",
    icon: "calendar",
  },
  {
    title: "Better Recall Value",
    description:
      "Physical branding creates lasting memory anchors that digital ads can't replicate.",
    icon: "brain",
  },
];

// ─── Testimonials ────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Menon",
    role: "General Manager",
    company: "The Grand Palace Hotel",
    quote:
      "DrinkWell transformed our guest experience. Every room now features our branded water — the attention to detail is remarkable.",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Event Director",
    company: "Stellar Events Co.",
    quote:
      "We've used DrinkWell for over 20 corporate events. The quality is consistently excellent and delivery is always on time.",
  },
  {
    id: "t3",
    name: "Amit Patel",
    role: "Owner",
    company: "Saffron Fine Dining",
    quote:
      "Our guests always compliment the branded water bottles. It's a small touch that makes a big impression.",
  },
  {
    id: "t4",
    name: "Sneha Kapoor",
    role: "Marketing Head",
    company: "TechVista Solutions",
    quote:
      "The QR code labels were genius — we saw a 40% increase in website visits from our conference attendees.",
  },
  {
    id: "t5",
    name: "Vikram Desai",
    role: "Wedding Planner",
    company: "DreamDay Celebrations",
    quote:
      "Every couple we recommend DrinkWell to falls in love with the personalized bottles. It's become our signature touch.",
  },
  {
    id: "t6",
    name: "Nisha Gupta",
    role: "Operations Manager",
    company: "Urban Brew Café Chain",
    quote:
      "Branded water across our 12 locations has reinforced our café identity. DrinkWell makes it effortless.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────
export const faqItems: FaqItem[] = [
  {
    id: "faq1",
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order starts at 100 bottles. For large events and corporate accounts, we offer volume-based pricing with significant discounts.",
  },
  {
    id: "faq2",
    question: "What is the typical delivery time?",
    answer:
      "Standard orders are delivered within 5–7 business days. For urgent requirements, we offer express 48-hour delivery at a nominal premium.",
  },
  {
    id: "faq3",
    question: "Can I create a fully custom design?",
    answer:
      "Absolutely. You can provide your own artwork or work with our in-house design team. We support full-wrap labels, custom colors, QR codes, and special finishes.",
  },
  {
    id: "faq4",
    question: "What bottle sizes are available?",
    answer:
      "We offer 300ml, 500ml, and 1L bottles in multiple shapes. Custom sizes can be arranged for large-volume orders.",
  },
  {
    id: "faq5",
    question: "Which locations do you serve?",
    answer:
      "We currently deliver across all major Indian cities with nationwide logistics partnerships. International shipping is available for bulk orders.",
  },
];

// ─── Footer ──────────────────────────────────────────────────
export const footerData: FooterData = {
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#why-drinkwell" },
    { label: "Products", href: "#products" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  services: [
    { label: "Custom Branding", href: "#branding-showcase" },
    { label: "Bulk Delivery", href: "#how-it-works" },
    { label: "Event Water", href: "#industries" },
    { label: "Corporate Solutions", href: "#industries" },
    { label: "Label Design", href: "#how-it-works" },
  ],
  contact: {
    email: "hello@drinkwellcustoms.com",
    phone: "+91 98765 43210",
    address: "Mumbai, Maharashtra, India",
  },
  socials: [
    { platform: "Instagram", href: "#", icon: "instagram" },
    { platform: "LinkedIn", href: "#", icon: "linkedin" },
    { platform: "Twitter", href: "#", icon: "twitter" },
    { platform: "Facebook", href: "#", icon: "facebook" },
  ],
};
