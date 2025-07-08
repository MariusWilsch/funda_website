import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { BookingButton } from "./BookingButton";
import { WhatsAppIconButton } from "./WhatsAppIconButton";
import OptimizedImage from "@/components/ui/OptimizedImage";
import logoBlack from "@/assets/LogoBlack.png";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-warm-gray-700 hover:text-bordeaux-600 hover:bg-warm-gray-50"
          aria-label="Menu öffnen"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] bg-background p-6"
      >
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <div className="mb-8">
              <a
                href="#"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <OptimizedImage
                  src={logoBlack}
                  alt="The PrettyPoint Logo"
                  className="w-40 h-auto"
                />
              </a>
            </div>
            <Navigation
              isMobile={true}
              onNavItemClick={() => setIsOpen(false)}
            />
          </div>
          <div className="pt-6 border-t border-warm-gray-200 space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <WhatsAppIconButton
                className="flex-shrink-0"
                onClick={() => setIsOpen(false)}
              />
              <span className="text-sm text-warm-gray-600">WhatsApp Chat</span>
            </div>
            <BookingButton
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
