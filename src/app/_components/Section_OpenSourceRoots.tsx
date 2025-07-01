import { Text_ExternalLink } from "@/components/shared/Text_ExternalLink";
import {
  Eye,
  Cpu,
  Target,
  BookOpen,
  Users,
  Globe,
  MessageCircle,
} from "lucide-react";

export function Section_OpenSourceRoots() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold text-lg">
            Open Source Roots
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            All backed by our open source projects and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Supervision */}
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Eye className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Supervision
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://github.com/roboflow/supervision">
                Supervision
              </Text_ExternalLink>
              {" - 25k "}
              <span role="img" aria-label="star">
                ⭐
              </span>
              {" computer-vision toolkit for pipelines and visualization."}
            </p>
          </div>
          {/* Inference */}
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Inference
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://inference.roboflow.com/">
                Inference
              </Text_ExternalLink>
              {
                " - Turn any computer or edge device into a command center for your computer vision projects."
              }
            </p>
          </div>
          {/* RF-DETR */}
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Target className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                RF-DETR
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://github.com/roboflow/rf-detr">
                RF-DETR
              </Text_ExternalLink>
              {
                " - first real-time object detection model to surpass 60 mAP on COCO."
              }
            </p>
          </div>
          {/* Universe */}
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Globe className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Universe
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://universe.roboflow.com/">
                Universe
              </Text_ExternalLink>
              {
                " - over 1M open-source datasets & 250k fine-tuned computer vision models."
              }
            </p>
          </div>
          {/* Notebooks */}
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Notebooks
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://github.com/roboflow/notebooks">
                Notebooks
              </Text_ExternalLink>
              {
                " - a comprehensive collection of tutorials on state-of-the-art computer vision models and techniques."
              }
            </p>
          </div>
          {/* Community */}
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Community
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/community">
                Community
              </Text_ExternalLink>
              {" - Active "}
              <Text_ExternalLink href="https://discuss.roboflow.com/">
                forum
              </Text_ExternalLink>
              {", "}
              <Text_ExternalLink href="https://blog.roboflow.com/">
                blog
              </Text_ExternalLink>
              {", "}
              <Text_ExternalLink href="https://x.com/roboflow">
                X
              </Text_ExternalLink>
              {", "}
              <Text_ExternalLink href="https://roboflow.com/youtube">
                YouTube
              </Text_ExternalLink>
              {", and "}
              <Text_ExternalLink href="https://roboflow.com/webinar">
                weekly livestream
              </Text_ExternalLink>
              {" + "}
              <Text_ExternalLink href="https://roboflow.com/newsletter">
                newsletter
              </Text_ExternalLink>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
