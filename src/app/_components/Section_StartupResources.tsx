"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Section_StartupResources() {
  const resources = [
    {
      category: "Case Studies",
      description:
        "See how other startups have leveraged Roboflow to achieve rapid growth.",
      link: "https://roboflow.com/case-studies",
    },
    {
      category: "Community Forum",
      description:
        "Join discussions with other startup founders and Roboflow experts.",
      link: "https://discuss.roboflow.com",
    },
    {
      category: "Documentation",
      description:
        "Comprehensive guides and API references for Roboflow products.",
      link: "https://docs.roboflow.com",
    },
    {
      category: "YouTube",
      description: "Watch tutorials and webinars from Roboflow experts.",
      link: "https://roboflow.com/youtube",
    },
  ];

  return (
    <section className="w-full px-4 min-h-screen justify-center items-center flex flex-col pb-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12 p-6">
          Resources for Startups
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Link
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div key={index} className="flex flex-col space-y-4 p-6">
                <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                  {resource.category}
                </div>
                <div className="text-lg font-bold text-gray-900 hover:text-gray-600 leading-tight pb-4 md:pb-8">
                  {resource.description}
                </div>
                <div className="mt-auto inline-flex items-center justify-center w-10 h-10 border border-violet-200 rounded-full bg-white hover:bg-violet-50 transition-colors">
                  <ArrowRight className="w-4 h-4 text-violet-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
