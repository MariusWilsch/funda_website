import { BookingButton } from "./BookingButton";
import { Button } from "@/components/ui/button";
import { Cross } from "lucide-react";
// Import image from public folder
import heroBackground from "/Users/verdant/Documents/augment-projects/funda_website/public/CandidPhotographyNaturalTextures.png"; // Assuming the image is in public/hero-background.jpg

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 hero-fade-out">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Aesthetic medicine background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-warm-gray-900 leading-tight mb-6">
          Moderne Ästhetik.
          <br />
          <span>Natürliche Ergebnisse.</span>
        </h1>

        <p className="text-lg md:text-xl text-warm-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
          Bei The PrettyPoint bekommst du Behandlungen, die deinen natürlichen
          Glow verstärken – nicht verändern.
        </p>

        {/* Treatment Types */}
        <p className="text-base text-black mb-6">
          Botox • Hyaluron • Lipolyse • PRP
        </p>
        {/* Trust Badge */}
        {/* <div className="mb-1">
          <div className="inline-flex items-center gap-2">
            <Cross className="h-4 w-4 text-bordeaux-600" />
            <span className="text-sm text-bordeaux-600">
              Minimaler Eingriff, maximale Wirkung
            </span>
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <BookingButton
            variant="primary"
            size="2xl"
            className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 
            text-xl font-bold px-12 py-6 bg-bordeaux-600 hover:bg-bordeaux-700 text-white"
          >
            Bereit für deinen PrettyPoint-Moment?
          </BookingButton>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-warm-gray-900 border border-warm-gray-900 hover:bg-warm-gray-900 hover:text-white 
            bg-transparent px-8 py-4 text-lg"
          >
            <a href="#services">Behandlungen ansehen</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
