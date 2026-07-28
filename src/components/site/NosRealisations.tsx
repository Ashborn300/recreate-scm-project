import n1 from "@/assets/realisation-new-1.jpg";
import n2 from "@/assets/realisation-new-2.jpg";
import n3 from "@/assets/realisation-new-3.jpg";
import n4 from "@/assets/realisation-new-4.jpg";
import n5 from "@/assets/realisation-new-5.jpg";
import n6 from "@/assets/realisation-new-6.jpg";
import n7 from "@/assets/realisation-new-7.jpg";
import n8 from "@/assets/realisation-new-8.jpg";
import n9 from "@/assets/realisation-new-9.jpg";
import n10 from "@/assets/realisation-new-10.jpg";

const images = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];

export default function NosRealisations() {
  return (
    <section id="nos-realisations" className="py-24 bg-background">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos réalisations
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary">
            En images
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              data-reveal="zoom"
              data-reveal-delay={(i % 4) * 100}
              className="overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-spring aspect-square"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-spring duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
