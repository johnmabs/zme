import CornerFrame from "./CornerFrame";
import { LinkedInIcon, FacebookIcon, WhatsAppIcon } from "./icons";

const QUICK_LINKS = [
  { href: "#apropos", label: "À propos" },
  { href: "#expertises", label: "Expertises" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#temoignages", label: "Témoignages" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy-950 text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12">
        <div>
          <span className="font-display font-extrabold text-2xl">ZME</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400 ml-2">
            Engineering Group
          </span>
          <p className="text-white/60 text-sm mt-5 leading-relaxed max-w-xs">
            Bureau d&apos;études et d&apos;ingénierie basé à Pointe-Noire, au service des entreprises,
            institutions et particuliers du Congo.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-white/40 mb-5">Liens rapides</p>
          <ul className="space-y-3 text-sm text-white/75">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-amber-400 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-white/40 mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              Avenue de l&apos;Indépendance,
              <br />
              Pointe-Noire, Congo
            </li>
            <li>
              <a href="tel:+242060000000" className="hover:text-amber-400 transition">
                +242 06 000 0000
              </a>
            </li>
            <li>
              <a href="mailto:contact@zme-engineering.cg" className="hover:text-amber-400 transition">
                contact@zme-engineering.cg
              </a>
            </li>
            <li className="text-white/50">Lun – Ven · 8h–17h</li>
          </ul>
        </div>

        <CornerFrame corners={["tl", "br"]}>
          <iframe
            title="Localisation ZME Engineering Group, Pointe-Noire"
            className="w-full h-44 rounded-sm border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Pointe-Noire,Congo&output=embed"
          />
        </CornerFrame>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-14 pt-7 border-t border-white/10 flex flex-wrap justify-between gap-3 text-xs text-white/40">
        <p>© {year} ZME Engineering Group. Tous droits réservés.</p>
        <p className="font-mono">Pointe-Noire · République du Congo</p>
      </div>
    </footer>
  );
}
