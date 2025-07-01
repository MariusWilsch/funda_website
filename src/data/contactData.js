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

    section2: {
      headline: "Individuelle Beratung für natürliche Ergebnisse",
      body: "Bei The PrettyPoint erwarten dich keine Standards, sondern maßgeschneiderte Behandlungen, die dich in deinem natürlichen Glow bestärken. Wir hören zu, schauen genau hin – und arbeiten mit einem geschulten Auge, ruhiger Hand und fundierter medizinischer Expertise.",
    },

    section3: {
      headline: "Minimaler Eingriff. Maximale Wirkung.",
      body: "Ob Babybotox, sanfte Hyaluron-Akzente oder exklusive Signature-Behandlungen – bei uns trifft höchste Qualität auf Ästhetik mit Feingefühl.",
    },

    section4: {
      headline: "100% ärztlich geführt. 100% Vertrauenssache.",
      body: "Du wirst ausschließlich von einer erfahrenen Ärztin behandelt – mit Präzision, Transparenz und einem Ziel: Deine natürliche Ausstrahlung zu betonen – nicht zu verändern.",
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
