export default function CallToAction() {
  return (
    <section className="relative py-24 lg:py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Parlons de votre prochain projet.
        </h2>
        <p className="mt-6 text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
          Notre équipe est prête à vous accompagner de l&apos;idée jusqu&apos;à la réalisation.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-9 bg-amber-500 hover:bg-amber-400 text-navy-900 font-display font-semibold px-8 py-4 rounded transition-colors"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
}
