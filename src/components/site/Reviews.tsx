import { Star } from "lucide-react";

const reviews = [
  { name: "Patrick M.", role: "Particulier — Kinshasa", text: "Un travail propre, livré dans les délais. Toute mon équipe a apprécié leur professionnalisme.", rating: 5 },
  { name: "Aline K.", role: "Promoteur immobilier", text: "SCM SARL a su transformer mes plans en réalité. Suivi exemplaire et très bonne communication.", rating: 5 },
  { name: "Joseph T.", role: "Entrepreneur agricole", text: "Notre forage fonctionne parfaitement. Une équipe sérieuse que je recommande sans hésiter.", rating: 4.5 },
  { name: "Marie L.", role: "Architecte", text: "Collaboration fluide et résultats à la hauteur de nos exigences techniques.", rating: 5 },
  { name: "David B.", role: "Directeur d'école", text: "Réhabilitation parfaite de notre établissement. Bravo à toute l'équipe.", rating: 4.5 },
  { name: "Christelle N.", role: "Particulière", text: "Ma villa est magnifique. Finitions soignées et conseils avisés tout au long du projet.", rating: 5 },
  { name: "Emmanuel I.", role: "Pasteur", text: "Construction de notre temple impeccable. Équipe respectueuse et compétente.", rating: 5 },
  { name: "Béatrice O.", role: "Restauratrice", text: "Plomberie refaite à neuf, plus aucun souci. Merci à SCM SARL.", rating: 4.5 },
  { name: "Olivier M.", role: "Ingénieur civil", text: "Partenaire fiable pour nos sous-traitances en BTP. Qualité au rendez-vous.", rating: 5 },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = rating >= i ? 100 : rating >= i - 0.5 ? 50 : 0;
        return (
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-muted" fill="currentColor" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
              <Star className="h-4 w-4 text-accent" fill="currentColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-muted-foreground text-lg">
            La confiance se mesure aux retours de nos clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i}
              data-reveal={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
              data-reveal-delay={(i % 3) * 120}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-spring">
              <Stars rating={r.rating} />
              <p className="mt-4 text-foreground/90 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
