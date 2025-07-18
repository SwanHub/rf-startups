import {
  Zap,
  Users,
  Download,
  Headphones,
  Megaphone,
  Layers,
  CircleCheck,
} from "lucide-react";

export const Table_Offer = () => {
  const offers = [
    {
      icon: Layers,
      title: "Full feature access",
      text: "To dataset management, annotation, model training, low-code Workflows, and multi-target deployment (cloud, edge, browser, on-prem).",
    },
    {
      icon: Zap,
      title: "1800 platform credits",
      text: "Loaded up front for storage, dataset indexing, AI-assisted labeling, cloud-GPU training, inference API calls, and deployment.",
    },
    {
      icon: Users,
      title: "50 private projects & 20 team seats",
      text: "With role-based access control.",
    },
    {
      icon: Download,
      title: "Model weights export",
      text: "With a commercial Ultralytics license for 10 embedded devices.",
    },
    {
      icon: Headphones,
      title: "Priority support",
      text: "From Roboflow engineers (chat & email) and an onboarding call with a Roboflow computer vision expert.",
    },
    {
      icon: Megaphone,
      title: "Joint marketing post",
      text: "Once you've launched to get your new product in front of our audience of 1M+ developers (optional).",
    },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-violet-100 max-w-screen-sm self-center w-full">
      <div className="py-3 px-6 font-semibold text-violet-700 bg-violet-50 border-b border-violet-100">
        What you get: $3,588 value
      </div>
      <ol>
        {offers.map((offer, index) => {
          const IconComponent = offer.icon;
          return (
            <li
              key={index}
              className="flex items-start gap-4 p-4 border-b border-violet-100 last:border-b-0 text-start"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center mt-1">
                <IconComponent className="w-4 h-4" />
              </span>
              <span className="flex flex-col mt-2">
                <span className="font-medium text-violet-700 mb-1 text-sm">
                  {offer.title}
                </span>
                <span className="text-gray-600 leading-relaxed text-sm">
                  {offer.text}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export const Table_Eligibility = () => {
  return (
    <div className="max-w-screen-lg w-full bg-violet-50 py-12 px-4 flex items-center gap-4 justify-center border-b-2 border-violet-100">
      <CircleCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
      <span className="text-sm md:text-base text-gray-700 font-medium text-center">
        Eligibility: Less than $5 million in funding and must be a new Roboflow
        customer.
      </span>
    </div>
  );
};
