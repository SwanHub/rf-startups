import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Table_Eligibility } from "./Table_Offer";

export function Section_ProgramPartners() {
  const partners = [
    {
      name: "Y Combinator",
      logo: "/logos/partners/yc-logo.png",
      url: "https://www.ycombinator.com",
    },
    {
      name: "Sequoia Arc",
      logo: "/logos/partners/sequoia.jpeg",
      url: "https://arc.sequoiacap.com",
    },
    {
      name: "Vercel AI Accelerator",
      logo: "/logos/partners/vercel-logo.png",
      url: "https://vercel.com/ai",
    },
    {
      name: "Antler",
      logo: "/logos/partners/antler.jpeg",
      url: "https://www.antler.co",
    },
    {
      name: "South Park Commons",
      logo: "/logos/partners/southpark.jpeg",
      url: "https://southparkcommons.com",
    },
    {
      name: "Ag Startup Engine",
      logo: "/logos/partners/ase.jpeg",
      url: "https://agstartupengine.com",
    },
    {
      name: "Alchemist Accelerator",
      logo: "/logos/partners/alchemist.jpeg",
      url: "https://alchemistaccelerator.com",
    },
    {
      name: "Entrepreneurs First",
      logo: "/logos/partners/ef-logo.png",
      url: "https://www.joinef.com",
    },
    {
      name: "Startupbootcamp",
      logo: "/logos/partners/startupbootcamp.jpeg",
      url: "https://www.startupbootcamp.org",
    },
    {
      name: "Betaworks",
      logo: "/logos/partners/betaworks.jpeg",
      url: "https://betaworks.com",
    },
  ];

  return (
    <section id="partners" className="px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            Program partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {
              "Our startup deal is available to companies who take part in the following programs."
            }
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            gap-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <ListItem_ProgramPartner key={index} partner={partner} />
          ))}
        </div>
        <div className="text-center my-16">
          <p className="text-gray-500 text-sm">
            Your program not yet on the list? Contact growth@roboflow.com.
          </p>
        </div>
        <div className="flex justify-center text-center">
          <Table_Eligibility />
        </div>
      </div>
    </section>
  );
}

const ListItem_ProgramPartner = ({
  partner,
}: {
  partner: { name: string; logo: string; url: string };
}) => {
  return (
    <Link
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg p-4 hover:bg-violet-50 transition-colors duration-300 group relative"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="w-10 h-10 object-contain"
          />
        </div>
        <h3 className="text-xs font-medium text-gray-700 leading-tight group-hover:text-gray-900">
          {partner.name}
        </h3>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-3 h-3 text-violet-500" />
      </div>
    </Link>
  );
};
