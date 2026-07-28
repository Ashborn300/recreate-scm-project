import { useEffect } from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Award,
} from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import QuoteDialog from "@/components/site/QuoteDialog";
import { services, getService } from "@/data/services";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = params ? getService(params.slug) : undefined;
    const title = s ? `${s.title} à Kinshasa | SCM SARL` : "Service | SCM SARL";
    const description = s
      ? `${s.title} en RDC : ${s.desc} Devis gratuit avec SCM SARL.`
      : "Découvrez les services de SCM SARL en RDC.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  useReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const blocks = [
    {
      icon: Target,
      title: "Nos domaines d'intervention",
      items: service.domaines,
      color: "from-primary to-primary-glow",
    },
    {
      icon: ShieldCheck,
      title: "Nos engagements",
      items: service.engagements,
      color: "from-primary-deep to-primary",
    },
    {
      icon: Award,
      title: "Pourquoi choisir SCM SARL ?",
      items: service.pourquoi,
      color: "from-accent to-[hsl(38_92%_60%)]",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="container relative z-10 text-white">
            <a
              href="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-accent text-sm mb-6 transition-smooth"
            >
              <ArrowLeft className="h-4 w-4" /> Retour aux services
            </a>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium uppercase tracking-wider">Service SCM SARL</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8">{service.desc}</p>
              <div className="flex flex-wrap gap-3">
                <QuoteDialog>
                  <Button variant="hero" size="lg">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Button>
                </QuoteDialog>
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href="https://wa.me/243814644847"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-4 w-4" /> WhatsApp +243 814 644 847
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container space-y-16">
            {blocks.map((b) => {
              const BIcon = b.icon;
              return (
                <div key={b.title} className="reveal grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-4">
                    <div
                      className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${b.color} items-center justify-center shadow-glow mb-4`}
                    >
                      <BIcon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
                      {b.title}
                    </h2>
                    <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                  </div>
                  <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                    {b.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 p-5 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-card transition-smooth"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/85 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="reveal rounded-3xl gradient-hero p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                    Notre périmètre
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-8">
                  Principaux secteurs d'intervention
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.secteurs.map((s) => (
                    <span
                      key={s}
                      className="px-5 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 font-semibold text-sm hover:bg-white hover:text-primary transition-smooth cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 gradient-blue-soft">
          <div className="container max-w-4xl text-center reveal">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-primary mb-4">
              Un projet de {service.title.toLowerCase()} en tête ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et obtenez un devis personnalisé gratuit sous 48h.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <QuoteDialog>
                <Button variant="hero" size="lg">
                  Demander un devis
                </Button>
              </QuoteDialog>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+243814644847">
                  <Phone className="h-4 w-4" /> Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary mb-8 text-center">
              Découvrir nos autres services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((o) => {
                const OIcon = o.icon;
                return (
                  <Link
                    key={o.slug}
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-card hover:shadow-elegant transition-spring hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={o.image}
                        alt={o.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-spring duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <OIcon className="h-5 w-5 text-primary" />
                        <span className="font-display font-bold text-primary">{o.title}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
