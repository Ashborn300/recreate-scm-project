import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Trust from "@/components/site/Trust";
import Stats from "@/components/site/Stats";
import Team from "@/components/site/Team";
import Realisations from "@/components/site/Realisations";
import NosRealisations from "@/components/site/NosRealisations";
import Reviews from "@/components/site/Reviews";
import Shop from "@/components/site/Shop";

import Galerie from "@/components/site/Galerie";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCM SARL — Solution de Construction Moderne à Kinshasa" },
      {
        name: "description",
        content:
          "SCM SARL : construction, rénovation, plomberie, forage, irrigation et travaux publics en RDC. Devis gratuit sous 48h.",
      },
      { property: "og:title", content: "SCM SARL — Solution de Construction Moderne à Kinshasa" },
      {
        property: "og:description",
        content:
          "SCM SARL : construction, rénovation, plomberie, forage, irrigation et travaux publics en RDC. Devis gratuit sous 48h.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Trust />
        <Stats />
        <Team />
        <Realisations />
        <NosRealisations />
        <Reviews />
        <Shop />
        
        <Galerie />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
