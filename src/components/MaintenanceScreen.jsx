import OptimizedImage from "@/components/ui/OptimizedImage";
import logoBlack from "@/assets/LogoBlack.png";
import { contactInfo } from "@/data/contactInfo";

export function MaintenanceScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <OptimizedImage
          src={logoBlack}
          alt="The PrettyPoint"
          className="w-52 mx-auto mb-8"
        />

        <h1 className="text-2xl font-bold text-warm-gray-900 mb-4">
          Wartungsmodus
        </h1>

        <p className="text-warm-gray-700 mb-6 leading-relaxed">
          Unsere Website wird derzeit optimiert. Bitte besuchen Sie uns über Ihr
          Smartphone (kleiner Bildschirm).
        </p>

        <div className="space-y-4">
          <div className="bg-warm-gray-50 p-4 rounded-lg">
            <p className="text-sm text-warm-gray-600 mb-2">
              Für sofortige Terminbuchungen:
            </p>
            <a
              href={`https://wa.me/${contactInfo.phone.whatsapp}`} // The Pretty Point's WhatsApp number
              className="inline-flex items-center gap-2 text-bordeaux-600 hover:text-bordeaux-700 font-medium"
            >
              📱 WhatsApp: {contactInfo.phone.display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
