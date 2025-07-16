"use client";

import {
  Zap,
  Users,
  Shield,
  TrendingUp,
  Settings,
  Sparkles,
} from "lucide-react";

export function Section_StartupResources() {
  const features = [
    {
      icon: Settings,
      title: "Zero-Configuration Development",
      description:
        "Focus on building your product, not configuring infrastructure. Get started instantly and iterate faster.",
    },
    {
      icon: Sparkles,
      title: "AI-powered Development",
      description:
        "With v0, your team can go from idea to prototype in minutes. Easily create beautiful interfaces and full stack applications that you can share, iterate on, and scale in real time.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Collaborate in real-time, iterate quickly, and validate ideas with comments directly on site previews before production push.",
    },
    {
      icon: Shield,
      title: "Out of the Box Security",
      description:
        "Protect your startup's assets and user data from day one. Build trust with customers and investors by prioritizing security from the start.",
    },
    {
      icon: TrendingUp,
      title: "Scale Without Limits",
      description:
        "Grow from MVP to unicorn without infrastructure headaches. Your app scales automatically, letting you focus on your business goals— not your infra.",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="lg:col-span-1 flex items-center">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  End-to-end computer vision built for developers
                </h2>
              </div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col space-y-4 p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-violet-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
