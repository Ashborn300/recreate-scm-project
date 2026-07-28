import { HardHat, Users, Award, ShieldCheck } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import t5 from "@/assets/team-5.jpg";

const images = [t1, t2, t3, t4, t5];

const features = [
  { icon: HardHat, title: "Ingénieurs & techniciens", desc: "Une expertise terrain reconnue sur chaque chantier." },
  { icon: Users, title: "Équipe expérimentée", desc: "Maçons, ferrailleurs, coffreurs et superviseurs aguerris." },
  { icon: ShieldCheck, title: "Sécurité avant tout", desc: "Port d'EPI et respect strict des normes sur site." },
  { icon: Award, title: "Qualité garantie", desc: "Un savoir-faire au service de vos projets de construction." },
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-secondary/40">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre équipe
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Une équipe de professionnels qualifiés
          </h2>
          <p className="text-muted-foreground text-lg">
            Des hommes et des femmes engagés, formés et passionnés pour donner vie à vos projets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {images.map((src, i) => (
            <div
              key={i}
              data-reveal="zoom"
              data-reveal-delay={i * 100}
              className={`overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-spring ${
                i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt="Équipe SCM SARL sur le terrain"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-spring duration-700"
              />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              data-reveal="up"
              data-reveal-delay={i * 100}
              className="p-6 rounded-2xl bg-background border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-spring"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
