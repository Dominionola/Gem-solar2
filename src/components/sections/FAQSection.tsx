import { Plus } from "@phosphor-icons/react/dist/ssr";

const faqs = [
  {
    q: "How long does the installation process take?",
    a: "Most residential installations across Lagos, Ibadan, and Abuja are completed within 1–2 days after site survey and design approval. Commercial projects vary based on scale — typically 1–3 weeks for SME installations and 4–8 weeks for large industrial arrays.",
  },
  {
    q: "How do I keep power on during NEPA/PHCN outages?",
    a: "Our solar-plus-battery systems are designed specifically for Nigeria's grid instability. With an integrated battery bank and hybrid inverter, your home or business stays fully powered during NEPA outages — automatically, with zero manual switching. Most clients run 24 hours on stored solar energy alone.",
  },
  {
    q: "What solar system size do I need to run AC in Nigeria?",
    a: "A standard 1.5HP air conditioner draws roughly 1.2kW. For a home with 2 ACs, lighting, fridge, and TV, you'll typically need a 5–10kW solar system with 10–20kWh of battery storage. We provide a free site survey and load analysis to design the exact right system for your energy profile.",
  },
  {
    q: "Do you install solar in Lagos, Ibadan, Abuja, and other cities?",
    a: "Yes. We serve all major Nigerian cities including Lagos, Ibadan, Abuja, Port Harcourt, Kano, Ogun, and surrounding areas. Our field teams are based locally across these regions for fast installation and after-sales support.",
  },
  {
    q: "Are there financing options available in Naira?",
    a: "Yes. We offer flexible ₦0 upfront (pay-over-time) plans, Naira-denominated solar loans, and lease agreements. We partner with leading Nigerian financial institutions to make clean energy accessible to both individuals and businesses without large upfront capital.",
  },
  {
    q: "Will solar panels damage my roof?",
    a: "No. Our premium mounting hardware is engineered specifically for Nigerian roof profiles — including corrugated iron, concrete slab, and aluminum roofing sheets. In most cases, the panels actually protect the underlying roof by shielding it from direct UV, rain, and heat.",
  },
  {
    q: "Are your solar panels and inverters NEMSA-approved?",
    a: "Yes. All equipment we supply is NEMSA (Nigerian Electricity Management Services Agency) certified and compliant with Nigerian Electricity Regulatory Commission (NERC) standards. We only work with Tier-1 panel manufacturers and reputable inverter brands such as Victron, Growatt, and SolarEdge.",
  },
  {
    q: "What warranty and after-sales support do you offer?",
    a: "Every Gem Solar installation comes with a 25-year comprehensive performance warranty on panels, 10-year inverter warranty, and 5-year installation workmanship guarantee. Our local support teams in Lagos, Ibadan, and Abuja provide same-week on-site maintenance visits.",
  },
];

// FAQPage JSON-LD Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-adobe px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-cream/50 text-center mb-4 font-medium">
          Common Questions
        </p>
        <h2 className="text-4xl lg:text-5xl text-center mb-4 text-cream font-sans font-bold">
          Everything you need to know
        </h2>
        <p className="text-center text-cream/60 font-sans text-base mb-12 max-w-xl mx-auto">
          Answers to the most common questions from Nigerian homeowners and
          businesses considering solar energy.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border-b border-cream/15 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 font-sans font-medium text-xl lg:text-2xl text-cream hover:text-cream/70 transition-colors list-none">
                {faq.q}
                <span className="ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-cream/30 group-open:rotate-45 transition-transform duration-300">
                  <Plus className="w-4 h-4 text-cream" />
                </span>
              </summary>
              <div className="pb-6 font-sans text-cream/75 text-lg leading-relaxed pl-2">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
