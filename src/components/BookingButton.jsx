import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { BookerEmbed } from '@calcom/atoms'

export function BookingButton({
  children = "Jetzt Termin buchen",
  variant = "primary",
  size = "lg",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`
            ${
              variant === "primary"
                ? "bg-bordeaux-500 hover:bg-bordeaux-600 text-white shadow-medium"
                : "bg-white border-2 border-bordeaux-500 text-bordeaux-500 hover:bg-bordeaux-50"
            }
            ${size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"}
            font-semibold rounded-md transition-all duration-200
            ${className}
          `}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-6">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-warm-gray-900">
              Termin buchen
            </h2>
            <p className="text-warm-gray-600">
              Cal.com Integration wird hier implementiert
            </p>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-bordeaux-500 hover:bg-bordeaux-600 text-white"
            >
              Schließen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
