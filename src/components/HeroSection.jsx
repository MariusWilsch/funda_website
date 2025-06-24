import { BookingButton } from "./BookingButton";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const backgroundImage =
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Aesthetic medicine background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-warm-gray-900 leading-tight">
          Moderne Ästhetik.
          <br />
          <span className="text-bordeaux-600">Medizinische Exzellenz.</span>
        </h1>

        <p className="text-lg md:text-xl text-warm-gray-700 max-w-2xl mx-auto leading-relaxed">
          Willkommen bei The PrettyPoint, wo wir natürliche Ergebnisse mit
          höchster ärztlicher Kompetenz verbinden.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookingButton
            variant="primary"
            size="xl"
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Jetzt Termin buchen
          </BookingButton>
          <Button asChild variant="outline" size="xl">
            <a href="#services">Behandlungen ansehen</a>
          </Button>
        </div>

        <p className="text-base text-warm-gray-600 pt-4">
          100% ärztlich geführt • Minimaler Eingriff, maximale Wirkung
        </p>
      </div>
    </section>
  );
}
