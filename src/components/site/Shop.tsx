import { Button } from "@/components/ui/button";
import plans from "@/assets/shop-plans.jpg";
import formations from "@/assets/shop-formations.jpg";
import threed from "@/assets/shop-3d.jpg";

const products = [
  { img: plans, title: "Plans de construction", desc: "Plans architecturaux personnalisés et conformes aux normes." },
  { img: formations, title: "Formations", desc: "Sessions techniques pour professionnels et apprentis du BTP." },
  { img: threed, title: "Modélisation 3D", desc: "Rendus 3D photoréalistes pour visualiser vos projets." },
];

export default function Shop() {
  return (
    <section id="boutique" className="py-24 gradient-blue-soft">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre boutique
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Produits & services
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions complètes au-delà du chantier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={p.title}
              data-reveal={i === 0 ? "left" : i === 1 ? "up" : "right"}
              data-reveal-delay={i * 150}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-spring hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-spring duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{p.desc}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact">Demander</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal="scale" className="text-center mt-12">
          <Button asChild variant="hero" size="lg">
            <a href="#contact">Notre boutique</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
