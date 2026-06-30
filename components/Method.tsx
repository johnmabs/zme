type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Comprendre",
    description: "Écoute du besoin, contraintes du site et objectifs du client.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.5 15.5L21 21" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Concevoir",
    description: "Études techniques et plans détaillés, validés avec le client.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M4 20l1-4.5L16 4l3 3-11 11.5z" strokeLinejoin="round" />
        <path d="M13.5 6.5l3 3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Planifier",
    description: "Calendrier, budget et ressources fixés avant le premier coup de pioche.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="15" rx="1" />
        <path d="M4 9.5h16M8 3v3M16 3v3M8 13h3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Construire",
    description: "Exécution sur site, encadrée par nos équipes et nos partenaires.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M5 21V9l5-3.5L15 9v12M5 13h10M9 21v-4h2v4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Contrôler",
    description: "Vérifications qualité à chaque jalon, avant validation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M9 12.5l2 2 4.5-5" />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Livrer",
    description: "Remise de l'ouvrage et accompagnement après livraison.",
    isLast: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-24 lg:py-32 bg-mist-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-amber-600 mb-4">Comment nous travaillons</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 accent-underline">
            Notre méthode
          </h2>
          <p className="mt-7 text-ink-600 text-lg leading-relaxed">
            Six étapes, dans cet ordre, pour chaque projet — de la première rencontre à la remise des clés.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-mist-200" />
          <div className="grid lg:grid-cols-6 gap-10 lg:gap-6">
            {STEPS.map((step) => (
              <div key={step.number} className="relative">
                <div className="font-mono text-xs text-amber-600 mb-3">{step.number}</div>
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 relative z-10 ${
                    step.isLast ? "bg-amber-500 text-navy-900" : "bg-navy-900 text-white"
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-navy-900">{step.title}</h3>
                <p className="text-sm text-ink-400 mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
