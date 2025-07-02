import { Button } from "@/components/shared/elements/Button";

export function Section_BecomeAPartner() {
  return (
    <section className="w-full py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-900">
          Become a Startup Partner
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Roboflow partners with venture capital firms and startup accelerators
          to provide exclusive discounts and other benefits to their portfolio
          companies.
        </p>
        <Button
          variant="default"
          size="lg"
          href="mailto:startups@roboflow.com"
          className="border-violet-200 text-violet-700 hover:bg-violet-50 text-sm"
        >
          Contact our Startups Team
        </Button>
      </div>
    </section>
  );
}
