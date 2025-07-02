"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is eligible for Roboflow for Startups?",
    answer:
      "Roboflow for Startups is available to early-stage companies that have raised less than $5M in funding and are new Roboflow customers.",
  },
  {
    question: "How does it work?",
    answer:
      "Apply through our website or via a partner accelerator. Once approved, you'll receive a year of free access to the Roboflow Growth plan, plus additional partner benefits.",
  },
  {
    question: "Will the offer expire?",
    answer:
      "The free year of Growth plan is valid for one year from activation. After that, you can continue on a paid plan at a discounted rate.",
  },
  {
    question: "I'm already a Roboflow customer. Is my startup eligible?",
    answer:
      "This offer is for new Roboflow customers only. Existing customers who have already been on a paid plan are not eligible.",
  },
  {
    question: "How do I become a Roboflow for Startups partner?",
    answer:
      "Roboflow partners with VCs, accelerators, and startup programs to share offers. If you'd like to add Roboflow to your deal book or offer, contact startups@roboflow.com.",
  },
];

function ListItem_FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        className="flex items-center justify-between py-8 px-2 w-full text-left focus:outline-none group cursor-pointer transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        type="button"
      >
        <span className="text-lg md:text-xl text-gray-900 font-normal">
          {question}
        </span>
        <span className="ml-4 flex items-center">
          <Plus
            className={`w-6 h-6 text-violet-400 group-hover:text-violet-600 transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        } overflow-hidden`}
        aria-hidden={!open}
      >
        <div className="text-gray-600 text-base md:text-lg leading-relaxed pl-2 pr-8 pb-6">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function Section_FAQ() {
  return (
    <section className="w-full py-24 px-4 md:px-16" id="faq">
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
          {faqs.map((faq) => (
            <ListItem_FAQ
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
