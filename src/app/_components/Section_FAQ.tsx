import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Who is eligible for Roboflow for Startups?",
  },
  {
    question: "How does it work?",
  },
  {
    question: "Will the offer expire?",
  },
  {
    question: "I'm already a Roboflow customer. Is my startup eligible?",
  },
  {
    question: "How do I become a Roboflow for Startups partner?",
  },
];

export function Section_FAQ() {
  return (
    <section className="w-full bg-white py-24 px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-start justify-center md:justify-start mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            <span className="block md:hidden">Frequently Asked Questions</span>
            <span className="hidden md:block">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </span>
          </h2>
        </div>
        <div className="flex flex-col justify-center divide-y divide-violet-200 border-t border-b border-violet-200">
          {faqs.map((faq, idx) => (
            <button
              key={faq.question}
              className="flex items-center justify-between py-8 px-2 text-left focus:outline-none group cursor-pointer transition-colors"
              tabIndex={0}
              type="button"
            >
              <span className="text-lg md:text-xl text-gray-900 font-normal">
                {faq.question}
              </span>
              <Plus className="w-6 h-6 text-violet-400 group-hover:text-violet-600 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
