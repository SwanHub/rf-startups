import {
  BookOpen,
  Star,
  Award,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import { Text_ExternalLink } from "@/components/shared/Text_ExternalLink";

export function Section_BuildWithTheBest() {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-bold text-lg">
            Built with the Best
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Roboflow is used by over 2/3 of the Fortune 100.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <CheckCircle className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Trusted by Enterprises
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/customer-stories">
                Trusted by
              </Text_ExternalLink>
              {
                " top enterprises like BNSF Railway who use Roboflow to automate rail-car inventory & safety checks and Fletcher who power the US Open and Wimbledon broadcasts with Roboflow."
              }
            </p>
          </div>
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Cited by Academics
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/research">
                Cited by
              </Text_ExternalLink>
              {
                " over 8000 academic papers including in top journals like Nature, Cell, and Science and by top AI labs like Apple, Baidu, and Microsoft."
              }
            </p>
          </div>
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Star className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Featured by Industry
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://roboflow.com/press">
                Featured by
              </Text_ExternalLink>
              {" NVIDIA, Google, Meta and GitHub."}
            </p>
          </div>
          <div className="flex flex-col h-full p-12 rounded-2xl bg-violet-50">
            <div className="flex items-center mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4">
                <Award className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-widest text-xs text-violet-600 font-medium">
                Backed by Investors
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <Text_ExternalLink href="https://blog.roboflow.com/series-b/">
                Backed by
              </Text_ExternalLink>
              {
                " top tier investors like GV + Craft and angels like Jeff Dean, Amjad Masad, Guillermo Rauch, and "
              }
              <Text_ExternalLink href="https://blog.roboflow.com/series-a/">
                many others
              </Text_ExternalLink>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
