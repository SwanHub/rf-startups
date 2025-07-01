import { Badge } from "@/components/shared/elements/Badge";
import { Button } from "@/components/shared/elements/Button";
import { HelpCircle, Mail, Rocket } from "lucide-react";

export const Section_Hero = () => {
  return (
    <section className="mt-16 pt-24 pb-18">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageTitle />
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-sm"
              href="https://app.roboflow.com/login"
            >
              Start building with Roboflow
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/#partners"
              className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm"
            >
              Contact our startups team
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/#faq"
              className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm"
            >
              FAQ
              <HelpCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PageTitle = () => {
  return (
    <span>
      <Badge
        variant="secondary"
        className="mb-6 bg-violet-50 text-violet-700 border-violet-200 uppercase"
      >
        Free credits
      </Badge>
      <h1
        className={`text-4xl
          md:text-5xl font-semibold text-gray-900 mb-6 leading-tight`}
      >
        Roboflow <span className="text-violet-600">for Startups</span>
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto text-xl">
        {
          "Join thousands of startups using computer vision with Roboflow. Comprehensive dataset management, annotation, model training and deployment in a simple dev-friendly interface."
        }
      </p>
    </span>
  );
};
