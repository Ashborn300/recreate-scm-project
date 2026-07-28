import { Target, Clock, Cpu, Palette, Eye, UserCheck } from "lucide-react";

const items = [
  { icon: Target, title: "Projet sur mesure", desc: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins." },
  { icon: Clock, title: "Délais respectés", desc: "Une planification rigoureuse pour livrer dans les temps." },
  { icon: Cpu, title: "Technologies modernes", desc: "Outils numériques et matériaux innovants au service de la qualité." },
  { icon: Palette, title: "Design moderne", desc: "Esthétique contemporaine et fonctionnalité pour vos espaces." },
  { icon: Eye, title: "Suivi régulier", desc: "Rapports d'avancement et visites de chantier transparentes." },
  { icon: UserCheck, title: "Interlocuteur unique", desc: "Un chef de projet dédié pour simplifier votre expérience." },
];

export default function Trust() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Transparence et confiance
          </h2>
          <p className="text-muted-foreground text-lg">
            Six engagements concrets qui font la différence sur chacun de nos projets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            const dirs = ["left", "up", "right", "right", "up", "left"] as const;
            return (
              <div key={it.title}
                data-reveal={dirs[i]}
                data-reveal-delay={(i % 3) * 120}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-smooth">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-spring">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{it.title}</h3>
                <p className="text-muted-foreground">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
