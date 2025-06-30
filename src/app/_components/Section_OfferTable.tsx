import { BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/shared/elements/Button";
import { Table_Eligibility } from "./Table_Offer";

export const Section_OfferTable = () => {
  return (
    <section className="py-16" id="apply-for-research-credits">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
              Free Year of Growth Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {"We're offering a full year free for qualified startups."}
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            href="/credits"
            className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm"
          >
            Apply for Research Credits
            <BadgeDollarSign className="ml-2 h-4 w-4" />
          </Button>

          <div className="p-8 md:p-12 flex flex-col gap-8">
            <Table_Eligibility />
            {/* <Table_Offer_2 /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
