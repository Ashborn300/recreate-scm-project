import { useState, type ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Briefcase, Upload } from "lucide-react";

const WHATSAPP_NUMBER = "243814644847";

const schema = z.object({
  nom: z.string().trim().min(2, "Nom requis").max(80),
  contact: z.string().trim().min(6, "Téléphone requis").max(80),
  email: z.string().trim().email("Email invalide").max(120).optional().or(z.literal("")),
  adresse: z.string().trim().min(2, "Adresse requise").max(160),
  poste: z.string().trim().min(2, "Poste souhaité requis").max(120),
  niveau: z.string().min(1, "Sélectionnez un niveau"),
  experience: z.string().trim().max(60).optional().or(z.literal("")),
  motivation: z.string().trim().min(20, "Quelques mots de motivation (20 caractères min)").max(800),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = {
  nom: "", contact: "", email: "", adresse: "",
  poste: "", niveau: "", experience: "", motivation: "",
};

const niveaux = [
  "Sans diplôme", "Certificat / CEP", "Diplôme d'État (D6)",
  "Graduat / Bac+3", "Licence / Bac+5", "Master / Ingénieur", "Doctorat",
];

export default function ApplyDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [cvName, setCvName] = useState<string>("");

  const update = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const handleCv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) { setCvName(""); return; }
    if (f.size > 5 * 1024 * 1024) {
      toast.error("CV trop volumineux (max 5 Mo)");
      e.target.value = "";
      return;
    }
    setCvName(f.name);
  };

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
      `*Nouvelle candidature — SCM SARL*%0A%0A` +
      `*Nom :* ${encodeURIComponent(d.nom)}%0A` +
      `*Contact :* ${encodeURIComponent(d.contact)}%0A` +
      (d.email ? `*Email :* ${encodeURIComponent(d.email)}%0A` : "") +
      `*Adresse :* ${encodeURIComponent(d.adresse)}%0A` +
      `*Poste souhaité :* ${encodeURIComponent(d.poste)}%0A` +
      `*Niveau d'étude :* ${encodeURIComponent(d.niveau)}%0A` +
      (d.experience ? `*Expérience :* ${encodeURIComponent(d.experience)}%0A` : "") +
      `%0A*Motivation :*%0A${encodeURIComponent(d.motivation)}%0A%0A` +
      (cvName
        ? `📎 *CV à joindre :* ${encodeURIComponent(cvName)} — merci d'attacher le fichier dans cette conversation WhatsApp.`
        : `📎 Merci de joindre votre CV dans cette conversation WhatsApp.`);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    toast.success("Redirection vers WhatsApp — joignez votre CV dans la conversation.");
    setOpen(false);
    setData(initial);
    setCvName("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="font-display text-2xl">Postuler chez SCM SARL</DialogTitle>
              <DialogDescription>Rejoignez notre équipe — réponse rapide via WhatsApp.</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="a-nom">Nom complet *</Label>
              <Input id="a-nom" value={data.nom} onChange={(e) => update("nom", e.target.value)} maxLength={80} />
              {errors.nom && <p className="text-xs text-destructive mt-1">{errors.nom}</p>}
            </div>
            <div>
              <Label htmlFor="a-contact">Téléphone *</Label>
              <Input id="a-contact" placeholder="+243 …" value={data.contact} onChange={(e) => update("contact", e.target.value)} maxLength={80} />
              {errors.contact && <p className="text-xs text-destructive mt-1">{errors.contact}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="a-email">Email (facultatif)</Label>
              <Input id="a-email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} maxLength={120} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="a-adresse">Adresse *</Label>
              <Input id="a-adresse" placeholder="Commune, ville" value={data.adresse} onChange={(e) => update("adresse", e.target.value)} maxLength={160} />
              {errors.adresse && <p className="text-xs text-destructive mt-1">{errors.adresse}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="a-poste">Poste souhaité *</Label>
              <Input id="a-poste" placeholder="Ex: Ingénieur civil" value={data.poste} onChange={(e) => update("poste", e.target.value)} maxLength={120} />
              {errors.poste && <p className="text-xs text-destructive mt-1">{errors.poste}</p>}
            </div>
            <div>
              <Label htmlFor="a-niveau">Niveau d'étude *</Label>
              <Select value={data.niveau} onValueChange={(v) => update("niveau", v)}>
                <SelectTrigger id="a-niveau"><SelectValue placeholder="Sélectionner…" /></SelectTrigger>
                <SelectContent>
                  {niveaux.map((n) => <SelectItem key={n} value={n}>{n}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.niveau && <p className="text-xs text-destructive mt-1">{errors.niveau}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="a-exp">Années d'expérience</Label>
            <Input id="a-exp" placeholder="Ex: 3 ans" value={data.experience} onChange={(e) => update("experience", e.target.value)} maxLength={60} />
          </div>

          <div>
            <Label htmlFor="a-cv">CV (PDF / Word — max 5 Mo)</Label>
            <label htmlFor="a-cv" className="mt-1 flex items-center gap-3 cursor-pointer rounded-md border border-dashed border-input bg-secondary/40 hover:bg-secondary px-4 py-3 transition-smooth">
              <Upload className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground truncate">
                {cvName || "Cliquez pour importer votre CV"}
              </span>
            </label>
            <input id="a-cv" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleCv} />
            <p className="text-[11px] text-muted-foreground mt-1">
              WhatsApp ouvrira la conversation : vous pourrez ensuite y attacher le CV directement.
            </p>
          </div>

          <div>
            <Label htmlFor="a-motiv">Phrase de motivation *</Label>
            <Textarea id="a-motiv" rows={4} value={data.motivation} onChange={(e) => update("motivation", e.target.value)} maxLength={800} placeholder="Parlez-nous brièvement de vous et de vos motivations…" />
            {errors.motivation && <p className="text-xs text-destructive mt-1">{errors.motivation}</p>}
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Envoyer ma candidature
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Votre candidature sera transmise au +243 814 644 847 par WhatsApp.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
