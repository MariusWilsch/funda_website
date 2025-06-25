import { ServiceCard } from "./ServiceCard";
import { Separator } from "@/components/ui/separator";
import { serviceCardData } from "../data/serviceCardData";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-gray-900 mb-4">
            Unsere Behandlungen
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Medizinische Ästhetik auf höchstem Niveau – 100% ärztlich geführt
          </p>
          <Separator className="w-24 mx-auto mt-6 bg-bordeaux-500" />
        </div>

        {/* Services Grid - 1+3 Layout */}
        <div className="space-y-8">
          {/* Top row - 1 full-width featured card */}
          {serviceCardData[0] && (
            <div className="w-full">
              <ServiceCard
                key={serviceCardData[0].title}
                {...serviceCardData[0]}
                isFeatured={true}
              />
            </div>
          )}

          {/* Bottom row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {serviceCardData.slice(1, 4).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
