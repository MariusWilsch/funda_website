import { BookingButton } from "./BookingButton";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/OptimizedImage";
import heroBackground from "@/assets/HeroPicture.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 pt-20 hero-fade-out">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroBackground}
          alt="Aesthetic medicine background"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto text-center">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-warm-gray-900 leading-tight mb-4 xs:mb-5 sm:mb-6">
          Moderne Ästhetik.
          <br />
          <span>Natürliche Ergebnisse.</span>
        </h1>

        <p className="text-base xs:text-lg md:text-xl text-warm-gray-700 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-4 xs:mb-5 sm:mb-6">
          Bei The PrettyPoint bekommst du Behandlungen, die deinen natürlichen
          Glow verstärken – nicht verändern.
        </p>

        {/* Treatment Types */}
        <p className="text-sm xs:text-base text-black mb-4 xs:mb-5 sm:mb-6">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-5 sm:gap-6 mt-6 xs:mt-7 sm:mt-8">
          <BookingButton
            variant="primary"
            size="2xl"
            className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300
            text-sm xs:text-base md:text-xl font-bold px-4 xs:px-6 sm:px-8 md:px-16 py-4 xs:py-5 sm:py-6 md:py-8 bg-bordeaux-600 hover:bg-bordeaux-700 text-white"
          >
            <div className="text-center">
              <div className="text-sm xs:text-base md:text-xl font-bold leading-tight">
                <span className="block xs:hidden">Jetzt buchen</span>
                <span className="hidden xs:block">
                  Bereit für deinen PrettyPoint-Moment?
                </span>
              </div>
              <div className="text-xs xs:text-sm md:text-base mt-1 xs:mt-2 opacity-90 font-medium text-center hidden xs:block">
                Jetzt buchen
              </div>
            </div>
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
