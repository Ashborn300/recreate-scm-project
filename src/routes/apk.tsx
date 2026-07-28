import { createFileRoute } from "@tanstack/react-router";
import { Download, Smartphone, ShieldCheck } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import apk from "@/assets/scm-sarl.apk.asset.json";
import shotBlue from "@/assets/scm-app-blue.jpg.asset.json";

export const Route = createFileRoute("/apk")({
  head: () => ({
    meta: [
      { title: "Télécharger l'app SCM SARL (APK) — Gestion de chantiers" },
      {
        name: "description",
        content:
          "Téléchargez l'application mobile SCM SARL (APK Android) pour gérer vos chantiers, tâches, équipes et livraisons en temps réel.",
      },
      { property: "og:title", content: "Télécharger l'app SCM SARL (APK)" },
      {
        property: "og:description",
        content:
          "Application Android SCM SARL — suivez vos chantiers, tâches et équipes en temps réel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApkPage,
});

function ApkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <section className="container">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              <Smartphone className="h-4 w-4" /> Application Android
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary-deep leading-tight">
              Téléchargez l'app <span className="text-gradient-primary">SCM SARL</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Gérez vos chantiers, tâches, équipes et livraisons depuis votre téléphone,
              en toute simplicité.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={apk.url}
                download="scm-sarl.apk"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow transition-spring hover:scale-105 w-full sm:w-auto"
              >
                <Download className="h-5 w-5" />
                Télécharger l'APK
              </a>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Fichier officiel SCM SARL
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-gradient-blue-soft p-4 sm:p-6 shadow-elegant">
              <img
                src={shotBlue.url}
                alt="Aperçu de l'application SCM SARL"
                className="w-full h-auto rounded-2xl shadow-card"
                loading="eager"
              />
            </div>
          </div>

          {/* Install instructions */}
          <div className="mt-12 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
            <h2 className="font-display font-bold text-xl md:text-2xl text-primary-deep mb-4">
              Comment installer l'APK ?
            </h2>
            <ol className="space-y-3 text-sm md:text-base text-foreground/85 list-decimal list-inside">
              <li>Appuyez sur le bouton <strong>Télécharger l'APK</strong> ci-dessus.</li>
              <li>
                Ouvrez le fichier téléchargé. Autorisez l'installation depuis des
                sources inconnues si votre téléphone le demande.
              </li>
              <li>Installez l'application, puis ouvrez-la et connectez-vous.</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
