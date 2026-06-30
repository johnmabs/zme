type CornerFrameProps = {
  children: React.ReactNode;
  corners?: Array<"tl" | "tr" | "bl" | "br">;
  className?: string;
};

/**
 * Cadre "viewport" à coins de visée (clin d'œil au levé topographique / CAD).
 * S'agrandit légèrement au survol ou au focus — voir .corner-frame dans globals.css.
 */
export default function CornerFrame({
  children,
  corners = ["tl", "tr", "bl", "br"],
  className = "",
}: CornerFrameProps) {
  return (
    <div className={`corner-frame ${className}`}>
      {corners.includes("tl") && <span className="cf-corner cf-tl" />}
      {corners.includes("tr") && <span className="cf-corner cf-tr" />}
      {corners.includes("bl") && <span className="cf-corner cf-bl" />}
      {corners.includes("br") && <span className="cf-corner cf-br" />}
      {children}
    </div>
  );
}
