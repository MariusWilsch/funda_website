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
      onset: "ab Tag 3, voller Effekt nach 10-14 Tagen",
      longevity: "in der Regel 3-5 Monate",
      downtime: "keine – du kannst direkt zurück in deinen Alltag",
    },
    pricingGroups: [
      {
        groupTitle: "Gesichtsbehandlungen",
        items: [
          { name: "Stirnfalten (glätten)", basePrice: "199 €" },
          { name: "Zornesfalten (Glabella)", basePrice: "199 €" },
          { name: "Krähenfüße (seitliche Augenfalten)", basePrice: "199 €" },
          { name: "Nasenfalten / Bunny Lines", basePrice: "179 €" },
          { name: "Heben der Augenbrauen (Brow Lift)", basePrice: "269 €" },
          { name: "Lippenfältchen (Perioral)", basePrice: "219 €" },
          { name: "Lip Flip (Lippenhebung)", basePrice: "179 €" },
        ],
      },
      {
        groupTitle: "Hals & Kiefer",
        items: [
          { name: "Halsfalten (Platysma)", basePrice: "299 €" },
          { name: "Kiefer (Masseter) Entspannung", basePrice: "329 €" },
          { name: "Nefertiti Lift (Hals & Kinnkontur)", basePrice: "299 €" },
        ],
      },
      {
        groupTitle: "Medizinische Anwendungen",
        items: [
          { name: "Bruxismus (Zähneknirschen)", basePrice: "379 €" },
          { name: "Hyperhidrose Achseln", basePrice: "399 €" },
          { name: "Hyperhidrose Hände", basePrice: "429 €" },
        ],
      },
      {
        groupTitle: "Kombi-Pakete",
        items: [
          {
            name: "3 Zonen Botox (Stirn, Glabella, Krähenfüße)",
            basePrice: "399 €",
          },
          { name: "2 Zonen Botox", basePrice: "289 €" },
        ],
      },
    ],
    disclaimers: [
      "Die Kosten für die Beratung betragen 20 Euro.",
      "Ergebnisse können individuell variieren – eine Erfolgsgarantie ist nicht möglich.",
    ],
    ctaButtonText: "Jetzt Termin buchen",
    calLink: "mariuswilsch/coffee-break",
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
              { label: "0,5 ml", price: "249 €" },
              { label: "1 ml (Modellierung)", price: "319 €" },
            ],
          },
          { name: "Nasolabialfalten", basePrice: "299 €" },
          { name: "Marionettenfalten", basePrice: "289 €" },
          { name: "Jawline / Kinnlinie", basePrice: "389 €" },
          { name: "Kinnaufbau", basePrice: "349 €" },
          { name: "Wangen / Midface Volumen", basePrice: "399 €" },
          { name: "Tränenrinne (Tear Trough)", basePrice: "359 €" },
          { name: "Nasenkorrektur (ohne OP)", basePrice: "429 €" },
        ],
      },
    ],
    disclaimers: [
      "Die Kosten für die Beratung betragen 20 Euro.",
      "Preise gelten ab dem angegebenen Betrag.",
    ],
    ctaButtonText: "Jetzt Termin buchen",
    calLink: "mariuswilsch/coffee-break",
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
          { name: "Doppelkinn", basePrice: "179 €", note: "pro Sitzung" },
          {
            name: "Unteres Gesicht (Jawline, Hamsterbäckchen)",
            basePrice: "199 €",
            note: "pro Sitzung",
          },
          {
            name: "Wangen / seitliches Gesichtsfett",
            basePrice: "199 €",
            note: "pro Sitzung",
          },
        ],
      },
      {
        groupTitle: "Oberkörper",
        items: [
          {
            name: "Oberarme (Winkearme)",
            basePrice: "239 €",
            note: "pro Sitzung",
          },
          { name: "Achselfalten", basePrice: "189 €", note: "pro Sitzung" },
          {
            name: "Bauch (kleine Zone)",
            basePrice: "229 €",
            note: "pro Sitzung",
          },
          {
            name: "Bauch (größere Zone)",
            basePrice: "299 €",
            note: "pro Sitzung",
          },
          {
            name: "Hüftspeck / Love Handles",
            basePrice: "249 €",
            note: "pro Sitzung",
          },
          {
            name: "Rücken / BH-Röllchen",
            basePrice: "229 €",
            note: "pro Sitzung",
          },
        ],
      },
      {
        groupTitle: "Beine",
        items: [
          {
            name: "Reiterhosen (Oberschenkel außen)",
            basePrice: "259 €",
            note: "pro Sitzung",
          },
          {
            name: "Oberschenkel innen",
            basePrice: "249 €",
            note: "pro Sitzung",
          },
          { name: "Knieinnenseiten", basePrice: "169 €", note: "pro Sitzung" },
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
    calLink: "mariuswilsch/coffee-break",
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
            basePrice: "199 €",
            note: "Einstiegspreis – Vertrauen aufbauen",
          },
          {
            name: "Kopfhaut 3er-Paket",
            basePrice: "549 €",
            note: "Paketpreis – ca. 8% Ersparnis",
          },
          {
            name: "Kopfhaut 5er-Paket",
            basePrice: "879 €",
            note: "Paketpreis – ca. 12% Ersparnis",
          },
          {
            name: "Gesicht (Anti-Aging & Hautbild)",
            basePrice: "219 €",
            note: "Effektiv, fair und hochwertig",
          },
          {
            name: "Gesicht + Dekolleté",
            basePrice: "289 €",
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
    calLink: "mariuswilsch/coffee-break",
  },
};

// Export individual services for easier access
export const { botox, hyaluron, lipolyse, prp } = servicesDialogData;
