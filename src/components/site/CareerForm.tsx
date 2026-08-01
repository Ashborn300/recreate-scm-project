import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "243814644847";

const baseSchema = {
  nom: z.string().trim().min(2, "Nom requis").max(80),
  contact: z.string().trim().min(6, "Téléphone requis").max(80),
  email: z.string().trim().email("Email invalide").max(120).optional().or(z.literal("")),
  poste: z.string().min(1, "Sélectionnez une option"),
  ville: z.string().trim().min(2, "Ville requise").max(80),
  extra: z.string().trim().max(120).optional().or(z.literal("")),
  cv: z.string().trim().max(300).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Décrivez brièvement votre motivation").max(1000),
};

const schema = z.object(baseSchema);
type FormData = z.infer<typeof schema>;

const initial: FormData = {
  nom: "",
  contact: "",
  email: "",
  poste: "",
  ville: "",
  extra: "",
  cv: "",
  message: "",
};

export type CareerFormProps = {
  variant: "emploi" | "stage";
  options: string[];
};

export default function CareerForm({ variant, options }: CareerFormProps) {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const isJob = variant === "emploi";
  const posteLabel = isJob ? "Poste souhaité" : "Domaine de stage";
  const extraLabel = isJob ? "Années d'expérience" : "École / Université & niveau";

  const update = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as keyof FormData] = i.message;
      });
      setErrors(errs);
      toast.error("Veuillez corriger les champs en rouge");
      return;
    }
    setErrors({});
    const d = result.data;
    const title = isJob ? "Candidature — Offre d'emploi" : "Demande de stage";
    const message =
      `*${title} — SCM SARL*%0A%0A` +
      `*Nom :* ${encodeURIComponent(d.nom)}%0A` +
      `*Contact :* ${encodeURIComponent(d.contact)}%0A` +
      (d.email ? `*Email :* ${encodeURIComponent(d.email)}%0A` : "") +
      `*${encodeURIComponent(posteLabel)} :* ${encodeURIComponent(d.poste)}%0A` +
      `*Ville :* ${encodeURIComponent(d.ville)}%0A` +
      (d.extra ? `*${encodeURIComponent(extraLabel)} :* ${encodeURIComponent(d.extra)}%0A` : "") +
      (d.cv ? `*CV (lien) :* ${encodeURIComponent(d.cv)}%0A` : "") +
      `%0A*Motivation :*%0A${encodeURIComponent(d.message)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    toast.success("Redirection vers WhatsApp…");
    setData(initial);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="cf-nom">Nom complet *</Label>
        <Input id="cf-nom" value={data.nom} maxLength={80} onChange={(e) => update("nom", e.target.value)} />
        {errors.nom && <p className="text-xs text-destructive">{errors.nom}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cf-contact">Téléphone / WhatsApp *</Label>
        <Input id="cf-contact" placeholder="+243 …" value={data.contact} maxLength={80} onChange={(e) => update("contact", e.target.value)} />
        {errors.contact && <p className="text-xs text-destructive">{errors.contact}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cf-email">Email</Label>
        <Input id="cf-email" type="email" value={data.email} maxLength={120} onChange={(e) => update("email", e.target.value)} />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cf-poste">{posteLabel} *</Label>
        <Select value={data.poste} onValueChange={(v) => update("poste", v)}>
          <SelectTrigger id="cf-poste">
            <SelectValue placeholder="Sélectionnez…" />
          </SelectTrigger>
          <SelectContent>
            {options.map((o) => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.poste && <p className="text-xs text-destructive">{errors.poste}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cf-ville">Ville *</Label>
        <Input id="cf-ville" placeholder="Kinshasa" value={data.ville} maxLength={80} onChange={(e) => update("ville", e.target.value)} />
        {errors.ville && <p className="text-xs text-destructive">{errors.ville}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cf-extra">{extraLabel}</Label>
        <Input id="cf-extra" value={data.extra} maxLength={120} onChange={(e) => update("extra", e.target.value)} />
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="cf-cv">Lien vers votre CV (Drive, Dropbox…)</Label>
        <Input id="cf-cv" placeholder="https://…" value={data.cv} maxLength={300} onChange={(e) => update("cv", e.target.value)} />
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="cf-message">Motivation *</Label>
        <Textarea id="cf-message" rows={5} value={data.message} maxLength={1000} onChange={(e) => update("message", e.target.value)} />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full">
          Envoyer via WhatsApp
        </Button>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Votre {isJob ? "candidature" : "demande de stage"} sera transmise au +243 814 644 847 par WhatsApp.
        </p>
      </div>
    </form>
  );
}
