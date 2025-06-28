import { serviceCardData } from "@/features/services/data/serviceCardData";

export const navigationData = [
  {
    label: "Behandlungen",
    href: "#services",
    subItems: serviceCardData.map(service => ({
      label: service.title,
      serviceType: service.serviceType,
    })),
  },
  { label: "Fragen & Antworten", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];
