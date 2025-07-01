import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export function BookingSection() {
  const [isApiReady, setIsApiReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        console.log("🚀 [BookingSection] Initializing Cal API...");
        const cal = await getCalApi({ namespace: "service" });

        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          styles: {
            branding: { brandColor: "#5c2a3a" },
          },
          theme: "light",
        });

        setIsApiReady(true);
        console.log("✅ [BookingSection] Cal API ready");
      } catch (error) {
        console.error(
          "❌ [BookingSection] Cal API initialization failed:",
          error
        );
        setHasError(true);
      }
    })();
  }, []);

  return (
    <section
      id="booking-section"
      className="py-32 px-3 xs:px-4 sm:px-6 lg:px-8 bg-cream-50"
    >
      <div className="max-w-sm xs:max-w-md sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bordeaux-900 mb-6">
            Jetzt Ihren Termin wählen
          </h2>
          <p className="text-lg text-bordeaux-700 max-w-2xl mx-auto">
            Wählen Sie direkt einen verfügbaren Termin für Ihre Beratung. Die
            Kosten für die Beratung betragen 20 Euro.
          </p>
        </div>

        {/* Booking Embed Container */}
        <div className="bg-white rounded-lg shadow-medium p-8 border-t-4 border-bordeaux-500">
          {/* Loading State */}
          {!isApiReady && !hasError && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bordeaux-500 mx-auto mb-4"></div>
                <p className="text-bordeaux-600">Kalender wird geladen...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="text-center py-16">
              <p className="text-bordeaux-600 mb-4">
                Der Kalender konnte nicht geladen werden.
              </p>
              <p className="text-sm text-bordeaux-500">
                Bitte kontaktieren Sie uns direkt oder versuchen Sie es später
                erneut.
              </p>
            </div>
          )}

          {/* Cal.com Embed - Only render when API is ready */}
          {isApiReady && !hasError && (
            <Cal
              namespace="service"
              calLink="theprettypoint/service"
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll",
              }}
              config={{
                layout: "month_view",
              }}
            />
          )}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-bordeaux-500">
            Haben Sie Fragen? Kontaktieren Sie uns gerne direkt.
          </p>
        </div>
      </div>
    </section>
  );
}
