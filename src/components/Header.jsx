import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { BookingButton } from "./BookingButton";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import OptimizedImage from "@/components/ui/OptimizedImage";
import logoBlack from "@/assets/LogoBlack.png";

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
              isScrolled ? "h-20" : "h-32"
            } py-2`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" onClick={handleLogoClick}>
                <OptimizedImage
                  src={logoBlack}
                  alt="The PrettyPoint Logo"
                  className={`transition-all duration-300 w-32 md:w-40 h-auto`}
                />
              </a>
            </div>

            {/* Right Aligned Group */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <Navigation />

              {/* Desktop CTA Button */}
              <div className="hidden md:flex">
                <BookingButton
                  variant="primary"
                  size={isScrolled ? "default" : "lg"}
                />
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
