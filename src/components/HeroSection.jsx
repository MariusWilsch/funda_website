import { BookingButton } from "./BookingButton";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/OptimizedImage";
import heroBackground from "@/assets/HeroPicture.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 hero-fade-out overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroBackground}
          alt="Aesthetic medicine background"
          className="h-full w-full object-cover object-top hero-background no-scale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center w-full">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-warm-gray-900 leading-tight mb-4 xs:mb-5 sm:mb-6">
          Moderne Ästhetik.
          <br />
          <span>Natürliche Ergebnisse.</span>
        </h1>

        <p className="text-base xs:text-lg md:text-xl text-warm-gray-700 max-w-2xl mx-auto leading-relaxed mb-4 xs:mb-5 sm:mb-6">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-5 sm:gap-6 mt-6 xs:mt-7 sm:mt-8 w-full max-w-full px-4">
          <div className="w-full max-w-sm sm:max-w-md overflow-hidden mx-auto">
            <BookingButton
              variant="primary"
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300
              text-sm xs:text-base sm:text-lg font-bold px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6 bg-bordeaux-600 hover:bg-bordeaux-700 text-white w-full max-w-full min-h-[4rem] xs:min-h-[4.5rem] sm:min-h-[5rem] flex items-center justify-center"
            >
              <div className="text-center w-full h-full flex flex-col justify-center items-center space-y-1">
                <div className="font-bold leading-relaxed">
                  <div className="block xs:hidden text-base">Jetzt buchen</div>
                  <div className="hidden xs:block">
                    <div className="text-sm xs:text-base sm:text-lg leading-relaxed">Bereit für deinen</div>
                    <div className="text-sm xs:text-base sm:text-lg leading-relaxed">PrettyPoint-Moment?</div>
                  </div>
                </div>
                <div className="text-xs xs:text-sm opacity-90 font-medium hidden xs:block mt-1">
                  Jetzt buchen
                </div>
              </div>
            </BookingButton>
          </div>

          <div className="w-full max-w-xs overflow-hidden mx-auto">
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="hidden sm:flex text-warm-gray-900 border border-warm-gray-900 hover:bg-warm-gray-900 hover:text-white
              bg-transparent px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-4 text-sm xs:text-base sm:text-lg w-full max-w-full overflow-hidden"
            >
              <a href="#services" className="overflow-hidden text-ellipsis whitespace-nowrap">Behandlungen ansehen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
