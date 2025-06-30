import {
  Zap,
  Users,
  Download,
  Headphones,
  Globe,
  Megaphone,
  DollarSign,
  Settings,
} from "lucide-react";

export const Table_Offer = () => {
  const offers = [
    {
      icon: Settings,
      text: "Full feature access to dataset management, annotation, model training, low-code Workflows, and multi-target deployment (cloud, edge, browser, on-prem).",
    },
    {
      icon: Zap,
      text: "1800 platform credits loaded up front for storage, dataset indexing, AI-assisted labeling, cloud-GPU training, inference API calls, and deployment.",
    },
    {
      icon: Users,
      text: "50 private projects & 20 team seats with role-based access control.",
    },
    {
      icon: Download,
      text: "Model weights export with a commercial Ultralytics license for 10 embedded devices.",
    },
    {
      icon: Headphones,
      text: "Priority support from Roboflow engineers (chat & email) and an onboarding call with a Roboflow computer vision expert.",
    },
    {
      icon: Megaphone,
      text: "Joint marketing post once you've launched to get your new product in front of our audience of 1M+ developers (optional).",
    },
    {
      icon: DollarSign,
      text: "$3,588 value",
    },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-violet-100 max-w-screen-sm self-center w-full shadow-sm">
      <div className="py-3 px-6 font-semibold text-violet-700 bg-violet-50 border-b border-violet-100">
        What you get
      </div>
      <ol>
        {offers.map((offer, index) => {
          const IconComponent = offer.icon;
          return (
            <li
              key={index}
              className="flex items-center gap-4 p-4 border-b border-violet-100 last:border-b-0"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center">
                <IconComponent className="w-4 h-4" />
              </span>
              <span className="text-gray-600 leading-relaxed text-sm text-left">
                {offer.text}
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
    <div className="bg-white rounded-xl overflow-hidden border border-violet-100 max-w-screen-sm self-center w-full shadow-sm">
      <div className="py-3 px-6 font-semibold text-violet-700 bg-violet-50 border-b border-violet-100">
        Eligibility
      </div>
      <div className="divide-y divide-violet-100">
        <div className="py-2 px-6 text-gray-900 text-sm text-center">
          Less than $5M in funding
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm text-center">
          New Roboflow customer
        </div>
      </div>
    </div>
  );
};
