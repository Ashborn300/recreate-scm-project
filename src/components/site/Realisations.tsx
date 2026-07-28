import { Button } from "@/components/ui/button";
import r1 from "@/assets/realisation-1.webp";
import r2 from "@/assets/realisation-2.webp";
import r3 from "@/assets/realisation-3.jpg";
import r4 from "@/assets/realisation-4.jpg";
import forage from "@/assets/service-forage.webp";
import btp from "@/assets/service-btp.webp";

const items = [
  { src: r1, title: "Construction d'immeuble — Kinshasa", cat: "BTP" },
  { src: r2, title: "Suivi de chantier — Équipe SCM", cat: "Supervision" },
  { src: r3, title: "Villa moderne livrée", cat: "Résidentiel" },
  { src: forage, title: "Forage d'eau opérationnel", cat: "Hydraulique" },
  { src: r4, title: "Fondation & dalle béton", cat: "Génie civil" },
  { src: btp, title: "Maquette et plans 3D", cat: "Conception" },
];

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 bg-secondary/40">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos réalisations
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Des projets qui parlent d'eux-mêmes
          </h2>
          <p className="text-muted-foreground text-lg">
            Quelques-unes de nos réalisations en construction, forage et rénovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure key={i}
              data-reveal="zoom"
              data-reveal-delay={i * 100}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-spring aspect-[4/3]">
              <img src={it.src} alt={it.title} loading="lazy" width={1024} height={768}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-spring duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-90 group-hover:opacity-100 transition-smooth" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">{it.cat}</span>
                <div className="font-display text-lg font-bold mt-1">{it.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div data-reveal="scale" className="text-center mt-12">
          <Button asChild variant="hero" size="lg">
            <a href="#contact">Voir nos réalisations</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
