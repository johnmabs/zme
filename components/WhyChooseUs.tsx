import CornerFrame from "./CornerFrame";

type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const REASONS: Reason[] = [
  {
    title: "Expertise reconnue",
    description: "Plus de 15 ans d'interventions sur des projets exigeants.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M12 2.5l2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Équipe qualifiée",
    description: "Ingénieurs et techniciens formés aux normes en vigueur.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="2.6" />
        <path d="M3 19c0-2.8 2.7-5 6-5s6 2.2 6 5" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M15.5 14.2c2 .3 3.5 1.9 3.5 3.8" />
      </svg>
    ),
  },
  {
    title: "Solutions sur mesure",
    description: "Chaque projet est traité selon son contexte, pas un modèle type.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M4 7l4-4 4 4M4 7v10l4 4M8 21l4-4M16 21l-4-4V7M16 7l4-4M20 7v10l-4 4" />
      </svg>
    ),
  },
  {
    title: "Respect des délais",
    description: "Planification rigoureuse et suivi serré de chaque jalon.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Qualité",
    description: "Contrôle continu, à chaque étape, des fondations à la livraison.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Accompagnement complet",
    description: "Un seul interlocuteur, de l'idée jusqu'à la remise des clés.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M3 12c2-3 4.5-4.5 9-4.5S19 9 21 12c-2 3-4.5 4.5-9 4.5S5 15 3 12z" />
        <circle cx="12" cy="12" r="2.2" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="pourquoi" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <CornerFrame className="order-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80"
            alt="Chantier en cours de construction"
            className="w-full h-[420px] lg:h-[520px] object-cover rounded-sm"
          />
        </CornerFrame>

        <div className="order-1 lg:order-2">
          <p className="eyebrow text-amber-600 mb-4">Pourquoi ZME</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 accent-underline">
            Pourquoi choisir ZME ?
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-7">
            {REASONS.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center">
                  {reason.icon}
                </div>
                <div>
                  <p className="font-display font-semibold text-navy-900">{reason.title}</p>
                  <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
