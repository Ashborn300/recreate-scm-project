import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteDialog from "@/components/site/QuoteDialog";
import logo from "@/assets/logo-scm.jpeg";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#boutique", label: "Boutique" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Desktop bar */}
      <div className="container hidden lg:flex items-center justify-between h-24">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logo} alt="Logo SCM SARL" className="h-16 w-16 rounded-lg object-contain bg-white" width={64} height={64} />
          <div>
            <div className="font-display font-extrabold text-primary text-xl leading-none">SCM SARL</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Construction Moderne</div>
          </div>
        </a>

        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://scmdarabase.lovable.app/employe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-card hover:shadow-elegant transition-spring hover:scale-105"
          >
            DATABASE
          </a>
          <QuoteDialog>
            <Button variant="hero" size="lg">Demander un devis</Button>
          </QuoteDialog>
        </div>
      </div>

      {/* Mobile bar — logo centré */}
      <div className="lg:hidden bg-white shadow-card">
        <div className="container grid grid-cols-3 items-center h-20">
          <div className="flex items-center justify-start">
            <button
              className="p-2 -ml-2 rounded-md hover:bg-secondary transition-smooth"
              onClick={() => setOpen(!open)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>
          </div>

          <a href="#accueil" className="flex items-center justify-center" aria-label="SCM SARL — Accueil">
            <img
              src={logo}
              alt="Logo SCM SARL"
              className="h-16 w-16 rounded-lg object-contain bg-white ring-1 ring-primary/10 shadow-sm"
              width={64}
              height={64}
            />
          </a>

          <div className="flex items-center justify-end">
            <a
              href="https://scmsar.netlify.app/employe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold text-[11px] tracking-wider shadow-sm"
            >
              DB
            </a>
          </div>
        </div>

        {/* Brand name strip */}
        <div className={`bg-white border-t border-border/50 transition-smooth ${scrolled ? "py-1" : "py-1.5"}`}>
          <div className="container text-center">
            <div className="font-display font-extrabold text-primary text-sm leading-tight">SCM SARL</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Construction Moderne</div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t bg-white animate-fade-in shadow-elegant">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-lg hover:bg-secondary text-foreground/90 font-medium border-b border-border/40 last:border-0 transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://scmsar.netlify.app/employe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-11 px-5 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold text-sm"
            >
              DATABASE
            </a>
            <QuoteDialog>
              <Button variant="hero" className="mt-2 w-full" onClick={() => setOpen(false)}>Demander un devis</Button>
            </QuoteDialog>
          </div>
        </div>
      )}
    </header>
  );
}
