import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Carrieres() {
  return (
    <section id="carrieres" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent">Rejoignez-nous</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Carrières & Stages</h2>
          <p className="text-muted-foreground">
            SCM SARL recrute des talents et accueille des stagiaires. Choisissez votre formulaire, il nous parvient directement par WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="reveal rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg transition-smooth flex flex-col">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Postuler à une offre d'emploi</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Ingénieurs, chefs de chantier, plombiers, foreurs, techniciens… envoyez votre candidature en quelques minutes.
            </p>
            <Button asChild size="lg" className="w-full">
              <Link to="/emploi">
                Postuler maintenant <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="reveal rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg transition-smooth flex flex-col">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Demande de stage</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Étudiants et jeunes diplômés : apprenez sur nos chantiers et dans nos bureaux d'études.
            </p>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link to="/stage">
                Demander un stage <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
