import { Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-scm.jpeg";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#boutique", label: "Boutique" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white pt-16 pb-8">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="SCM SARL" className="h-12 w-12 rounded-lg bg-white object-contain" width={48} height={48} />
            <div>
              <div className="font-display text-xl font-extrabold">SCM SARL</div>
              <div className="text-xs text-white/60">Solution de Construction Moderne</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Construction, rénovation, plomberie, forage et travaux publics. Votre partenaire de confiance en RDC.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/profile.php?id=61551795404084" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook SCM SARL"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@solutiondeconstrucionsmodernes" target="_blank" rel="noopener noreferrer"
              aria-label="YouTube SCM SARL"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://wa.me/243814644847" target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp SCM SARL"
              className="w-10 h-10 rounded-lg bg-[hsl(142_76%_45%)] hover:bg-[hsl(142_76%_38%)] flex items-center justify-center transition-smooth">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.92 7.92 0 0 0-6.8 12L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8 1h.01a7.92 7.92 0 0 0 5.59-13.6Zm-5.6 12.18h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.09Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.5.65-.62.78-.11.13-.23.15-.43.05a5.43 5.43 0 0 1-2.7-2.36c-.2-.35.2-.32.58-1.07.06-.13.03-.24-.02-.34l-.62-1.5c-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.34.05-.52.24-.18.2-.69.67-.69 1.64 0 .97.71 1.91.81 2.04.1.13 1.4 2.13 3.39 2.99.47.2.85.32 1.14.41.48.15.92.13 1.26.08.39-.06 1.18-.48 1.35-.95.17-.46.17-.86.12-.95-.05-.08-.18-.13-.38-.22Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Menu rapide</h3>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 hover:text-accent transition-smooth text-sm">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 text-white/70"><MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Kinshasa / Ngaliema / Av. Kilimani n°28A</li>
            <li><a href="tel:+243814644847" className="flex gap-3 text-white/70 hover:text-accent transition-smooth"><Phone className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> +243 814 644 847</a></li>
            <li><a href="mailto:Solutiondeconstructionmodernes@gmail.com" className="flex gap-3 text-white/70 hover:text-accent transition-smooth break-all"><Mail className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" /> Solutiondeconstructionmodernes@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Informations légales</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>RCCM : CD/KNM/RCCM/24-B-01256</li>
            <li>IDNAT : 01-F4200-N55523N</li>
            <li>N°IMPÔT : A2442 173S</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/60">
        Copyright © 2026 SCM SARL — Tous droits réservés.
      </div>
    </footer>
  );
}
