import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { BookingButton } from "./BookingButton";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-warm-gray-700 hover:text-bordeaux-600 hover:bg-warm-gray-50"
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
                <span className="text-2xl font-bold text-warm-gray-900">
                  The <span className="text-bordeaux-600">PrettyPoint</span>
                </span>
              </a>
            </div>
            <Navigation isMobile={true} />
          </div>
          <div className="pt-6 border-t border-warm-gray-200">
            <BookingButton
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Termin buchen
            </BookingButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
