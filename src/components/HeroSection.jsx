import { BookingButton } from "./BookingButton";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/OptimizedImage";
import heroBackground from "@/assets/HeroPicture.jpeg";

export function HeroSection() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 hero-fade-out pt-20">
      {/* Left Column - Text Content */}
      <div className="flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-lg w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight mb-6">
            Moderne Ästhetik.
            <br />
            <span>Natürliche Ergebnisse.</span>
          </h1>

          <p className="text-lg md:text-xl text-warm-gray-700 leading-relaxed mb-6">
            Bei The PrettyPoint bekommst du Behandlungen, die deinen natürlichen
            Glow verstärken – nicht verändern.
          </p>

          {/* Treatment Types */}
          <p className="text-base text-black mb-8">
            Botox • Hyaluron • Lipolyse • PRP
          </p>

          {/* Trust Badge - Optional for future use */}
          {/* <div className="mb-8">
            <div className="inline-flex items-center gap-2">
              <Cross className="h-4 w-4 text-bordeaux-600" />
              <span className="text-sm text-bordeaux-600">
                Minimaler Eingriff, maximale Wirkung
              </span>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <BookingButton
              variant="primary"
              size="2xl"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300
              text-base md:text-lg font-bold px-6 md:px-8 py-4 md:py-6 bg-bordeaux-600 hover:bg-bordeaux-700 text-white"
            >
              <div className="text-center">
                <div className="text-base md:text-lg font-bold leading-tight">
                  Bereit für deinen PrettyPoint-Moment?
                </div>
                <div className="text-sm md:text-base mt-1 opacity-90 font-medium">
                  Jetzt buchen
                </div>
              </div>
            </BookingButton>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-warm-gray-900 border border-warm-gray-900 hover:bg-warm-gray-900 hover:text-white
              bg-transparent px-6 py-4 text-base"
            >
              <a href="#services">Behandlungen ansehen</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column - Hero Image */}
      <div className="flex items-center justify-center lg:order-last order-first">
        <div className="w-full h-full min-h-[50vh] lg:min-h-screen relative">
          <OptimizedImage
            src={heroBackground}
            alt="The Pretty Point - Aesthetic medicine with Dr. Funda T. Kircil showing natural beauty enhancement"
            className="w-full h-full object-contain lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
}
