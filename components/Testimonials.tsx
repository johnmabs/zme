"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "./icons";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ZME a su transformer un terrain difficile en un projet livré dans les délais, avec un suivi rigoureux à chaque étape.",
    author: "Mireille N'Kounkou",
    role: "Directrice, secteur immobilier — Pointe-Noire",
  },
  {
    quote:
      "Une équipe réactive et précise. Les études techniques nous ont évité des surcoûts importants en phase de construction.",
    author: "Jean-Paul Itoua",
    role: "Promoteur, projet industriel — Dolisie",
  },
  {
    quote:
      "Du premier contact à la remise des clés, nous avons eu un seul interlocuteur. Ça change tout sur un chantier public.",
    author: "Albertine Loemba",
    role: "Responsable infrastructures, institution publique",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_DELAY);
  }, []);

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartAutoplay]);

  const handleManualNav = (index: number) => {
    goTo(index);
    restartAutoplay();
  };

  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-mist-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="eyebrow text-amber-600 mb-4">Ils nous font confiance</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mb-14">Témoignages</h2>

        <div className="relative overflow-hidden">
          <div
            className="testimonial-track flex"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.author} className="w-full shrink-0 px-2">
                <QuoteIcon className="w-9 h-9 text-amber-500 mx-auto mb-6" />
                <p className="font-display text-xl sm:text-2xl text-navy-900 leading-relaxed">
                  « {testimonial.quote} »
                </p>
                <p className="mt-7 font-display font-semibold text-navy-900">{testimonial.author}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-400 mt-1">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            type="button"
            aria-label="Témoignage précédent"
            onClick={() => handleManualNav(current - 1)}
            className="w-10 h-10 rounded-full border border-mist-200 flex items-center justify-center hover:bg-white transition"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`Aller au témoignage ${index + 1}`}
                onClick={() => handleManualNav(index)}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ background: index === current ? "#0A1A2F" : "#E4EAEF" }}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Témoignage suivant"
            onClick={() => handleManualNav(current + 1)}
            className="w-10 h-10 rounded-full border border-mist-200 flex items-center justify-center hover:bg-white transition"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
