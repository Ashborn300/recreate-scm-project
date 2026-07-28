import { Building2, Droplets, Wrench, Construction, Sprout, Megaphone, type LucideIcon } from "lucide-react";
import btp from "@/assets/service-btp.webp";
import forage from "@/assets/service-forage.webp";
import plomberie from "@/assets/service-plomberie.webp";
import ponts from "@/assets/service-ponts.webp";
import irrigation from "@/assets/service-irrigation.webp";
import panneaux from "@/assets/service-panneaux.jpg";
import detailBtp from "@/assets/service-detail-btp.jpg";
import detailForage from "@/assets/service-detail-forage.jpg";
import detailPlomberie from "@/assets/service-detail-plomberie.jpg";
import detailPonts from "@/assets/service-detail-ponts.jpg";
import detailIrrigation from "@/assets/service-detail-irrigation.jpg";
import detailPanneaux from "@/assets/service-detail-panneaux.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  image: string;
  hero: string;
  title: string;
  shortTitle: string;
  desc: string;
  intro: string;
  domaines: string[];
  engagements: string[];
  pourquoi: string[];
  secteurs: string[];
};

export const services: Service[] = [
  {
    slug: "batiments-travaux-publics",
    icon: Building2,
    image: btp,
    hero: detailBtp,
    title: "Bâtiments & Travaux Publics",
    shortTitle: "BTP",
    desc: "Construction d'immeubles, villas, infrastructures et grands ouvrages selon les standards modernes.",
    intro:
      "SCM SARL conçoit et réalise des bâtiments durables et des infrastructures publiques répondant aux normes internationales. De la villa résidentielle aux complexes commerciaux, nous mobilisons une équipe d'ingénieurs et d'ouvriers qualifiés à Kinshasa et dans toute la RDC.",
    domaines: [
      "Construction de villas, immeubles résidentiels et commerciaux",
      "Bâtiments administratifs, écoles et centres de santé",
      "Travaux publics : voiries, dallages, parkings",
      "Études techniques, suivi de chantier et maîtrise d'œuvre",
      "Gros œuvre, second œuvre et finitions premium",
    ],
    engagements: [
      "Respect strict des délais contractuels",
      "Matériaux certifiés et fournisseurs locaux fiables",
      "Sécurité des chantiers selon normes internationales",
      "Transparence financière à chaque étape du projet",
    ],
    pourquoi: [
      "Plus de 10 ans d'expérience cumulée en RDC",
      "Équipes 100% locales formées aux meilleures pratiques",
      "Garantie décennale sur les ouvrages",
      "Accompagnement de A à Z, de l'étude à la livraison",
    ],
    secteurs: ["Résidentiel", "Commercial", "Administratif", "Éducation", "Santé"],
  },
  {
    slug: "forage-eau",
    icon: Droplets,
    image: forage,
    hero: detailForage,
    title: "Forage d'eau",
    shortTitle: "Forage",
    desc: "Études hydrogéologiques, forage et installation de pompes pour un accès durable à l'eau.",
    intro:
      "L'accès à l'eau potable est un enjeu majeur en RDC. SCM SARL réalise des forages performants et durables pour particuliers, entreprises, ONG et collectivités, avec étude hydrogéologique préalable et installation complète.",
    domaines: [
      "Études hydrogéologiques et géophysiques",
      "Forage manuel et mécanisé jusqu'à grande profondeur",
      "Installation de pompes immergées, solaires ou manuelles",
      "Construction de châteaux d'eau et réservoirs",
      "Analyse de la qualité de l'eau et traitement",
    ],
    engagements: [
      "Garantie de débit selon contrat",
      "Équipements robustes adaptés au climat tropical",
      "Maintenance et SAV réactif",
      "Solutions écologiques (énergie solaire)",
    ],
    pourquoi: [
      "Expertise reconnue dans plusieurs provinces de la RDC",
      "Équipement de forage moderne et autonome",
      "Tarifs transparents, devis détaillé",
      "Formation des bénéficiaires à l'entretien",
    ],
    secteurs: ["Ménages", "Écoles", "Hôpitaux", "ONG", "Industries", "Communautés rurales"],
  },
  {
    slug: "plomberie-rehabilitation",
    icon: Wrench,
    image: plomberie,
    hero: detailPlomberie,
    title: "Plomberie & Réhabilitation",
    shortTitle: "Plomberie",
    desc: "Installations sanitaires, rénovation et réhabilitation de bâtiments existants.",
    intro:
      "Notre équipe de plombiers et techniciens qualifiés intervient pour toute installation neuve, rénovation ou réhabilitation de bâtiments à Kinshasa et environs. Travail soigné, matériaux de qualité, garantie incluse.",
    domaines: [
      "Installation sanitaire complète (eau froide/chaude, évacuations)",
      "Rénovation de salles de bain et cuisines",
      "Réhabilitation de bâtiments anciens",
      "Réseaux d'évacuation et fosses septiques",
      "Détection et réparation de fuites",
    ],
    engagements: [
      "Intervention rapide à Kinshasa",
      "Garantie sur la main-d'œuvre et les pièces",
      "Propreté et respect des espaces de vie",
      "Conseil personnalisé pour optimiser les coûts",
    ],
    pourquoi: [
      "Techniciens expérimentés et certifiés",
      "Gamme complète : du dépannage à la rénovation totale",
      "Prix compétitifs et devis gratuit",
      "Disponibilité 6j/7",
    ],
    secteurs: ["Résidences privées", "Hôtels", "Restaurants", "Bureaux", "Commerces"],
  },
  {
    slug: "ponts-chaussees",
    icon: Construction,
    image: ponts,
    hero: detailPonts,
    title: "Ponts & Chaussées",
    shortTitle: "Ponts",
    desc: "Conception et construction de ponts, routes et ouvrages de génie civil.",
    intro:
      "SCM SARL accompagne les collectivités, entreprises minières et opérateurs publics dans la construction de routes, ponts et ouvrages d'art adaptés aux contraintes du terrain congolais.",
    domaines: [
      "Construction de ponts en béton armé et métalliques",
      "Réalisation de routes et chaussées (terre, latérite, asphalte)",
      "Ouvrages d'art : dalots, buses, murs de soutènement",
      "Aménagement urbain et désenclavement rural",
      "Études topographiques et géotechniques",
    ],
    engagements: [
      "Respect des cahiers des charges techniques",
      "Solutions durables résistantes aux intempéries",
      "Coordination avec autorités locales",
      "Sécurité maximale sur les chantiers",
    ],
    pourquoi: [
      "Expérience sur des chantiers complexes en province",
      "Parc d'engins lourds et équipement complet",
      "Ingénieurs civils diplômés et expérimentés",
      "Capacité à mobiliser rapidement sur sites isolés",
    ],
    secteurs: ["Collectivités publiques", "Mines", "Agro-industrie", "ONG", "Coopération internationale"],
  },
  {
    slug: "irrigation-stations",
    icon: Sprout,
    image: irrigation,
    hero: detailIrrigation,
    title: "Irrigation & Stations de pompage",
    shortTitle: "Irrigation",
    desc: "Systèmes d'irrigation agricole, stations de pompage et adduction d'eau.",
    intro:
      "Pour soutenir l'agriculture moderne en RDC, SCM SARL conçoit et installe des systèmes d'irrigation efficients ainsi que des stations de pompage et d'adduction d'eau adaptées aux exploitations de toutes tailles.",
    domaines: [
      "Irrigation goutte-à-goutte, aspersion et gravitaire",
      "Stations de pompage solaires et thermiques",
      "Adduction d'eau pour villages et fermes",
      "Réseaux de distribution et bassins de stockage",
      "Maintenance et optimisation des systèmes existants",
    ],
    engagements: [
      "Solutions adaptées à chaque culture et terrain",
      "Économie d'eau et d'énergie",
      "Formation des exploitants à l'utilisation",
      "Service après-vente et pièces détachées disponibles",
    ],
    pourquoi: [
      "Approche agronomique et technique combinée",
      "Partenariats avec fournisseurs internationaux reconnus",
      "Solutions clé en main, du diagnostic à la mise en service",
      "Contribution à la souveraineté alimentaire de la RDC",
    ],
    secteurs: ["Agriculture", "Élevage", "Maraîchage", "Coopératives rurales", "Agro-business"],
  },
  {
    slug: "panneaux-publicitaires",
    icon: Megaphone,
    image: panneaux,
    hero: detailPanneaux,
    title: "Panneaux publicitaires",
    shortTitle: "Panneaux",
    desc: "Conception, fabrication et installation de panneaux publicitaires grand format.",
    intro:
      "Donnez de la visibilité à votre marque dans les rues de Kinshasa et de toute la RDC. SCM SARL conçoit, fabrique et installe des panneaux publicitaires robustes, visibles et conformes aux réglementations.",
    domaines: [
      "Panneaux 4x3, 8x4, panneaux géants et trivisions",
      "Enseignes lumineuses et lettrages 3D",
      "Habillage de bâtiments et façades publicitaires",
      "Bâches grand format et impression numérique",
      "Maintenance et rénovation des supports existants",
    ],
    engagements: [
      "Structures métalliques résistantes aux vents et pluies",
      "Visuels haute définition longue durée",
      "Respect des autorisations administratives",
      "Installation rapide et sécurisée",
    ],
    pourquoi: [
      "Emplacements stratégiques disponibles à Kinshasa",
      "Atelier de fabrication intégré",
      "Équipe créative pour la conception graphique",
      "Tarifs flexibles selon durée et format",
    ],
    secteurs: ["Marques nationales", "Télécoms", "Banques", "ONG", "Événementiel", "Politique"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
