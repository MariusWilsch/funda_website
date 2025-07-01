// Contact & Consultation Section Data for The Pretty Point Medical Practice
// Complete copywriting content for the Kontakt & Beratung section

import { contactInfo } from "./contactInfo";

export const contactData = {
  // Main section heading
  heading: "Kontakt & Beratung",

  // Left column - Marketing content
  leftColumn: {
    welcome: {
      title: "Willkommen bei The PrettyPoint",
      subtitle: "wo moderne Ästhetik auf medizinische Exzellenz trifft.",
    },

    valueProposition: {
      intro:
        "Du wünschst dir Ergebnisse, die nicht gemacht, sondern einfach gut aussehen?",
      philosophy: "Bei The PrettyPoint erwarten dich keine Standards, sondern",
      highlighted:
        "maßgeschneiderte Behandlungen, die dich in deinem natürlichen Glow bestärken",
      quote: "„Weil echte Schönheit keine Schablone braucht.",
    },

    approach: {
      description:
        "Wir hören zu, schauen genau hin – und arbeiten mit einem geschulten Auge, ruhiger Hand und fundierter medizinischer Expertise.",
      tagline: "Minimaler Eingriff. Maximale Wirkung.",
    },

    services: {
      description:
        "Ob Babybotox, sanfte Hyaluron-Akzente oder exklusive Signature-Behandlungen – bei uns trifft höchste Qualität auf Ästhetik mit Feingefühl.",
    },

    qualityPromise: {
      medical: "100% ärztlich geführt.",
      trust: "100% Vertrauenssache.",
    },

    treatmentPhilosophy: {
      description:
        "Du wirst ausschließlich von einer erfahrenen Ärztin behandelt – mit Präzision, Transparenz und einem Ziel:",
      goal: "Deine natürliche Ausstrahlung zu betonen – nicht zu verändern.",
    },

    callToAction: {
      title: "Bereit für Ihren PrettyPoint-Moment?",
      subtitle:
        "Jetzt Termin sichern – und erleben, wie sich medizinische Ästhetik richtig gut anfühlen kann.",
    },
  },

  // Right column - Contact sidebar
  rightColumn: {
    quickContact: {
      title: "Sofort kontaktieren",
      subtitle: "Schnell, einfach, persönlich",
      benefits: [
        "Antwort am selben Tag garantiert",
        "Persönliche Beratung",
        "Direkte Terminbuchung",
        "Diskret und vertraulich",
      ],
      whatsappButton: {
        text: "WhatsApp Chat starten",
        phoneNumber: `+${contactInfo.phone.whatsapp}`,
      },
    },

    doctorInfo: {
      name: contactInfo.doctor.name,
      title: contactInfo.doctor.title,
      contact: {
        address: contactInfo.address.full,
        phone: contactInfo.phone.display,
        email: contactInfo.email,
        instagram: contactInfo.instagram,
      },
    },

    openingHours: {
      title: "Öffnungszeiten",
      schedule: {
        weekdays: contactInfo.openingHours.weekdays,
        weekend: contactInfo.openingHours.weekend,
      },
      appointmentNote: contactInfo.openingHours.appointmentNote,
    },
  },
};
