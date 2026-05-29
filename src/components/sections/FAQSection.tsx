import { Plus } from "@phosphor-icons/react/dist/ssr";

export function FAQSection() {
  const faqs = [
    {
      q: "How long does the installation process take?",
      a: "Most residential installations are completed within 1-2 days after design approval. Commercial projects vary based on scale, typically ranging from 2-4 weeks.",
    },
    {
      q: "Will solar panels damage my roof?",
      a: "No. Our premium mounting hardware is designed to protect your roof. In many cases, panels actually extend the life of the roof underneath by shielding it from the elements.",
    },
    {
      q: "What happens during a power outage?",
      a: "Standard grid-tied systems shut down during outages for safety. However, if you opt for our integrated battery storage solutions, your home will remain powered seamlessly.",
    },
    {
      q: "Are there financing options available?",
      a: "Yes. We offer a variety of flexible financing options including $0-down plans, solar loans, and leases to make clean energy accessible.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-adobe px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl text-center mb-12 text-cream font-sans font-bold">
          Common Questions
        </h2>
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
