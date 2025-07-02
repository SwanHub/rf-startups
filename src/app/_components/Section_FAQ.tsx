"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useState, ReactNode } from "react";

const faqs = [
  {
    question: "Who is eligible for 1 Free Year on Growth Plan?",
    answer:
      "The offer is available exclusively to startups that are part of one of our partner startup programs. Eligible startups must have raised less than $5 million in funding and be new Roboflow customers.",
  },
  {
    question: "Who are your partner programs?",
    answer: (
      <span>
        We partner with{" "}
        <Link
          href="https://cloud.google.com/startups/scale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:underline"
        >
          Google Cloud Startups: Scale
        </Link>
        {", "}
        <Link
          href="https://www.ycombinator.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:underline"
        >
          Y Combinator
        </Link>
        {", "}
        <Link
          href="https://arc.sequoiacap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:underline"
        >
          Sequoia Arc
        </Link>
        , and more. We don&apos;t publicly disclose the full list, so be sure to
        reach out to your program manager or contact us startups@roboflow.com.
      </span>
    ),
  },
  {
    question: "What is included in the offer for eligible startups?",
    answer:
      "All features on our Annual Growth Plan are included, plus a few additional benefits like joint marketing and swag. Be sure to read the details of the offer, which your program manager can provide.",
  },
  {
    question: "I'm already a Roboflow customer. Is my startup eligible?",
    answer:
      "If you are already on a paid plan, no. This offer is for new Roboflow customers. If you're on our free public plan, you are eligible for credits.",
  },
  {
    question:
      "Can I apply for credits if I'm not part of a partner startup program?",
    answer: (
      <span>
        No, this offer is only available to startups in partner startup
        programs. Consider reaching out to us at startups@roboflow.com if
        you&apos;re interested in partnering. We do offer free credits for
        students, researchers and academics through our{" "}
        <Link
          href="https://research.roboflow.com/credits"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:underline"
        >
          Research Credits Program
        </Link>
        .
      </span>
    ),
  },
  {
    question: "Must I be in a current cohort to be eligible for credits?",
    answer:
      "Alumni can redeem the offer. As long as you are a new Roboflow customer with less than $5 million in funding, you are eligible for credits. You can be part of a current or past cohort at your startup program.",
  },
  {
    question: "How do I become a Roboflow for Startups partner?",
    answer:
      "We encourage all startup programs, accelerators, and early-stage VCs interested in offering Roboflow to their portfolio companies to contact us at startups@roboflow.com.",
  },
];

function ListItem_FAQ({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
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
        <div className="text-gray-600 text-base leading-relaxed pl-2 pr-8 pb-6">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function Section_FAQ() {
  return (
    <section className="w-full py-24 px-4 md:px-16" id="faq">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
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
