import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./features/services";
import { BookingSection } from "./components/BookingSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { IntroSplash } from "./components/IntroSplash";
import { MaintenanceWrapper } from "./components/MaintenanceWrapper";
import ErrorBoundary from "./components/ErrorBoundary";
import SEOHead, { PreloadResources } from "./components/SEOHead";
import { useSkipLinks } from "./hooks/useAccessibility";

function App() {
  const [isIntroMounted, setIsIntroMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // Add accessibility features
  useSkipLinks();

  useEffect(() => {
    // Start fading after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Unmount after the fade animation completes (2s delay + 0.5s fade)
    const unmountTimer = setTimeout(() => {
      setIsIntroMounted(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <ErrorBoundary>
      <SEOHead />
      <PreloadResources />
      <MaintenanceWrapper>
        <div className="min-h-screen overflow-x-hidden">
          {isIntroMounted && <IntroSplash isFading={isFading} />}
          <div
            className={`transition-opacity duration-1000 ${
              isFading ? "opacity-100" : "opacity-0"
            }`}
          >
            <Header />
            <main id="main-content" className="relative overflow-x-hidden">
              <ErrorBoundary fallback={({ error, retry }) => (
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-destructive mb-4">Fehler beim Laden der Sektion</p>
                    <button onClick={retry} className="btn-primary px-4 py-2 rounded">
                      Erneut versuchen
                    </button>
                  </div>
                </div>
              )}>
                <HeroSection />
              </ErrorBoundary>

              <ErrorBoundary>
                <ServicesSection />
              </ErrorBoundary>

              <ErrorBoundary>
                <BookingSection />
              </ErrorBoundary>

              <ErrorBoundary>
                <FAQSection />
              </ErrorBoundary>

              <ErrorBoundary>
                <ContactSection />
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </div>
      </MaintenanceWrapper>
    </ErrorBoundary>
  );
}

export default App;
