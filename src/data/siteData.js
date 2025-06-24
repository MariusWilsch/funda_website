import { Instagram, Facebook, Twitter } from "lucide-react";

export const siteData = {
  contact: {
    address: {
      street: "Schönhauser Allee 123",
      city: "10435 Berlin",
    },
    phone: "+49 30 123 456 78",
    email: "info@theprettypoint.de",
  },
  openingHours: [
    { day: "Montag - Freitag", time: "9:00 - 18:00 Uhr" },
    { day: "Samstag", time: "9:00 - 14:00 Uhr" },
    { day: "Sonntag", time: "Geschlossen" },
  ],
  socials: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
  legalLinks: [
    { name: "Impressum", href: "#impressum" },
    { name: "Datenschutzerklärung", href: "#datenschutz" },
    { name: "AGB", href: "#agb" },
    { name: "Widerrufsrecht", href: "#widerruf" },
  ],
  treatmentLinks: [
      { name: "Botox", href: "#services" },
      { name: "Hyaluron", href: "#services" },
      { name: "Lipolyse", href: "#services" },
      { name: "PRP-Therapie", href: "#services" },
  ],
  practiceLinks: [
      { name: "Über uns", href: "#about" },
      { name: "Kontakt", href: "#contact" },
  ],
};
