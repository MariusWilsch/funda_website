import { faqData } from "@/data/faqData";
import { siteData } from "@/data/siteData";
import { FAQCategory } from "./FAQCategory";
import { Separator } from "@/components/ui/separator";
import { WhatsAppContactButton } from "./WhatsAppContactButton";
import { HelpCircle, Stethoscope, Users, Shield } from "lucide-react";

export function FAQSection() {
  const categories = Object.values(faqData);
  const { contact } = siteData;

  const trustIndicators = [
    {
      icon: Stethoscope,
      title: "100% ärztlich geführt",
      text: "Alle Behandlungen werden ausschließlich von approbierten Ärzten durchgeführt.",
    },
    {
      icon: Users,
      title: "Persönliche Beratung",
      text: "Individuelle Aufklärung und maßgeschneiderte Behandlungspläne.",
    },
    {
      icon: Shield,
      title: "Höchste Sicherheit",
      text: "Medizinische Expertise und modernste Behandlungsmethoden.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="bg-bordeaux-100 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-bordeaux-600" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-warm-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparente Antworten zu allen Behandlungen. Als 100% ärztlich
            geführte Praxis legen wir Wert auf umfassende Aufklärung und
            ehrliche Beratung.
          </p>
        </div>

        <Separator className="mb-20 bg-bordeaux-500" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: FAQs */}
          <div className="lg:col-span-2 space-y-12">
            {categories.map((category, index) => (
              <FAQCategory key={index} category={category} />
            ))}
          </div>

          {/* Right Column: Sticky Trust Indicators */}
          <aside className="lg:sticky top-24 h-fit">
            <div className="space-y-6">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator.title}
                  className="text-center p-6 bg-card rounded-lg shadow-sm border border-warm-gray-200"
                >
                  <indicator.icon className="h-8 w-8 text-bordeaux-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-warm-gray-900 mb-2">
                    {indicator.title}
                  </h3>
                  <p className="text-sm text-warm-gray-600">{indicator.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-sm border border-warm-gray-200">
          <h3 className="text-2xl font-bold text-warm-gray-900 mb-4">
            Ihre Frage war nicht dabei?
          </h3>
          <p className="text-warm-gray-600 mb-6 max-w-2xl mx-auto">
            Kontaktieren Sie uns gerne direkt. Wir nehmen uns Zeit für Ihre
            individuellen Fragen und beraten Sie umfassend zu allen
            Behandlungsmöglichkeiten.
          </p>
          <div className="flex justify-center">
            <WhatsAppContactButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
