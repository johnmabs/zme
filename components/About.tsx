import CornerFrame from "./CornerFrame";

const HIGHLIGHTS = [
  {
    title: "Multidisciplinaire",
    description: "7 domaines intégrés sous un même toit",
  },
  { title: "Ancrée localement", description: "Basée à Pointe-Noire, Congo" },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow text-amber-600 mb-4">À propos de ZME</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 leading-tight accent-underline">
            Votre partenaire en ingénierie et construction.
          </h2>
          <p className="mt-8 text-ink-600 text-lg leading-relaxed">
            Depuis plus de 15 ans, ZME Engineering Group accompagne les
            entreprises, les collectivités et les particuliers dans la
            conception, les études techniques, la construction et le suivi de
            projets.
          </p>
          <p className="mt-5 text-ink-600 leading-relaxed">
            Notre équipe pluridisciplinaire intervient à chaque étape, de
            l&apos;étude de faisabilité à la livraison, avec une exigence
            constante de précision et de qualité — sur des projets publics,
            industriels et privés à travers le Congo et la sous-région.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-amber-500 pl-4"
              >
                <p className="font-display font-bold text-navy-900">
                  {item.title}
                </p>
                <p className="text-sm text-ink-400 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CornerFrame>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=80"
            alt="Équipe d'ingénieurs sur un chantier"
            className="w-full h-105 lg:h-130 object-cover rounded-sm"
          />
        </CornerFrame>
      </div>
    </section>
  );
}
