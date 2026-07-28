import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const PHONE = "+243814644847";
const PHONE_DISPLAY = "+243 814 644 847";
const EMAIL = "Solutiondeconstructionmodernes@gmail.com";
const ADDRESS = "Kinshasa / Ngaliema / Av. Kilimani n°28A";

const schema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(60),
  lastName: z.string().trim().min(1, "Nom requis").max(60),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(6, "Téléphone requis").max(30),
  subject: z.string().trim().min(2, "Sujet requis").max(120),
  message: z.string().trim().min(5, "Message trop court").max(1500),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const text = `Bonjour SCM SARL,%0A%0ANom: ${encodeURIComponent(parsed.data.firstName + " " + parsed.data.lastName)}%0AEmail: ${encodeURIComponent(parsed.data.email)}%0ATéléphone: ${encodeURIComponent(parsed.data.phone)}%0ASujet: ${encodeURIComponent(parsed.data.subject)}%0A%0A${encodeURIComponent(parsed.data.message)}`;
    window.open(`https://wa.me/${PHONE.replace(/\D/g, "")}?text=${text}`, "_blank");
    toast.success("Message prêt à être envoyé via WhatsApp !");
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground text-lg">
            Une équipe à votre écoute pour vous proposer la meilleure solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div data-reveal="left" className="space-y-4">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card flex gap-4">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Adresse</div>
                <div className="font-semibold text-primary mt-1">{ADDRESS}</div>
              </div>
            </div>

            <a href={`tel:${PHONE}`} className="block p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft transition-smooth flex gap-4">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Téléphone</div>
                <div className="font-semibold text-primary mt-1">{PHONE_DISPLAY}</div>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="block p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft transition-smooth flex gap-4">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email</div>
                <div className="font-semibold text-primary mt-1 break-all">{EMAIL}</div>
              </div>
            </a>

            <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-[hsl(142_76%_45%)] text-white shadow-card hover:shadow-soft transition-smooth flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/80 font-semibold">WhatsApp</div>
                <div className="font-semibold mt-1">Discutons en direct</div>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} data-reveal="right" className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" name="firstName" maxLength={60} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" name="lastName" maxLength={60} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" maxLength={255} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" name="phone" type="tel" maxLength={30} required className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" name="subject" maxLength={120} required className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} maxLength={1500} required className="mt-1.5" />
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full mt-6" disabled={loading}>
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
