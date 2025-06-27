import { Section_Hero } from "./_components/Section_Hero";
import { Section_OfferTable } from "./_components/Section_OfferTable";

export default function Lander() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(71, 85, 105, 0.6) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="relative z-10">
        <Section_Hero />
        <Section_OfferTable />
      </div>
    </div>
  );
}
