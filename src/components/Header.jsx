import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { BookingButton } from "./BookingButton";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import OptimizedImage from "@/components/ui/OptimizedImage";
import logoBlack from "@/assets/LogoBlack.png";
import logoWhite from "@/assets/LogoWhite.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const heroSection = document.querySelector("section");
      const heroBottom = heroSection
        ? heroSection.offsetHeight
        : window.innerHeight;

      setIsScrolled(window.scrollY > 20);
      setIsPastHero(window.scrollY > heroBottom - 100); // 100px before hero ends for smooth transition
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastHero ? "bg-background shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          isPastHero ? "border-b border-warm-gray-200" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "py-2" : "py-4"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                onClick={handleLogoClick}
                className="flex items-center"
              >
                <OptimizedImage
                  src={isPastHero ? logoBlack : logoWhite}
                  alt="The PrettyPoint Logo"
                  className={`transition-all duration-300 ${
                    isPastHero
                      ? isScrolled
                        ? "h-8"
                        : "h-12"
                      : isScrolled
                      ? "h-16"
                      : "h-20"
                  }`}
                />
              </a>
            </div>

            {/* Right Aligned Group */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <Navigation isTransparent={!isPastHero} />

              {/* Desktop CTA Button */}
              <div className="hidden md:flex">
                <BookingButton
                  variant="primary"
                  size={isScrolled ? "default" : "lg"}
                  calLink="mariuswilsch/coffee-break"
                >
                  Termin buchen
                </BookingButton>
              </div>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
