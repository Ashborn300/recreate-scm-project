import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 gradient-blue-soft">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos expertises
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Des services complets <br/>pour tous vos projets
          </h2>
          <p className="text-muted-foreground text-lg">
            Du forage à la construction, une expertise pluridisciplinaire au service de votre réussite.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                data-reveal={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
                data-reveal-delay={(i % 3) * 120}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-spring hover:-translate-y-2 border border-border/60 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" width={1024} height={768}
                    className="w-full h-full object-cover group-hover:scale-110 transition-spring duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <Button asChild variant="outline" className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    <Link to="/services/$slug" params={{ slug: s.slug }} aria-label={`En savoir plus sur ${s.title}`}>
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
