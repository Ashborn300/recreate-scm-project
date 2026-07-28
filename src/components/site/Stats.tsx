import { Award, Briefcase, Smile, HardHat } from "lucide-react";
import Counter from "@/components/site/Counter";

const stats = [
  { icon: Award, value: 5, suffix: "+", label: "Années d'expérience" },
  { icon: Briefcase, value: 47, suffix: "+", label: "Projets réalisés" },
  { icon: Smile, value: 95, suffix: "%", label: "Clients satisfaits" },
  { icon: HardHat, value: 100, suffix: "%", label: "Main-d'œuvre qualifiée" },
];

export default function Stats() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                data-reveal="scale"
                data-reveal-delay={i * 100}
                className="text-center text-white"
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-white/15 backdrop-blur items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="font-display text-5xl lg:text-6xl font-extrabold mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/85 font-medium">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
