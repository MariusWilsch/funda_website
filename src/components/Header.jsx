import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { BookingButton } from "./BookingButton";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      {/* Main Header */}
      <div className="bg-white border-b border-warm-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "py-2" : "py-4"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span
                  className={`font-bold text-warm-gray-900 transition-all duration-300 ${
                    isScrolled ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"
                  }`}
                >
                  The <span className="text-bordeaux-600">PrettyPoint</span>
                </span>
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
