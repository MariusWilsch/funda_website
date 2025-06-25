import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="bg-card p-8 rounded-lg">
    <div className="flex items-center space-x-4 mb-6">
      {Icon && <Icon className="h-7 w-7 text-bordeaux-500" />}
      <h3 className="text-2xl font-bold text-warm-gray-900">{title}</h3>
    </div>
    <div className="text-warm-gray-700 leading-relaxed">{children}</div>
  </div>
);

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    treatment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-warm-gray-900 mb-4">
            Kontakt & Praxis
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Vereinbaren Sie Ihren persönlichen Beratungstermin oder kontaktieren
            Sie uns für weitere Informationen
          </p>
        </div>

        <Separator className="mb-12 bg-bordeaux-500" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Practice Information */}
          <div className="space-y-12">
            <InfoCard title="Dr. med. Sarah Müller">
              <p className="text-lg text-bordeaux-600 font-semibold mb-4">
                Fachärztin für Ästhetische Medizin
              </p>
              <p>
                Über 12 Jahre Erfahrung in der ästhetischen Medizin.
                Zertifiziert durch die Deutsche Gesellschaft für Ästhetische
                Medizin (DGÄM).
              </p>
            </InfoCard>

            <InfoCard title="Kontaktinformationen" icon={MapPin}>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-warm-gray-900">
                    Praxisadresse
                  </p>
                  <p>
                    {siteData.contact.address.street},{" "}
                    {siteData.contact.address.city}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-warm-gray-900">Telefon</p>
                  <a
                    href={`tel:${siteData.contact.phone.replace(/\s/g, "")}`}
                    className="text-bordeaux-600 hover:text-bordeaux-700 transition-colors"
                  >
                    {siteData.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-warm-gray-900">E-Mail</p>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-bordeaux-600 hover:text-bordeaux-700 transition-colors"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Öffnungszeiten" icon={Clock}>
              <div className="space-y-2">
                {siteData.openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span>{item.day}</span>
                    <span className="font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-warm-gray-600 mt-4">
                Termine nur nach Vereinbarung
              </p>
            </InfoCard>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 lg:p-8 rounded-lg h-fit">
            <h3 className="text-2xl font-bold text-warm-gray-900 mb-6">
              Nachricht senden
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-warm-gray-700"
                  >
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-warm-gray-700"
                  >
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-warm-gray-700"
                >
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div>
                <Label
                  htmlFor="treatment"
                  className="text-sm font-medium text-warm-gray-700"
                >
                  Gewünschte Behandlung
                </Label>
                <Input
                  id="treatment"
                  name="treatment"
                  type="text"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="z.B. Botox, Hyaluron, Beratung"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-warm-gray-700"
                >
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 min-h-[120px]"
                  placeholder="Beschreiben Sie Ihre Wünsche oder stellen Sie Ihre Fragen..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-bordeaux-600 hover:bg-bordeaux-700 text-white font-semibold py-3 text-lg"
              >
                Nachricht senden
              </Button>

              <p className="text-sm text-warm-gray-600 text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
