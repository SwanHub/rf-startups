import { Database, Workflow, MousePointerClick, Boxes } from "lucide-react";
import { Text_ExternalLink } from "@/components/shared/Text_ExternalLink";

export function Section_WhyRoboflow() {
  return (
    <section className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            Why Roboflow?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold text-lg">
            End-to-End Vision Pipeline
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our product provides the core infrastructure and tooling you need to
            power computer vision powered products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Database className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Dataset Management & Labeling
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/annotate">
                Dataset management &amp; labeling
              </Text_ExternalLink>
              {" - AI tools like "}
              <Text_ExternalLink href="https://docs.roboflow.com/annotate/ai-labeling/model-assisted-labeling">
                Label Assist
              </Text_ExternalLink>
              {", "}
              <Text_ExternalLink href="https://docs.roboflow.com/annotate/ai-labeling/box-prompting-ai-labeling">
                Box Prompting
              </Text_ExternalLink>
              {", and "}
              <Text_ExternalLink href="https://docs.roboflow.com/annotate/ai-labeling/enhanced-smart-polygon-with-sam">
                SAM2-powered Smart Polygon
              </Text_ExternalLink>
              {" to speed up annotation."}
            </p>
          </div>

          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <MousePointerClick className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                One-click Model Training
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/train">
                One-click model training
              </Text_ExternalLink>
              {" - Fine-tune SOTA models on managed cloud GPUs, or "}
              <Text_ExternalLink href="https://docs.roboflow.com/deploy/upload-custom-weights">
                bring your own weights
              </Text_ExternalLink>
              {"."}
            </p>
          </div>

          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Workflow className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Low-code Workflows
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/workflows">
                Low-code Workflows
              </Text_ExternalLink>
              {
                " - Visually chain detection, tracking, OCR, vector search, and business logic (including custom Python) into an optimized pipeline that takes full advantage of our GPU video decoding, batching, multithreading, cloud deployment, and edge device management infrastructure."
              }
            </p>
          </div>

          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Boxes className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Flexible Deployment
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/deploy">
                Flexible deployment
              </Text_ExternalLink>
              {" - "}
              <Text_ExternalLink href="https://docs.roboflow.com/deploy/serverless-hosted-api-v2">
                Serverless GPU API
              </Text_ExternalLink>
              {", "}
              <Text_ExternalLink href="https://docs.roboflow.com/deploy/dedicated-deployments">
                Dedicated Deployments
              </Text_ExternalLink>
              {", "}
              <Text_ExternalLink href="https://inference.roboflow.com/install/">
                on-device
              </Text_ExternalLink>
              {" (Jetson, OAK, Raspberry Pi), "}
              <Text_ExternalLink href="https://docs.roboflow.com/deploy/sdks/web-browser">
                in-browser
              </Text_ExternalLink>
              {", or "}
              <Text_ExternalLink href="https://docs.roboflow.com/developer/ios-sdk/using-the-ios-sdk">
                natively on iOS
              </Text_ExternalLink>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
