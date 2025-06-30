import {
  Trophy,
  Building2,
  GraduationCap,
  Star,
  Users,
  Award,
} from "lucide-react";

export function Section_BuildWithTheBest() {
  const credibilityPoints = [
    {
      icon: Trophy,
      title: "Fortune 100 Adoption",
      description: "Roboflow is used by over 2/3 of the Fortune 100.",
      highlight: "2/3",
    },
    {
      icon: Building2,
      title: "Enterprise Trust",
      description:
        "Trusted by top enterprises like BNSF Railway who use Roboflow to automate rail-car inventory & safety checks and Fletcher who power the US Open and Wimbledon broadcasts with Roboflow.",
      highlight: "Enterprise",
    },
    {
      icon: GraduationCap,
      title: "Academic Recognition",
      description:
        "Cited by over 5000 academic papers including in top journals like Nature, Cell, and Science and by top AI labs like Apple, Baidu, and Microsoft.",
      highlight: "5000+",
    },
    {
      icon: Star,
      title: "Industry Recognition",
      description: "Featured by NVIDIA, Google, Meta and GitHub.",
      highlight: "Featured",
    },
    {
      icon: Award,
      title: "Top Tier Backing",
      description:
        "Backed by top tier investors like GV + Craft and angels like Jeff Dean, Amjad Masad, Guillermo Rauch, and many others.",
      highlight: "Top Tier",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            Build with the Best
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {
              "Join thousands of companies and researchers who trust Roboflow for their computer vision needs."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credibilityPoints.map((point, index) => {
            const IconComponent = point.icon;
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
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {point.title}
                      </h3>
                      {point.highlight && (
                        <span className="ml-2 px-2 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                          {point.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <Users className="w-5 h-5 text-violet-600" />
            <span className="text-gray-700 font-medium">
              Trusted by the world's leading companies and researchers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
