import { FaInstagram } from "react-icons/fa";
import { contactInfo } from "./contactInfo";

export const siteData = {
  contact: {
    address: {
      street: contactInfo.address.street,
      city: `${contactInfo.address.postalCode} ${contactInfo.address.city}`,
    },
    phone: contactInfo.phone.display,
    email: contactInfo.email,
  },
  openingHours: [
    { day: "Montag - Freitag", time: "9:00 - 18:00 Uhr" },
    { day: "Samstag - Sonntag", time: "Geschlossen" },
  ],
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/the_prettypoint_berlin",
      icon: FaInstagram,
    },
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
