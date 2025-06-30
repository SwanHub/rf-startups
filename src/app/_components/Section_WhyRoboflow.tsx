import { Settings, Database, Zap, Workflow, Globe } from "lucide-react";

export function Section_WhyRoboflow() {
  const features = [
    {
      icon: Database,
      title: "Dataset Management & Labeling",
      description:
        "AI tools like Label Assist, Box Prompting, and SAM2-powered Smart Polygon to speed up annotation.",
    },
    {
      icon: Zap,
      title: "One-click Model Training",
      description:
        "Fine-tune SOTA models on managed cloud GPUs, or bring your own weights.",
    },
    {
      icon: Workflow,
      title: "Low-code Workflows",
      description:
        "Visually chain detection, tracking, OCR, vector search, and business logic (including custom Python) into an optimized pipeline that takes full advantage of our GPU video decoding, batching, multithreading, cloud deployment, and edge device management infrastructure.",
    },
    {
      icon: Globe,
      title: "Flexible Deployment",
      description:
        "Serverless GPU API, Dedicated Deployments, on-device (Jetson, OAK, Raspberry Pi), in-browser, or natively on iOS.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            Why Roboflow?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {
              "End-to-End Vision Pipeline: Our core product provides the core infrastructure and tooling you need to power computer vision powered products."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-violet-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
