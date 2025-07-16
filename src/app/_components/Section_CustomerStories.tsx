import Link from "next/link";
import { ArrowRight } from "lucide-react";

function CustomerTestimonialMain({
  quote,
  name,
  title,
  logo,
  company,
  link,
}: {
  quote: React.ReactNode;
  name: string;
  title: string;
  logo: string;
  company: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="py-16 px-6 md:px-24 flex flex-col items-center text-center border-b border-violet-100 hover:bg-violet-50 transition-colors"
      rel="noopener noreferrer"
    >
      <blockquote className="text-2xl md:text-3xl text-gray-700 font-light leading-snug mb-10">
        {quote}
      </blockquote>
      <div className="flex flex-col items-center mb-6">
        <img src={logo} alt={`${company} logo`} className="mb-6 w-40" />
        <span className="text-gray-500 text-sm">
          {name}, {title}
        </span>
      </div>
      <span className="inline-block mt-2 px-6 py-2 rounded-full border border-violet-200 text-violet-700 bg-white hover:bg-violet-50 font-medium transition-colors">
        Read the full story
      </span>
    </Link>
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
  borderBottom = false,
}: {
  quote: React.ReactNode;
  name: string;
  title: string;
  logo: string;
  company: string;
  link: string;
  borderRight?: boolean;
  borderBottom?: boolean;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`p-8 flex flex-col justify-between hover:bg-violet-50 transition-colors ${
        borderRight ? " border-r border-violet-100" : ""
      } ${borderBottom ? " border-b border-violet-100" : ""}`}
      rel="noopener noreferrer"
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
            <img src={logo} alt={`${company} logo`} className="h-5" />
          </span>
          <span className="ml-auto text-violet-600 hover:text-violet-800 p-2 rounded-full transition-colors">
            <ArrowRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function Section_CustomerStories() {
  return (
    <section className="w-full px-4">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-violet-700 mb-4">
          Hear from teams building with Roboflow
        </h2>
      </div>
      <div className="max-w-6xl mx-auto border border-violet-100">
        <CustomerTestimonialMain
          quote={
            <span>
              &quot;Do we need a new model to evaluate this kind of food? We
              spin up [Roboflow], train overnight, and{" "}
              <span className="font-semibold text-violet-700">
                the next morning it works.&quot;
              </span>
            </span>
          }
          name="Rian McDonnell"
          title="Founder and CEO of FloVision Solutions"
          logo="https://flovisionsolutions-20253.kxcdn.com/wp-content/uploads/2022/01/FloVision-Solutions-Logo-Full-Color-Large-2048x545.png"
          company="FloVision Solutions"
          link="https://roboflow.com/case-studies/flovision"
        />
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
            borderRight
            borderBottom
          />
          <CustomerTestimonialSecondary
            quote={
              <span>
                &quot;Roboflow allowed our team to drive model development...
                and{" "}
                <span className="font-semibold text-violet-700">
                  get computer vision into production faster.&quot;
                </span>
              </span>
            }
            name="Alec Zopf"
            title="Co-founder and Chief AI & Automation Officer"
            logo="https://cdn.prod.website-files.com/5f6bc60e665f54db361e52a9/67ef10f95672343278a96d06_logo-wellth.svg"
            company="Wellth"
            link="https://roboflow.com/case-studies/wellth"
            borderBottom
          />
          <CustomerTestimonialSecondary
            quote={
              <span>
                &quot;Roboflow&apos;s data management tools{" "}
                <span className="font-semibold text-violet-700">
                  far surpassed any of the other tools
                </span>{" "}
                we evaluated in the computer vision space&quot;
              </span>
            }
            name="Wade Norris"
            title="Co-founder & CEO at SnapCalorie (YC S21)"
            logo="https://www.snapcalorie.com/images/sc_banner.png"
            company="SnapCalorie"
            link="https://roboflow.com/case-study/snapcalorie"
            borderRight
            borderBottom
          />
          <CustomerTestimonialSecondary
            quote={
              <span>
                &quot;They move fast to incorporate state-of-the-art model
                capabilities to keep our stack on the bleeding edge.{" "}
                <span className="font-semibold text-violet-700">
                  Their support even added my feature request in the same
                  afternoon on a Saturday. Recommend.&quot;
                </span>
              </span>
            }
            name="Raunak Chowdhuri"
            title="Co-founder/CTO at Reducto (YC W24)"
            logo="https://cdn.reducto.ai/landing-page/logos/reducto-logo.svg"
            company="Reducto"
            link="https://reducto.ai/"
            borderBottom
          />
          <CustomerTestimonialSecondary
            quote={
              <span>
                &quot;
                <span className="font-semibold text-violet-700">
                  Roboflow is like having the work of 5+ engineers added.
                </span>{" "}
                Our team is moving faster than we ever have.&quot;
              </span>
            }
            name="Drew Gray"
            title="ex-Cruise, Tesla Executive"
            logo="https://media.licdn.com/dms/image/v2/C5603AQEZr4wwz3NT_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1601742101045?e=1756944000&v=beta&t=OOlxmJeq9PAqdHndmuQ6xITf-yOpasfoTbiMwEyInS8"
            company=""
            link="https://www.linkedin.com/in/drewjgray/"
            borderRight
          />
          <div className="hidden md:block">
            <CustomerTestimonialSecondary
              quote={
                <span>
                  &quot;When I migrated... I was able to export my existing
                  annotation set, get it imported into roboflow, and trained my
                  first model in an afternoon. Model results seem on par with
                  Vertex AI, but{" "}
                  <span className="font-semibold text-violet-700">
                    training is 2x faster, way more cost effective, and a more
                    robust toolchain
                  </span>{" "}
                  .&quot;
                </span>
              }
              name="John Yoder"
              title="Co-founder/CTO Constructable (YC S23)"
              logo="https://constructable.ai/constructable-logo-dark.svg"
              company="Constructable"
              link="https://constructable.ai/"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-12 text-sm">
        <p>See more 💜 on our&nbsp;</p>
        <Link
          href="https://love.roboflow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-700 hover:text-violet-900 underline underline-offset-4 decoration decoration-violet-300"
        >
          Wall of Love
        </Link>
        .
      </div>
    </section>
  );
}
