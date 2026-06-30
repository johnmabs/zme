import CornerFrame from "./CornerFrame";
import { ArrowRightIcon } from "./icons";

const HERO_STATS = [
  { value: "15", suffix: "+", label: "Années d'expérience" },
  { value: "100", suffix: "+", label: "Projets réalisés" },
  { value: "7", suffix: "", label: "Domaines d'expertise" },
  { value: "50", suffix: "+", label: "Clients satisfaits" },
];

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Bâtiment moderne en verre et acier, projet d'ingénierie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        <div className="absolute inset-0 bg-navy-900/30 blueprint-grid" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pt-40 pb-16">
        <p className="eyebrow text-amber-400 mb-5">
          N04°48&apos;S E11°51&apos;E — Pointe-Noire, République du Congo
        </p>
        <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] max-w-3xl">
          Nous transformons vos idées en ouvrages durables.
        </h1>
        <p className="mt-6 max-w-xl text-white/80 text-lg leading-relaxed">
          De la conception à la réalisation, ZME Engineering Group accompagne les entreprises, les institutions
          et les particuliers avec des solutions d&apos;ingénierie fiables, innovantes et durables.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#expertises"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-900 font-display font-semibold px-7 py-3.5 rounded transition-colors"
          >
            Découvrir nos services
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/35 hover:bg-white/10 text-white font-display font-medium px-7 py-3.5 rounded transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </div>

      {/* Bandeau de statistiques */}
      <div className="relative z-10 border-t border-white/10 bg-navy-950/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {HERO_STATS.map((stat) => (
            <CornerFrame key={stat.label} corners={["tl", "br"]} className="px-3 py-2">
              <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {stat.value}
                <span className="text-amber-400">{stat.suffix}</span>
              </p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</p>
            </CornerFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
