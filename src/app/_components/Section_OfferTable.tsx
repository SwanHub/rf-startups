import { Table_Offer } from "./Table_Offer";
import Link from "next/link";

export const Section_OfferTable = () => {
  return (
    <section className="" id="offer">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
              Free Year of Growth Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {"We're offering a full year free for qualified startups."}
            </p>
          </div>

          <div className="p-8 md:p-12 flex flex-col gap-8">
            <Table_Offer />
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-violet-100"></div>
              <Link
                href="https://roboflow.com/pricing"
                target="_blank"
                className="px-4 text-sm text-gray-500 font-medium hover:text-violet-700"
              >
                See all plan features
              </Link>
              <div className="flex-1 h-px bg-violet-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
