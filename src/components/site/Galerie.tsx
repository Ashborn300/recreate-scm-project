import g1 from "@/assets/galerie-1.webp";
import g2 from "@/assets/galerie-2.webp";
import g3 from "@/assets/galerie-3.webp";
import g4 from "@/assets/galerie-4.webp";
import g5 from "@/assets/galerie-5.jpg";
import g6 from "@/assets/galerie-6.jpg";
import g7 from "@/assets/galerie-7.jpg";
import g8 from "@/assets/galerie-8.jpg";
import g9 from "@/assets/galerie-9.jpg";
import g10 from "@/assets/galerie-10.jpg";

const photos = [
  
  { src: g5, title: "Coffrage & ferraillage", cat: "Gros œuvre" },
  { src: g2, title: "Pose de toiture", cat: "Couverture" },
  { src: g6, title: "Visite technique sur site", cat: "Suivi" },
  { src: g8, title: "Notre équipe terrain", cat: "Équipe SCM" },
  { src: g7, title: "Structure en élévation", cat: "Construction" },
  { src: g3, title: "Contrôle qualité", cat: "Supervision" },
  { src: g10, title: "Coordination chantier", cat: "Ingénierie" },
  { src: g4, title: "Mise en œuvre du béton", cat: "Gros œuvre" },
  { src: g9, title: "Maçonnerie en élévation", cat: "Construction" },
];

export default function Galerie() {
  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Galerie
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Nos réalisations en images
          </h2>
          <p className="text-muted-foreground text-lg">
            Plongez dans le quotidien de nos chantiers à Kinshasa et à travers la RDC.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              data-reveal="zoom"
              data-reveal-delay={(i % 4) * 100}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-spring ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={p.src}
                alt={`${p.title} — SCM SARL Kinshasa`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-spring duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-smooth" />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                  {p.cat}
                </span>
                <div className="font-display text-sm font-bold mt-1 leading-tight">
                  {p.title}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div data-reveal="up" className="mt-14 text-center">
          <p className="text-lg text-foreground/80 mb-6">
            Voir plus de nos réalisations sur{" "}
            <span className="font-semibold text-primary">Facebook</span> et sur{" "}
            <span className="font-semibold text-primary">YouTube</span>.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61551795404084"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SCM SARL sur Facebook"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1877F2] text-white font-semibold shadow-card hover:shadow-elegant hover:scale-105 transition-spring"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://youtube.com/@solutiondeconstrucionsmodernes?si=annrBKiEciHBAZCY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SCM SARL sur YouTube"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF0000] text-white font-semibold shadow-card hover:shadow-elegant hover:scale-105 transition-spring"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

