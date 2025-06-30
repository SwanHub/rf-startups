// Open Source Roots
// All backed by our open source projects and community.
// Supervision - 25k ⭐computer-vision toolkit for pipelines and visualization.
// Inference - Turn any computer or edge device into a command center for your computer vision projects.
// RF-DETR - first real-time object detection model to surpass 60 mAP on COCO.
// Universe - over 1M open-source datasets & 250k fine-tuned computer vision models.
// Notebooks - a comprehensive collection of tutorials on state-of-the-art computer vision models and techniques.
// Community - Active forum, blog, X, YouTube, and weekly livestream + newsletter.

import {
  Github,
  Eye,
  Cpu,
  Target,
  Database,
  BookOpen,
  Users,
} from "lucide-react";

export function Section_OpenSourceRoots() {
  const projects = [
    {
      icon: Eye,
      title: "Supervision",
      description:
        "25k ⭐ computer-vision toolkit for pipelines and visualization.",
    },
    {
      icon: Cpu,
      title: "Inference",
      description:
        "Turn any computer or edge device into a command center for your computer vision projects.",
    },
    {
      icon: Target,
      title: "RF-DETR",
      description:
        "First real-time object detection model to surpass 60 mAP on COCO.",
    },
    {
      icon: Database,
      title: "Universe",
      description:
        "Over 1M open-source datasets & 250k fine-tuned computer vision models.",
    },
    {
      icon: BookOpen,
      title: "Notebooks",
      description:
        "A comprehensive collection of tutorials on state-of-the-art computer vision models and techniques.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Active forum, blog, X, YouTube, and weekly livestream + newsletter.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            Open Source Roots
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {"All backed by our open source projects and community."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
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
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
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
