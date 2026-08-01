import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, GraduationCap } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import CareerForm from "@/components/site/CareerForm";

export const Route = createFileRoute("/stage")({
  head: () => ({
    meta: [
      { title: "Demande de stage | SCM SARL" },
      { name: "description", content: "Étudiants et jeunes diplômés : déposez votre demande de stage chez SCM SARL à Kinshasa (chantier, bureau d'études, administration)." },
      { property: "og:title", content: "Demande de stage | SCM SARL" },
      { property: "og:description", content: "Envoyez votre demande de stage à SCM SARL directement via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StagePage,
});

const DOMAINES = [
  "Génie civil / Bâtiment",
  "Conduite de travaux",
  "Plomberie & sanitaire",
  "Électricité",
  "Forage & hydraulique",
  "Topographie",
  "Bureau d'études / Dessin (CAO)",
  "Administration / Comptabilité",
  "Marketing & communication",
  "Autre",
];

function StagePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent">Formation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Demande de stage</h1>
          <p className="text-muted-foreground mb-8">
            Complétez le formulaire, votre demande sera envoyée directement à notre équipe via WhatsApp.
          </p>

          <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-sm">
            <CareerForm variant="stage" options={DOMAINES} />
          </div>

          <p className="mt-8 text-sm text-muted-foreground flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" /> Professionnel ?{" "}
            <Link to="/emploi" className="text-primary font-semibold hover:underline">Postuler à une offre d'emploi</Link>
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
