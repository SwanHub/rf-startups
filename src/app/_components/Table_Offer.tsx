export const Table_Offer_1 = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-violet-100 max-w-screen-sm self-center w-full shadow-sm">
      <div className="grid grid-cols-2">
        <div className="py-3 px-6 font-semibold text-violet-700 bg-violet-50 border-b border-violet-100">
          Training Credits Plan
        </div>
        <div className="py-3 px-6 font-semibold text-violet-700 bg-violet-50 border-b border-violet-100">
          Images Plan
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-violet-100">
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          + 10k source images
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          + 90k source images
        </div>
      </div>
      <div className="border-t border-violet-100" />
      <div className="grid grid-cols-2 divide-x divide-violet-100">
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          + 50k generated images
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          + 450k generated images
        </div>
      </div>
      <div className="border-t border-violet-100" />
      <div className="grid grid-cols-2 divide-x divide-violet-100">
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          + 22 training credits
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          + 5 training credits
        </div>
      </div>
    </div>
  );
};

export const Table_Offer_2 = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-violet-100 max-w-screen-sm self-center w-full shadow-sm">
      <div className="py-3 px-6 font-semibold text-violet-700 bg-violet-50 border-b border-violet-100">
        Both plans include
      </div>
      <div className="divide-y divide-violet-100">
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          15 team members
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          50 credits per month
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          Enhanced image augmentations
        </div>
        <div className="py-2 px-6 text-gray-900 text-sm md:text-base text-center">
          Model weights download
        </div>
      </div>
    </div>
  );
};
