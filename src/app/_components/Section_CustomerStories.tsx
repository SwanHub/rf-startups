import Link from "next/link";
import { ArrowRight } from "lucide-react";

function CustomerTestimonialMain() {
  return (
    <div className="py-16 px-6 md:px-24 flex flex-col items-center text-center border-b border-violet-100 hover:bg-violet-50">
      <blockquote className="text-2xl md:text-3xl text-gray-700 font-light leading-snug mb-10">
        <span>
          &quot;Roboflow allowed our team to drive model development, without
          needing to train or hire dedicated machine learning experts, and{" "}
          <span className="font-semibold text-violet-700">
            get computer vision into production faster.&quot;
          </span>
        </span>
      </blockquote>
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://cdn.prod.website-files.com/5f6bc60e665f54db361e52a9/67ef10f95672343278a96d06_logo-wellth.svg"
          alt="Wellth logo"
          className="mb-6 w-40"
        />
        <span className="text-gray-500 text-sm">
          Alec Zopf, Co-founder and Chief AI &amp; Automation Officer
        </span>
      </div>
      <Link
        href="https://roboflow.com/case-studies/wellth"
        target="_blank"
        className="inline-block mt-2 px-6 py-2 rounded-full border border-violet-200 text-violet-700 bg-white hover:bg-violet-50 font-medium transition-colors"
      >
        Read the full story
      </Link>
    </div>
  );
}

function CustomerTestimonialSecondary({
  quote,
  name,
  title,
  logo,
  company,
  link,
  borderRight = false,
}: {
  quote: React.ReactNode;
  name: string;
  title: string;
  logo: string;
  company: string;
  link: string;
  borderRight?: boolean;
}) {
  return (
    <div
      className={`p-8 flex flex-col justify-between hover:bg-violet-50 ${
        borderRight ? " border-r border-violet-100" : ""
      }`}
    >
      <blockquote className="text-lg text-gray-700 font-light leading-snug mb-6">
        {quote}
      </blockquote>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-gray-500 text-sm">
            {name}, {title}
          </span>
        </div>
        <div className="flex items-center gap-2 justify-between w-full">
          <span className="flex items-center gap-4">
            <img src={logo} alt={`${company} logo`} className="h-6" />
            <span className="text-gray-700 font-medium text-sm">{company}</span>
          </span>
          <Link
            href={link}
            target="_blank"
            className="ml-auto text-violet-600 hover:text-violet-800 p-2 rounded-full transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Section_CustomerStories() {
  return (
    <section className="w-full px-4">
      <div className="max-w-screen-lg mx-auto border border-violet-100">
        <CustomerTestimonialMain />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CustomerTestimonialSecondary
            quote={
              <span>
                With their AI-assisted labeling tools, hosted training, model
                evaluation metrics, and – most importantly – highly accurate
                models like RF-DETR,{" "}
                <span className="font-semibold text-violet-700">
                  Roboflow has simplified the process of state-of-the-art
                  computer vision for our team.&quot;
                </span>
              </span>
            }
            name="Shawn Patel"
            title="Co-Founder & CTO of Almond"
            logo="https://cdn.prod.website-files.com/5f6bc60e665f54db361e52a9/685ee5108e072dec6c6af044_logo-almond.svg"
            company="Almond"
            link="https://roboflow.com/case-studies/almond"
            borderRight={true}
          />
          <CustomerTestimonialSecondary
            quote={
              <span>
                &quot;...we’ve increased the cadence in rolling out new features
                and tools for our clients. Do we need a new model to evaluate
                this kind of food?{" "}
                <span className="font-semibold text-violet-700">
                  We spin up the platform, train overnight, and the next morning
                  it works.&quot;
                </span>
              </span>
            }
            name="Rian McDonnell"
            title="founder and CEO of FloVision"
            logo="https://cdn.prod.website-files.com/5f6bc60e665f54db361e52a9/6807e703a9eb098121255372_logo-floVision-solutions.png"
            company="FloVision Solutions"
            link="https://roboflow.com/case-studies/flovision"
          />
        </div>
      </div>
    </section>
  );
}
