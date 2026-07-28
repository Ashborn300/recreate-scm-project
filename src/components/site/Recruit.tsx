import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import ApplyDialog from "@/components/site/ApplyDialog";

export default function Recruit() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div data-reveal="scale" className="relative overflow-hidden rounded-3xl gradient-hero p-10 lg:p-16 text-white">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur mb-5">
                <Briefcase className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Carrières</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-4">
                SCM SARL recrute
              </h2>
              <p className="text-white/85 text-lg max-w-2xl">
                Envoyez-nous votre CV et rejoignez une entreprise dynamique
                dans le domaine de la construction. Nous valorisons les talents engagés.
              </p>
            </div>
            <ApplyDialog>
              <Button variant="accent" size="lg" className="h-14 px-8 text-base">Postuler maintenant</Button>
            </ApplyDialog>
          </div>
        </div>
      </div>
    </section>
  );
}

