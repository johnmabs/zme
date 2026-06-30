type Expertise = {
  title: string;
  description: string;
  icon: React.ReactNode;
  span?: string;
};

const EXPERTISES: Expertise[] = [
  {
    title: "Bureau d'études techniques",
    description: "Études de structure, calculs et dimensionnement pour des ouvrages sûrs et conformes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.2" />
        <path d="M12 3.8v3.2M12 17v3.2M3.8 12h3.2M17 12h3.2M9 15l1.6-4.6L15 9l-1.6 4.6z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Architecture",
    description: "Conception architecturale alliant fonctionnalité, esthétique et contraintes du site.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M4 21V9l8-5 8 5v12" strokeLinejoin="round" />
        <path d="M9 21V13h6v8M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Topographie",
    description: "Levés topographiques et bornage précis, base fiable de tout projet d'aménagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 3v3.4M7 21l5-13 5 13M9.2 16h5.6" />
        <circle cx="12" cy="9.4" r="2" />
      </svg>
    ),
  },
  {
    title: "Construction",
    description: "Réalisation et suivi de chantier, du gros œuvre aux finitions, dans le respect des délais.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 21h18M6 21V10l5-5 5 5v11M11 14h2" />
      </svg>
    ),
  },
  {
    title: "VRD",
    description: "Voirie et réseaux divers : routes, assainissement, eau et électricité pour vos sites.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M2.5 17h19M2.5 17c0-2 1.5-3 3.5-3h12c2 0 3.5 1 3.5 3" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="1.4" />
        <circle cx="16" cy="11.5" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Énergie solaire",
    description: "Dimensionnement et installation de solutions solaires adaptées au réseau local.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="6.5" r="2.3" />
        <path d="M12 1.5v1.4M12 9.4v1M7 6.5h1M16 6.5h1M8.6 3.1l.7.8M14.7 3.1l-.7.8" />
        <rect x="4" y="13" width="16" height="8" rx="0.5" />
        <path d="M4 17h16M8 13v8M12 13v8M16 13v8" />
      </svg>
    ),
  },
  {
    title: "Gestion de projets",
    description: "Pilotage, coordination des intervenants et maîtrise des coûts jusqu'à la livraison.",
    span: "sm:col-span-2 lg:col-span-1",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M8 9h8M8 12.5h8M8 16h5" />
      </svg>
    ),
  },
];

export default function Expertise() {
  return (
    <section id="expertises" className="py-24 lg:py-32 bg-mist-50 blueprint-grid-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow text-amber-600 mb-4">Ce que nous faisons</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 accent-underline">
            Nos domaines d&apos;expertise
          </h2>
          <p className="mt-7 text-ink-600 text-lg leading-relaxed">
            Sept disciplines, une seule équipe — pour porter vos projets de l&apos;idée à la livraison sans
            rupture de continuité.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISES.map((item) => (
            <div
              key={item.title}
              className={`lift bg-white border border-mist-200 rounded-md p-8 shadow-[0_4px_24px_-10px_rgba(15,39,69,0.18)] ${
                item.span ?? ""
              }`}
            >
              <div className="w-12 h-12 rounded bg-navy-900/5 flex items-center justify-center text-navy-800 mb-6">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm text-ink-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
