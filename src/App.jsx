import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./features/services";
import { BookingSection } from "./components/BookingSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { IntroSplash } from "./components/IntroSplash";

function App() {
  const [isIntroMounted, setIsIntroMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

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
    <div className="min-h-screen">
      {isIntroMounted && <IntroSplash isFading={isFading} />}
      <div
        className={`transition-opacity duration-1000 ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main className="relative">
          <HeroSection />
          <ServicesSection />
          <BookingSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
