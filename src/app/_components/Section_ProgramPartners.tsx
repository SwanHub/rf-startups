export function Section_ProgramPartners() {
  const partners = [
    {
      name: "Y Combinator",
      logo: "/logos/partners/yc-logo.png",
    },
    {
      name: "Vercel AI Accelerator",
      logo: "/logos/partners/vercel-logo.png",
    },
    {
      name: "Ag Startup Engine",
      logo: "/logos/partners/ag_startup_engine-logo.png",
    },
    {
      name: "Alchemist Accelerator",
      logo: "/logos/partners/alchemist_accelerator-logo.png",
    },
    {
      name: "Sequoia Arc",
      logo: "/logos/partners/sequoia_arc-logo.png",
    },
    {
      name: "Antler",
      logo: "/logos/partners/antler-logo.png",
    },
    {
      name: "Entrepreneurs First",
      logo: "/logos/partners/ef-logo.png",
    },
    {
      name: "Startupbootcamp",
      logo: "/logos/partners/startupbootcamp-logo.png",
    },
    {
      name: "Betaworks",
      logo: "/logos/partners/betaworks-logo.png",
    },
    {
      name: "South Park Commons",
      logo: "/logos/partners/south_park_commons-logo.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent py-2">
            Program partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {
              "Working with the world's leading accelerators and startup programs."
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Partner with us to accelerate your computer vision startup
          </p>
        </div>
      </div>
    </section>
  );
}
