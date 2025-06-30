import {
  CheckCircle,
  Users,
  Zap,
  Download,
  Headphones,
  Globe,
  Megaphone,
} from "lucide-react";

export function Section_WhatYouGet() {
  const benefits = [
    {
      icon: Zap,
      title: "1800 Platform Credits",
      description:
        "Loaded up front for storage, dataset indexing, AI-assisted labeling, cloud-GPU training, inference API calls, and deployment.",
    },
    {
      icon: Users,
      title: "50 Private Projects & 20 Team Seats",
      description: "With role-based access control for seamless collaboration.",
    },
    {
      icon: Download,
      title: "Model Weights Export",
      description:
        "With a commercial Ultralytics license for 10 embedded devices.",
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description:
        "From Roboflow engineers (chat & email) and an onboarding call with a Roboflow computer vision expert.",
    },
    {
      icon: Globe,
      title: "Full Feature Access",
      description:
        "To dataset management, annotation, model training, low-code Workflows, and multi-target deployment (cloud, edge, browser, on-prem).",
    },
    {
      icon: Megaphone,
      title: "Joint Marketing Post",
      description:
        "Once you've launched to get your new product in front of our audience of 1M+ developers (optional).",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            What you get
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {
              "Everything you need to build and scale your computer vision startup."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-violet-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            See full Growth plan details on our{" "}
            <a
              href="#"
              className="text-violet-600 hover:text-violet-700 font-medium underline"
            >
              pricing page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
