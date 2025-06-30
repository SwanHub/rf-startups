import { Badge } from "@/components/shared/elements/Badge";
import { Button } from "@/components/shared/elements/Button";
import { ArrowDown, HelpCircle, Users } from "lucide-react";

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
              href="/#offer"
            >
              Startup Discount
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/#partners"
              className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm"
            >
              Program Partners
              <Users className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/credits"
              className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm"
            >
              FAQ
              <HelpCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {/* <Link
            className="mt-12 flex justify-center items-center absolute left-0 right-0"
            target="_blank"
            href={"https://roboflow.com/lenny"}
          >
            <img
              src="/startup-raccoon.png"
              alt="Startup Raccoon"
              className="max-w-24 h-auto grayscale opacity-25"
            />
          </Link> */}
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
        className="mb-6 bg-violet-50 text-violet-700 border-violet-200"
      >
        Discounted Pricing for Early Stage Startups
      </Badge>
      <h1
        className={`text-4xl
          md:text-5xl font-bold text-gray-900 mb-6 leading-tight`}
      >
        Roboflow <span className="text-violet-600">for Startups</span>
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
        {
          "Roboflow is an end-to-end computer vision platform used by 1M+ developers, powering startups globally from seed to scale."
        }
      </p>
    </span>
  );
};
