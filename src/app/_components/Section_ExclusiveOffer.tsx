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
import { Badge } from "@/components/shared/elements/Badge";

export function Section_ExclusiveOffer() {
  const offers = [
    {
      icon: Layers,
      title: "Full feature access",
      text: "to dataset management, annotation, model training, low-code Workflows, and multi-target deployment (cloud, edge, browser, on-prem).",
    },
    {
      icon: Zap,
      title: "A full year of platform credits loaded up front",
      text: "for storage, dataset indexing, AI-assisted labeling, cloud-GPU training, inference API calls, and deployment.",
    },
    {
      icon: Users,
      title: "20 private projects & 3 users seats",
      text: "with concurrent training jobs.",
    },
    {
      icon: Download,
      title: "Model weights download",
      text: "with a commercial Ultralytics license for 10 embedded devices.",
    },
    {
      icon: Headphones,
      title: "Community support",
      text: "from Roboflow team and computer vision engineers.",
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
      className="w-full pb-16 px-2 md:px-0 flex flex-col justify-center items-center bg-transparent"
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
          Core Plan {"($948 value)"}
        </h2>
        <p className="text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto text-xl">
          We&apos;re offering access to our Core Plan for free for 12 months to{" "}
          <span className="relative group font-bold text-violet-700">
            eligible startups in our partner accelerator, VC, and startup
            programs
          </span>
          .
        </p>
        <Badge
          variant="secondary"
          className="mb-2 bg-violet-50 text-violet-700 border-violet-200 uppercase"
        >
          How to redeem
        </Badge>
        <RedemptionSteps />
        <div className="max-w-screen-sm mx-auto text-gray-600 text-sm text-center p-6 bg-gray-50 rounded-xl">
          If your program is not yet a participating partner, connect us with
          your program manager:{" "}
          <a
            href="mailto:startups@roboflow.com"
            className="text-violet-700 hover:underline font-medium"
          >
            startups@roboflow.com
          </a>
          !
        </div>
      </div>
      <div className="max-w-screen-lg w-full">
        <h3 className="text-2xl font-semibold text-violet-700 text-center mb-6">
          Our offer includes:
        </h3>
        <div
          className="w-full bg-white rounded-2xl border border-gray-200
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
      </div>
    </section>
  );
}

const RedemptionSteps = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12 w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
      <div className="bg-white border border-violet-100 rounded-xl p-6 flex flex-col items-start">
        <div className="flex items-center mb-2">
          <span className="font-bold text-violet-700 text-sm mr-2">1.</span>
          <span className="font-semibold text-gray-900 text-sm">
            Check Eligibility
          </span>
        </div>
        <div className="text-gray-600 text-sm">
          Startups in select accelerators, VC funds, and programs are eligible.
        </div>
      </div>
      <div className="bg-white border border-violet-100 rounded-xl p-6 flex flex-col items-start">
        <div className="flex items-center mb-2">
          <span className="font-bold text-violet-700 text-sm mr-2">2.</span>
          <span className="font-semibold text-gray-900 text-sm">
            Visit perks page
          </span>
        </div>
        <div className="text-gray-600 text-sm">
          Email your program manager or visit your program&apos;s perks &
          discounts list.
        </div>
      </div>
      <div className="bg-white border border-violet-100 rounded-xl p-6 flex flex-col items-start">
        <div className="flex items-center mb-2">
          <span className="font-bold text-violet-700 text-sm mr-2">3.</span>
          <span className="font-semibold text-gray-900 text-sm">
            Redeem Offer
          </span>
        </div>
        <div className="text-gray-600 text-sm">
          Follow the instructions to redeem your free year of Core Plan.
        </div>
      </div>
    </div>
  );
};
