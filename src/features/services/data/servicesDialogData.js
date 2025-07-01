/**
 * @typedef {Object} ServiceDialogData
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {Object} treatmentInfo
 * @property {string} treatmentInfo.duration
 * @property {string} treatmentInfo.onset
 * @property {string} treatmentInfo.longevity
 * @property {string} treatmentInfo.downtime
 * @property {Array<PricingGroup>} pricingGroups
 * @property {string[]} disclaimers
 * @property {string} ctaButtonText
 */

/**
 * @typedef {Object} PricingGroup
 * @property {string} [groupTitle]
 * @property {Array<PricingItem>} items
 */

/**
 * @typedef {Object} PricingItem
 * @property {string} name
 * @property {string} [basePrice]
 * @property {Array<PriceOption>} [priceOptions]
 * @property {string} [note]
 */

/**
 * @typedef {Object} PriceOption
 * @property {string} label
 * @property {string} price
 */

export const servicesDialogData = {
  botox: {
    id: "botox",
    title: "Botox",
    subtitle: "sanft entspannen, frisch aussehen",
    description:
      "Fältchen an Stirn, Zornesfalte oder Augenpartie? Botox ist eine bewährte medizinische Methode, um mimische Falten gezielt zu glätten – ohne OP, ohne Ausfallzeit. Der Wirkstoff (Botulinumtoxin A) reduziert die Muskelaktivität, die für die Faltenbildung verantwortlich ist – das Ergebnis: ein entspannter, frischer Gesichtsausdruck.\n\nBotulinumtoxin A glättet nicht nur mimische Falten – es kann auch medizinisch sinnvoll eingesetzt werden: bei Migräne, Zähneknirschen (Bruxismus), Hyperhidrose oder Spannungskopfschmerzen.\n\nBuchen Sie jetzt Ihre Botox-Behandlung – funktional & ästhetisch.",
    treatmentInfo: {
      duration: "ca. 20-30 Minuten",
      onset: "ab Tag 4-5, voller Effekt nach 10-14 Tagen",
      longevity: "in der Regel 3-5 Monate",
      downtime: "keine – du kannst direkt zurück in deinen Alltag",
    },
    pricingGroups: [
      {
        groupTitle: "Gesichtsbehandlungen",
        items: [
          { name: "Stirnfalten (glätten)", basePrice: "ab 199 €" },
          { name: "Zornesfalten (Glabella)", basePrice: "ab 199 €" },
          { name: "Krähenfüße (seitliche Augenfalten)", basePrice: "ab 199 €" },
          { name: "Nasenfalten / Bunny Lines", basePrice: "ab 179 €" },
          { name: "Heben der Augenbrauen (Brow Lift)", basePrice: "ab 269 €" },
          { name: "Lippenfältchen (Perioral)", basePrice: "ab 219 €" },
          { name: "Lip Flip (Lippenhebung)", basePrice: "ab 179 €" },
        ],
      },
      {
        groupTitle: "Hals & Kiefer",
        items: [
          { name: "Halsfalten (Platysma)", basePrice: "ab 299 €" },
          { name: "Kiefer (Masseter) Entspannung", basePrice: "ab 329 €" },
          { name: "Nefertiti Lift (Hals & Kinnkontur)", basePrice: "ab 299 €" },
        ],
      },
      {
        groupTitle: "Medizinische Anwendungen",
        items: [
          { name: "Bruxismus (Zähneknirschen)", basePrice: "ab 379 €" },
          { name: "Hyperhidrose Achseln", basePrice: "ab 399 €" },
          { name: "Hyperhidrose Hände", basePrice: "ab 429 €" },
        ],
      },
      {
        groupTitle: "Kombi-Pakete",
        items: [
          {
            name: "3 Zonen Botox (Stirn, Glabella, Krähenfüße)",
            basePrice: "ab 399 €",
          },
          { name: "2 Zonen Botox", basePrice: "ab 289 €" },
        ],
      },
    ],
    disclaimers: [
      "Die Kosten für die Beratung betragen 20 Euro.",
      "Ergebnisse können individuell variieren – eine Erfolgsgarantie ist nicht möglich.",
    ],
    ctaButtonText: "Jetzt Termin buchen",
  },

  hyaluron: {
    id: "hyaluron",
    title: "Hyaluron",
    subtitle: "Volumen & Versorgung von innen",
    description:
      "Feuchtigkeitsspeicher, Faltenfüller, Strukturgeber. Hyaluronsäure ist ein natürlicher Bestandteil der Haut – mit zunehmendem Alter nimmt sie jedoch ab. Gezielt injiziert (z.B. Lippen, Jawline etc.) sorgt sie für jugendliches Volumen, frische Konturen und ein ebenmäßiges Hautbild.\n\nNatürlich aufgepolstert. Sichtbar vitalisiert.",
    treatmentInfo: {
      duration: "20–45 Min inkl. Aufbereitung",
      onset: "sofort sichtbar, feinere Wirkung nach 1–2 Tagen",
      longevity: "6–18 Monate (je nach Areal)",
      downtime: "keine – kleine blaue Flecken möglich",
    },
    pricingGroups: [
      {
        items: [
          {
            name: "Lippen",
            priceOptions: [
              { label: "0,5 ml", price: "ab 249 €" },
              { label: "1 ml (Modellierung)", price: "ab 319 €" },
            ],
          },
          { name: "Nasolabialfalten", basePrice: "ab 299 €" },
          { name: "Marionettenfalten", basePrice: "ab 289 €" },
          { name: "Jawline / Kinnlinie", basePrice: "ab 389 €" },
          { name: "Kinnaufbau", basePrice: "ab 349 €" },
          { name: "Wangen / Midface Volumen", basePrice: "ab 399 €" },
          { name: "Tränenrinne (Tear Trough)", basePrice: "ab 359 €" },
          { name: "Nasenkorrektur (ohne OP)", basePrice: "ab 429 €" },
        ],
      },
    ],
    disclaimers: [
      "Die Kosten für die Beratung betragen 20 Euro.",
      "Preise gelten ab dem angegebenen Betrag.",
    ],
    ctaButtonText: "Jetzt Termin buchen",
  },

  lipolyse: {
    id: "lipolyse",
    title: "Lipolyse",
    subtitle: "gezielt formen statt verstecken",
    description:
      "Manche Fettdepots bleiben – trotz gesunder Ernährung. Die Lipolyse (Fett-weg-Spritze) löst störende Fettpölsterchen sanft auf – ganz ohne OP. Besonders geeignet für Doppelkinn, Oberarme oder Bauch.\n\nAuch bei Lipomen oder lokalen Fettansammlungen aus medizinischer Sicht wirksam. Für klare Konturen und ein besseres Körpergefühl.",
    treatmentInfo: {
      duration: "ca. 20–40 Min",
      onset: "ab Woche 1, sichtbar nach ca. 4–6 Wochen",
      longevity: "dauerhaft (Fettzellen werden abgebaut)",
      downtime: "leichte Schwellung möglich, Alltag meist sofort möglich",
    },
    pricingGroups: [
      {
        groupTitle: "Gesicht & Hals",
        items: [
          { name: "Doppelkinn", basePrice: "ab 179 €", note: "pro Sitzung" },
          {
            name: "Unteres Gesicht (Jawline, Hamsterbäckchen)",
            basePrice: "ab 199 €",
            note: "pro Sitzung",
          },
          {
            name: "Wangen / seitliches Gesichtsfett",
            basePrice: "ab 199 €",
            note: "pro Sitzung",
          },
        ],
      },
      {
        groupTitle: "Oberkörper",
        items: [
          {
            name: "Oberarme (Winkearme)",
            basePrice: "ab 239 €",
            note: "pro Sitzung",
          },
          { name: "Achselfalten", basePrice: "ab 189 €", note: "pro Sitzung" },
          {
            name: "Bauch (kleine Zone)",
            basePrice: "ab 229 €",
            note: "pro Sitzung",
          },
          {
            name: "Bauch (größere Zone)",
            basePrice: "ab 299 €",
            note: "pro Sitzung",
          },
          {
            name: "Hüftspeck / Love Handles",
            basePrice: "ab 249 €",
            note: "pro Sitzung",
          },
          {
            name: "Rücken / BH-Röllchen",
            basePrice: "ab 229 €",
            note: "pro Sitzung",
          },
        ],
      },
      {
        groupTitle: "Beine",
        items: [
          {
            name: "Reiterhosen (Oberschenkel außen)",
            basePrice: "ab 259 €",
            note: "pro Sitzung",
          },
          {
            name: "Oberschenkel innen",
            basePrice: "ab 249 €",
            note: "pro Sitzung",
          },
          {
            name: "Knieinnenseiten",
            basePrice: "ab 169 €",
            note: "pro Sitzung",
          },
        ],
      },
    ],
    disclaimers: [
      "Paketpreise für mehrere Sitzungen auf Anfrage.",
      "Preise gelten pro Sitzung inkl. Beratung, Material und Nachsorge.",
      "Die Anzahl der Sitzungen richtet sich nach Ausgangsbefund und Behandlungsziel.",
      "Für ein optimales Ergebnis sind meist 2–4 Sitzungen im Abstand von 4–6 Wochen nötig.",
      "Die Kosten für die Beratung betragen 20 Euro.",
    ],
    ctaButtonText: "Jetzt Beratungstermin sichern",
  },

  prp: {
    id: "prp",
    title: "PRP",
    subtitle: "Regeneration mit Ihrer eigenen Kraft",
    description:
      "Natürlich. Effektiv. Wissenschaftlich fundiert. PRP (Plättchenreiches Plasma) nutzt die heilenden Bestandteile Ihres eigenen Blutes, um Zellen zu regenerieren, Kollagen zu stimulieren und Entzündungen zu lindern.\n\nOb bei Haarausfall, nach Haartransplantationen, Hautalterung oder Akne-Narben – PRP wirkt tief in der Struktur, nicht nur an der Oberfläche. Auch in der Orthopädie und Schmerztherapie wird PRP seit Jahren erfolgreich eingesetzt. Medizinisch etabliert, 100 % körpereigen.\n\nFür eine echte Hautverjüngung mit medizinischem Mehrwert.",
    treatmentInfo: {
      duration: "ca. 45 Min inkl. Aufbereitung",
      onset: "ab Woche 2, Aufbau über 4–6 Wochen",
      longevity: "6–12 Monate (nach 3–4 Sitzungen)",
      downtime: "keine, evtl. Rötung/Schwellung",
    },
    pricingGroups: [
      {
        items: [
          {
            name: "Kopfhaut (Haarwachstum)",
            basePrice: "ab 199 €",
            note: "Einstiegspreis – Vertrauen aufbauen",
          },
          {
            name: "Kopfhaut 3er-Paket",
            basePrice: "ab 549 €",
            note: "Paketpreis – ca. 8% Ersparnis",
          },
          {
            name: "Kopfhaut 5er-Paket",
            basePrice: "ab 879 €",
            note: "Paketpreis – ca. 12% Ersparnis",
          },
          {
            name: "Gesicht (Anti-Aging & Hautbild)",
            basePrice: "ab 219 €",
            note: "Effektiv, fair und hochwertig",
          },
          {
            name: "Gesicht + Dekolleté",
            basePrice: "ab 289 €",
            note: "Kombi-Paket, Mehr spürbar",
          },
        ],
      },
    ],
    disclaimers: [
      "Für optimale Ergebnisse meist 3–4 Behandlungen im Abstand von 4 Wochen empfohlen.",
      "Die Kosten für die Beratung betragen 20 Euro.",
    ],
    ctaButtonText: "Jetzt Termin sichern",
  },

  privatarztlich: {
    id: "privatarztlich",
    title: "Privatärztliche Leistungen",
    subtitle: "Hausärztliche Versorgung nach GOÄ",
    description:
      "Neben unseren ästhetischen Behandlungen bieten wir Ihnen in unserer Privatpraxis auch ausgewählte privatärztliche Leistungen an. Diese werden gemäß der Gebührenordnung für Ärzte (GOÄ) abgerechnet.\n\nWir sind eine vollständig bei der Ärztekammer registrierte Privatpraxis und bieten Ihnen alle hausärztlichen Leistungen sowie Wundversorgung an.\n\nBitte beachten Sie: Die Erstattung durch private Krankenkassen oder Beihilfestellen kann variieren – wir beraten Sie gern individuell vorab.",
    treatmentInfo: {
      duration: "PLACEHOLDER - Je nach Behandlung",
      onset: "PLACEHOLDER - Sofort verfügbar",
      longevity: "PLACEHOLDER - Nach Bedarf",
      downtime: "PLACEHOLDER - Keine",
    },
    pricingGroups: [
      {
        groupTitle: "Hausärztliche Leistungen",
        items: [
          {
            name: "PLACEHOLDER - Allgemeine Untersuchung",
            basePrice: "Nach GOÄ",
          },
          { name: "PLACEHOLDER - Wundversorgung", basePrice: "Nach GOÄ" },
          { name: "PLACEHOLDER - Beratungsgespräch", basePrice: "Nach GOÄ" },
          { name: "PLACEHOLDER - Weitere Leistungen", basePrice: "Nach GOÄ" },
        ],
      },
    ],
    disclaimers: [
      "Alle Leistungen werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet.",
      "Die Erstattung durch private Krankenkassen kann variieren.",
      "Gerne beraten wir Sie vorab über die Kosten.",
      "PLACEHOLDER - Weitere Hinweise zur GOÄ-Abrechnung",
    ],
    ctaButtonText: "Jetzt Beratung vereinbaren",
  },
};

// Export individual services for easier access
export const { botox, hyaluron, lipolyse, prp, privatarztlich } =
  servicesDialogData;
