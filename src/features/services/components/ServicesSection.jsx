import { ServiceCard } from "./ServiceCard";
import { Separator } from "@/components/ui/separator";
import { serviceCardData } from "../data/serviceCardData";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-3 xs:px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm xs:max-w-md sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured Card */}
          {serviceCardData[0] && (
            <div className="md:col-span-2 xl:col-span-2">
              <ServiceCard
                key={serviceCardData[0].title}
                {...serviceCardData[0]}
                isFeatured={true}
              />
            </div>
          )}

          {/* Standard Cards */}
          {serviceCardData.slice(1).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
