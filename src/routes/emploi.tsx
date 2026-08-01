import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, GraduationCap } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import CareerForm from "@/components/site/CareerForm";

export const Route = createFileRoute("/emploi")({
  head: () => ({
    meta: [
      { title: "Postuler à une offre d'emploi | SCM SARL" },
      { name: "description", content: "Rejoignez SCM SARL à Kinshasa : postulez à nos offres d'emploi en construction, plomberie, forage et travaux publics." },
      { property: "og:title", content: "Postuler à une offre d'emploi | SCM SARL" },
      { property: "og:description", content: "Envoyez votre candidature à SCM SARL directement via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmploiPage,
});

const POSTES = [
  "Ingénieur civil",
  "Conducteur de travaux",
  "Chef de chantier",
  "Maçon",
  "Plombier",
  "Électricien",
  "Foreur / Opérateur machine",
  "Soudeur / Métallier",
  "Topographe",
  "Administration / Comptabilité",
  "Autre",
];

function EmploiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">Carrières</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Postuler à une offre d'emploi</h1>
          <p className="text-muted-foreground mb-8">
            Remplissez ce formulaire, votre candidature nous parviendra instantanément par WhatsApp.
          </p>

          <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-sm">
            <CareerForm variant="emploi" options={POSTES} />
          </div>

          <p className="mt-8 text-sm text-muted-foreground flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent" /> Étudiant ?{" "}
            <Link to="/stage" className="text-primary font-semibold hover:underline">Faire une demande de stage</Link>
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
