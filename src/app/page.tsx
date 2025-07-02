import { Section_BecomeAPartner } from "./_components/Section_BecomeAPartner";
import { Section_CustomerStories } from "./_components/Section_CustomerStories";
import { Section_FAQ } from "./_components/Section_FAQ";
import { Section_Hero } from "./_components/Section_Hero";
import { Section_Love } from "./_components/Section_Love";
import { Section_ExclusiveOffer } from "./_components/Section_ExclusiveOffer";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50 relative">
      <div className="relative z-10">
        <Section_Hero />
        <Section_CustomerStories />
        <Section_ExclusiveOffer />
        <Section_FAQ />
        <Section_BecomeAPartner />
        {/* <Section_Love /> */}
      </div>
    </div>
  );
}
