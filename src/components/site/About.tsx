import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Users, Leaf, Lightbulb, HeartHandshake, Trophy, Building2, MapPin, Calendar } from "lucide-react";
import realisation from "@/assets/about-construction.webp";
import Counter from "@/components/site/Counter";

const points = [
  "Expertise technique reconnue",
  "Engagement qualité à chaque étape",
  "Accompagnement personnalisé",
  "Respect strict des délais",
];

const values = [
  { icon: ShieldCheck, title: "Intégrité", desc: "Transparence totale sur les coûts, les délais et les méthodes employées." },
  { icon: Trophy, title: "Excellence", desc: "Des standards élevés sur chaque chantier, du gros œuvre aux finitions." },
  { icon: HeartHandshake, title: "Engagement client", desc: "Votre projet est notre priorité, du premier devis à la livraison." },
  { icon: Lightbulb, title: "Innovation", desc: "Méthodes modernes, modélisation 3D et matériaux de pointe." },
  { icon: Users, title: "Esprit d'équipe", desc: "Une équipe pluridisciplinaire qui collabore pour votre réussite." },
  { icon: Leaf, title: "Durabilité", desc: "Des constructions pensées pour durer et respectueuses de l'environnement." },
];

const miniStats: Array<{
  icon: typeof Calendar;
  num?: number;
  suffix?: string;
  text?: string;
  label: string;
}> = [
  { icon: Calendar, num: 2019, label: "Année de fondation" },
  { icon: Building2, num: 47, suffix: "+", label: "Chantiers livrés" },
  { icon: MapPin, text: "RDC", label: "Basés à Kinshasa" },
  { icon: Users, num: 30, suffix: "+", label: "Experts mobilisés" },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container">
        {/* Intro + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal="left" className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl gradient-hero opacity-20 blur-2xl" />
            <img
              src={realisation}
              alt="Chantier de construction SCM SARL avec grue à Kinshasa"
              className="relative rounded-2xl shadow-elegant w-full"
              loading="lazy"
              width={1024}
              height={768}
            />
            <div data-reveal="scale" data-reveal-delay="300" className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-elegant border border-border max-w-[260px]">
              <div className="text-4xl font-display font-extrabold text-gradient-primary">
                <Counter to={100} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Suivi de A à Z, du plan à la livraison</div>
            </div>
          </div>

          <div data-reveal="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              À propos de SCM SARL
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Vos projets entre <br />de bonnes mains
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              <strong className="text-foreground">Solutions de Constructions Modernes (SCM SARL)</strong> est une
              entreprise congolaise basée à Kinshasa, spécialisée dans le BTP, le forage d'eau,
              l'irrigation, la plomberie, la construction de ponts et la signalétique urbaine.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Depuis notre création, nous accompagnons particuliers, entreprises et institutions
              de la conception à la réalisation, en mettant notre savoir-faire au service de la
              qualité, du respect des délais et des normes en vigueur en RDC.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#contact">Travailler avec nous</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#realisations">Voir nos réalisations</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {miniStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                data-reveal="up"
                data-reveal-delay={i * 120}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-spring"
              >
                <div className="w-12 h-12 rounded-xl gradient-blue-soft flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-primary leading-none">
                    {s.num !== undefined ? (
                      <Counter to={s.num} suffix={s.suffix ?? ""} />
                    ) : (
                      s.text
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div data-reveal="left" className="p-8 rounded-2xl gradient-blue-soft border border-border">
            <h3 className="font-display text-2xl font-bold text-primary mb-3">Notre mission</h3>
            <p className="text-foreground/80 leading-relaxed">
              Offrir à nos clients en République Démocratique du Congo des solutions de
              construction fiables, modernes et durables, en alliant savoir-faire local
              et standards internationaux pour bâtir l'avenir du pays.
            </p>
          </div>
          <div data-reveal="right" className="p-8 rounded-2xl gradient-blue-soft border border-border">
            <h3 className="font-display text-2xl font-bold text-primary mb-3">Notre vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              Devenir la référence du BTP et de l'ingénierie en Afrique centrale, en
              transformant les villes et les territoires grâce à des infrastructures
              de qualité au service du développement durable.
            </p>
          </div>
        </div>

        {/* Vidéo YouTube */}
        <div data-reveal="zoom" className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Découvrez SCM en vidéo
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-primary">
              Plongez au cœur de nos chantiers
            </h3>
          </div>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant border border-border bg-black">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/57nuzZorARo?rel=0&modestbranding=0&showinfo=1"
                title="SCM SARL — Présentation vidéo"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Vidéo officielle —{" "}
            <a
              href="https://youtube.com/@solutiondeconstrucionsmodernes?si=annrBKiEciHBAZCY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Abonnez-vous à notre chaîne YouTube
            </a>
          </p>
        </div>

        {/* Nos valeurs */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Nos valeurs
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-primary mb-3">
              Ce qui nous guide chaque jour
            </h3>
            <p className="text-muted-foreground">
              Six valeurs fondamentales qui structurent notre manière de travailler.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  data-reveal={i % 2 === 0 ? "left" : "right"}
                  data-reveal-delay={i * 90}
                  className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-smooth"
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-primary mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
