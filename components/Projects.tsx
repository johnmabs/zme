"use client";

import { useMemo, useState } from "react";
import CornerFrame from "./CornerFrame";

type Category = "all" | "architecture" | "construction" | "industrie" | "vrd" | "energie";

type Project = {
  title: string;
  location: string;
  categories: Category[];
  categoryLabel: string;
  image: string;
};

const FILTERS: { value: Category; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "architecture", label: "Architecture" },
  { value: "construction", label: "Construction" },
  { value: "industrie", label: "Industrie" },
  { value: "vrd", label: "VRD" },
  { value: "energie", label: "Énergie" },
];

const PROJECTS: Project[] = [
  {
    title: "Siège administratif",
    location: "Pointe-Noire · Conception architecturale & suivi",
    categories: ["architecture"],
    categoryLabel: "Architecture",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Complexe résidentiel",
    location: "Brazzaville · Gros œuvre & finitions",
    categories: ["construction"],
    categoryLabel: "Construction",
    image: "https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Entrepôt logistique",
    location: "Pointe-Noire · Étude structure & construction",
    categories: ["industrie"],
    categoryLabel: "Industrie",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Voirie & assainissement",
    location: "Dolisie · Étude VRD & travaux",
    categories: ["vrd"],
    categoryLabel: "VRD",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Centrale solaire",
    location: "Loango · Dimensionnement & installation",
    categories: ["energie"],
    categoryLabel: "Énergie",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Centre commercial",
    location: "Pointe-Noire · Conception & réalisation complète",
    categories: ["architecture", "construction"],
    categoryLabel: "Architecture · Construction",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow text-amber-600 mb-4">Nos projets</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 accent-underline">
              Réalisations
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les réalisations par catégorie">
            {FILTERS.map((filter) => {
              const isActive = filter.value === activeFilter;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-full border border-mist-200 transition-colors ${
                    isActive ? "bg-navy-900 text-white" : "bg-transparent text-ink-600"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleProjects.map((project) => (
            <CornerFrame key={project.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title}, ${project.location}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4">
                <span className="font-mono text-[11px] uppercase tracking-wide text-amber-600">
                  {project.categoryLabel}
                </span>
                <h3 className="font-display font-bold text-navy-900 mt-1">{project.title}</h3>
                <p className="text-sm text-ink-400 mt-1">{project.location}</p>
              </div>
            </CornerFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
