"use client";

import {
  Zap,
  Users,
  Download,
  Headphones,
  Megaphone,
  Layers,
} from "lucide-react";
import { LottieAnimation } from "./LottieAnimation";

export function Section_ExclusiveOffer() {
  const offers = [
    {
      icon: Layers,
      title: "Full feature access",
      text: "to dataset management, annotation, model training, low-code Workflows, and multi-target deployment (cloud, edge, browser, on-prem).",
    },
    {
      icon: Zap,
      title: "1800 platform credits",
      text: "loaded up front for storage, dataset indexing, AI-assisted labeling, cloud-GPU training, inference API calls, and deployment.",
    },
    {
      icon: Users,
      title: "50 private projects & 20 team seats",
      text: "with role-based access control.",
    },
    {
      icon: Download,
      title: "Model weights export",
      text: "with a commercial Ultralytics license for 10 embedded devices.",
    },
    {
      icon: Headphones,
      title: "Priority support",
      text: "from Roboflow engineers (chat & email) and an onboarding call with a Roboflow computer vision expert.",
    },
    {
      icon: Megaphone,
      title: "Joint marketing post",
      text: "once you've launched to get your new product in front of our audience of 1M+ developers (optional).",
    },
  ];

  return (
    <section
      id="offer"
      className="w-full py-16 px-2 md:px-0 flex flex-col justify-center items-center bg-transparent"
    >
      <div className="flex flex-col items-center justify-center px-8 py-12">
        <div
          className="flex items-center justify-center mb-8 rounded-2xl"
          style={{
            background: "radial-gradient(circle, white 60%, transparent 100%)",
          }}
        >
          <LottieAnimation />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-violet-700 text-left leading-tight mb-8">
          <span className="text-gray-500">Exclusive Offer:</span> 1 Free Year on
          Growth Plan
        </h2>
        <p className="text-gray-600 mb-8 text-center leading-relaxed max-w-3xl mx-auto text-xl">
          {
            "We're offering access to our Growth Plan for free for 12 months to eligible startups in our partner accelerator, VC, and startup programs. Our offer includes:"
          }
        </p>
      </div>
      <div
        className="max-w-screen-lg w-full bg-white rounded-2xl border border-gray-200
        grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 divide-y md:divide-y-0
        divide-gray-200 overflow-hidden"
      >
        {offers.map((offer, idx) => {
          const Icon = offer.icon;
          return (
            <div
              key={idx}
              className={`flex flex-col items-start justify-start px-8 py-12`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                <Icon className="w-4 h-4 mb-4 text-violet-700" />
                <span className="font-bold text-gray-900">
                  {offer.title}
                </span>{" "}
                {offer.text}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-gray-600 py-24 text-center leading-relaxed max-w-3xl mx-auto text-xl border-b border-gray-200">
        {
          "To redeem the offer, follow the instructions shared by your program manager or outlined in your program's dealbook."
        }
      </p>
    </section>
  );
}
