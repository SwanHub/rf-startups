"use client";

import {
  TrendingUp,
  SplinePointer,
  GitBranch,
  MousePointer,
  Cpu,
} from "lucide-react";

export function Section_StartupResources() {
  const features = [
    {
      icon: TrendingUp,
      title: "Battle-tested infrastructure.",
      description:
        "Used by 1 million engineers and 2/3 of the Fortune 100. Grow from MVP to unicorn without infrastructure headaches.",
    },
    {
      icon: SplinePointer,
      title: "Low-code, AI Workflow Builder.",
      description:
        "With our visual Workflows builder, your team can build and deploy a full computer vision pipeline in minutes.",
    },
    {
      icon: GitBranch,
      title: "Rooted in open-source.",
      description:
        "Roboflow is built on industry standard libraries like Supervision and Inference. We also host the largest collection of open-source computer vision datasets and APIs at Roboflow Universe.",
    },
    {
      icon: MousePointer,
      title: "One-click model training.",
      description:
        "Fine-tune SOTA models on managed cloud GPUs, or bring your own weights. Continually improve and identify weaknesses with model evaluation.",
    },
    {
      icon: Cpu,
      title: "Flexible Deployment.",
      description:
        "Deploy models using our hosted Serverless GPU API, Dedicated Deployments, on-device (Jetson, OAK, Raspberry Pi), in-browser, or natively on iOS.",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center mb-12 p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-violet-600 text-3xl font-semibold leading-tight text-left">
                End-to-End
                <br />
                Computer Vision Platform
              </h2>
            </div>
          </div>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6">
                <p className="text-gray-600 text-base leading-relaxed">
                  <Icon className="w-4 h-4 text-violet-600 inline mr-2 mb-1" />
                  <span className="font-semibold text-violet-600">
                    {feature.title}
                  </span>{" "}
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
