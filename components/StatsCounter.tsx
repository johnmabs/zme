"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 15, suffix: "+", label: "Années d'expérience" },
  { target: 100, suffix: "+", label: "Projets réalisés" },
  { target: 50, suffix: "+", label: "Clients" },
  { target: 7, suffix: "", label: "Domaines d'expertise" },
];

/** Anime un seul compteur de 0 vers sa cible avec un easing "ease-out cubic". */
function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const duration = 1400;
            const start = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-24 lg:py-28 bg-navy-950 blueprint-grid relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="max-w-xl mb-14">
          <p className="eyebrow text-amber-400 mb-4">ZME en chiffres</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Quinze ans de précision, mesurés en résultats.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-white/15 pt-6">
              <p className="counter-num text-5xl sm:text-6xl text-white">
                <Counter target={stat.target} />
                <span className="text-amber-400">{stat.suffix}</span>
              </p>
              <p className="font-mono text-xs uppercase tracking-wide text-white/50 mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
