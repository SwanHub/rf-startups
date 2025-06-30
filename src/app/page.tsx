import { Section_BuildWithTheBest } from "./_components/Section_BuildWithTheBest";
import { Section_Hero } from "./_components/Section_Hero";
import { Section_Love } from "./_components/Section_Love";
import { Section_OfferTable } from "./_components/Section_OfferTable";
import { Section_OpenSourceRoots } from "./_components/Section_OpenSourceRoots";
import { Section_ProgramPartners } from "./_components/Section_ProgramPartners";
import { Section_WhyRoboflow } from "./_components/Section_WhyRoboflow";

export default function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
          backgroundSize: "180px 180px",
        }}
      ></div>
      <div className="relative z-10">
        <Section_Hero />
        <Section_OfferTable />
        <Section_ProgramPartners />
        <Section_WhyRoboflow />
        <Section_OpenSourceRoots />
        <Section_BuildWithTheBest />
        <Section_Love />
      </div>
    </div>
  );
}
