import { ServiceCard } from "./ServiceCard";
import { Separator } from "@/components/ui/separator";

const servicesData = [
  {
    title: "Botox",
    description: "Sanft entspannen, frisch aussehen",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bullets: [
      "Fältchen an Stirn, Zornesfalte oder Augenpartie? Botox ist eine bewährte medizinische Methode, um mimische Falten gezielt zu glätten...",
    ],
    startingPrice: "€179",
    treatments: [
      { name: "Stirnfalten", price: "€199" },
      { name: "Zornesfalten", price: "€199" },
      { name: "Krähenfüße", price: "€199" },
      { name: "Augenbrauen heben", price: "€269" },
      { name: "3 Zonen Kombi", price: "€399" },
    ],
  },
  {
    title: "Hyaluron",
    description: "Volumen & Versorgung von innen",
    bullets: [
      "Feuchtigkeitsspeicher, Faltenfüller, Strukturgeber. Hyaluronsäure ist ein natürlicher Bestandteil der Haut – mit zunehmendem Alter nimmt sie jedoch ab.",
    ],
    startingPrice: "€249",
    treatments: [
      { name: "Lippen 0,5ml", price: "ab €249" },
      { name: "Lippen 1ml", price: "ab €319" },
      { name: "Nasolabialfalten", price: "ab €299" },
      { name: "Jawline", price: "ab €389" },
      { name: "Wangen Volumen", price: "ab €399" },
    ],
  },
  {
    title: "Lipolyse",
    description: "Gezielt formen statt verstecken",
    bullets: [
      "Manche Fettdepots bleiben – trotz gesunder Ernährung. Die Lipolyse (Fett-weg-Spritze) löst störende Fettpölsterchen sanft auf...",
    ],
    startingPrice: "€169",
    treatments: [
      { name: "Doppelkinn", price: "ab €179" },
      { name: "Unteres Gesicht", price: "ab €199" },
      { name: "Oberarme", price: "ab €239" },
      { name: "Bauch kleine Zone", price: "ab €229" },
      { name: "Hüftspeck", price: "ab €249" },
    ],
  },
  {
    title: "PRP",
    description: "Regeneration mit Ihrer eigenen Kraft",
    bullets: [
      "Natürlich. Effektiv. Wissenschaftlich fundiert. PRP (Plättchenreiches Plasma) nutzt die heilenden Bestandteile Ihres eigenen Blutes...",
    ],
    startingPrice: "€199",
    treatments: [
      { name: "Kopfhaut Haarwachstum", price: "€199" },
      { name: "Gesicht Anti-Aging", price: "€219" },
      { name: "Gesicht + Dekolleté", price: "€289" },
      { name: "3er-Paket Kopfhaut", price: "€549" },
      { name: "5er-Paket Kopfhaut", price: "€879" },
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-4 bg-gradient-to-b from-white to-warm-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-gray-900 mb-4">
            Unsere Behandlungen
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Medizinische Ästhetik auf höchstem Niveau – 100% ärztlich geführt
          </p>
          <Separator className="w-24 mx-auto mt-6 bg-bordeaux-500" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Service */}
          <div className="lg:col-span-2">
            <ServiceCard
              key={servicesData[0].title}
              title={servicesData[0].title}
              description={servicesData[0].description}
              image={servicesData[0].image}
              bullets={servicesData[0].bullets}
              startingPrice={servicesData[0].startingPrice}
              treatments={servicesData[0].treatments}
              isFeatured={true}
            />
          </div>

          {/* Other Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {servicesData.slice(1).map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                startingPrice={service.startingPrice}
                treatments={service.treatments}
                isFeatured={false}
              />
            ))}
          </div>
        </div>

        {/* Simple closing text */}
        <div className="text-center mt-12">
          <p className="text-warm-gray-600">
            Klicken Sie auf "Details anzeigen" für weitere Informationen zu
            jeder Behandlung
          </p>
        </div>
      </div>
    </section>
  );
}
