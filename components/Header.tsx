"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#expertises", label: "Expertises" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fond opaque sur le header après un léger scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      id="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/95 backdrop-blur shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <span className="font-display font-extrabold text-2xl tracking-tight text-white">ZME</span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400">Engineering</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">Group</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-10 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-amber-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-900 font-display font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          Demander un devis
        </a>

        <button
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden p-2 -mr-2"
        >
          {menuOpen ? <CloseIcon className="w-7 h-7 text-white" /> : <MenuIcon className="w-7 h-7 text-white" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className="mobile-nav lg:hidden overflow-hidden bg-navy-950/98 backdrop-blur"
        style={{
          maxHeight: menuOpen ? "420px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col px-6 pb-6 gap-1 font-display font-medium text-white">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="py-3 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 text-center bg-amber-500 text-navy-900 font-semibold px-5 py-3 rounded"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </header>
  );
}
