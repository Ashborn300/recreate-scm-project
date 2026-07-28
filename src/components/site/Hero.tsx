import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-construction.webp";
import { ArrowRight, Sparkles } from "lucide-react";
import Counter from "@/components/site/Counter";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Chantier de construction moderne SCM SARL" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Entreprise certifiée — RDC</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            SCM <span className="text-accent">SARL</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-display font-semibold mb-4 text-white/95">
            Solution de Construction Moderne
          </p>

          <p className="text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
            Entreprise spécialisée en construction, rénovation, plomberie, forage,
            BTP et travaux publics. Nous transformons vos projets en réalisations durables.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="accent" size="lg" className="text-base h-14 px-8">
              <a href="#contact">
                Faire une demande
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg" className="text-base h-14 px-8">
              <a href="#services">Découvrir nos services</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-display font-bold text-accent">
                <Counter to={5} suffix="+" />
              </div>
              <div className="text-sm text-white/70">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-accent">
                <Counter to={47} suffix="+" />
              </div>
              <div className="text-sm text-white/70">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-accent">
                <Counter to={95} suffix="%" />
              </div>
              <div className="text-sm text-white/70">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
