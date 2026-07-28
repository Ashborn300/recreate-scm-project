import { useState, type ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ClipboardCheck } from "lucide-react";

const WHATSAPP_NUMBER = "243814644847";

const schema = z.object({
  nom: z.string().trim().min(2, "Nom requis").max(80),
  contact: z.string().trim().min(6, "Téléphone / email requis").max(80),
  email: z.string().trim().email("Email invalide").max(120).optional().or(z.literal("")),
  typeProjet: z.string().min(1, "Sélectionnez un type"),
  localisation: z.string().trim().min(2, "Localisation requise").max(120),
  surface: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  delai: z.string().trim().max(60).optional().or(z.literal("")),
  description: z.string().trim().min(10, "Décrivez brièvement votre projet").max(1000),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = {
  nom: "",
  contact: "",
  email: "",
  typeProjet: "",
  localisation: "",
  surface: "",
  budget: "",
  delai: "",
  description: "",
};

const projectTypes = [
  "Construction de villa",
  "Immeuble résidentiel",
  "Bâtiment commercial",
  "Forage d'eau",
  "Plomberie / Réhabilitation",
  "Ponts & Chaussées",
  "Irrigation / Station de pompage",
  "Panneaux publicitaires",
  "Autre",
];

export default function QuoteDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormData;
        errs[key] = i.message;
      });
      setErrors(errs);
      toast.error("Veuillez corriger les champs en rouge");
      return;
    }
    setErrors({});
    const d = result.data;
    const message =
      `*Nouvelle demande de devis — SCM SARL*%0A%0A` +
      `*Nom :* ${encodeURIComponent(d.nom)}%0A` +
      `*Contact :* ${encodeURIComponent(d.contact)}%0A` +
      (d.email ? `*Email :* ${encodeURIComponent(d.email)}%0A` : "") +
      `*Type de projet :* ${encodeURIComponent(d.typeProjet)}%0A` +
      `*Localisation :* ${encodeURIComponent(d.localisation)}%0A` +
      (d.surface ? `*Surface / Volume :* ${encodeURIComponent(d.surface)}%0A` : "") +
      (d.budget ? `*Budget estimé :* ${encodeURIComponent(d.budget)}%0A` : "") +
      (d.delai ? `*Délai souhaité :* ${encodeURIComponent(d.delai)}%0A` : "") +
      `%0A*Description :*%0A${encodeURIComponent(d.description)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    toast.success("Redirection vers WhatsApp…");
    setOpen(false);
    setData(initial);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ClipboardCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="font-display text-2xl">Demander un devis</DialogTitle>
              <DialogDescription>Réponse sous 48h via WhatsApp.</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="q-nom">Nom complet *</Label>
              <Input id="q-nom" value={data.nom} onChange={(e) => update("nom", e.target.value)} maxLength={80} />
              {errors.nom && <p className="text-xs text-destructive mt-1">{errors.nom}</p>}
            </div>
            <div>
              <Label htmlFor="q-contact">Téléphone *</Label>
              <Input id="q-contact" placeholder="+243 …" value={data.contact} onChange={(e) => update("contact", e.target.value)} maxLength={80} />
              {errors.contact && <p className="text-xs text-destructive mt-1">{errors.contact}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="q-email">Email (facultatif)</Label>
            <Input id="q-email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} maxLength={120} />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="q-type">Type de projet *</Label>
              <Select value={data.typeProjet} onValueChange={(v) => update("typeProjet", v)}>
                <SelectTrigger id="q-type"><SelectValue placeholder="Sélectionner…" /></SelectTrigger>
                <SelectContent>
                  {projectTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.typeProjet && <p className="text-xs text-destructive mt-1">{errors.typeProjet}</p>}
            </div>
            <div>
              <Label htmlFor="q-loc">Localisation du chantier *</Label>
              <Input id="q-loc" placeholder="Ex: Kinshasa, Gombe" value={data.localisation} onChange={(e) => update("localisation", e.target.value)} maxLength={120} />
              {errors.localisation && <p className="text-xs text-destructive mt-1">{errors.localisation}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="q-surface">Surface / Volume</Label>
              <Input id="q-surface" placeholder="Ex: 200 m²" value={data.surface} onChange={(e) => update("surface", e.target.value)} maxLength={60} />
            </div>
            <div>
              <Label htmlFor="q-budget">Budget estimé</Label>
              <Input id="q-budget" placeholder="Ex: 50 000 USD" value={data.budget} onChange={(e) => update("budget", e.target.value)} maxLength={60} />
            </div>
            <div>
              <Label htmlFor="q-delai">Délai souhaité</Label>
              <Input id="q-delai" placeholder="Ex: 6 mois" value={data.delai} onChange={(e) => update("delai", e.target.value)} maxLength={60} />
            </div>
          </div>

          <div>
            <Label htmlFor="q-desc">Description du projet *</Label>
            <Textarea id="q-desc" rows={4} value={data.description} onChange={(e) => update("description", e.target.value)} maxLength={1000} placeholder="Décrivez votre projet, vos besoins spécifiques…" />
            {errors.description && <p className="text-xs text-destructive mt-1">{errors.description}</p>}
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Envoyer via WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Votre demande sera transmise au +243 814 644 847 par WhatsApp.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
