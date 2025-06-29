import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppContactButton({ className = "", ...props }) {
  const phoneNumber = "4915566239974"; // The Pretty Point's WhatsApp number
  const message =
    "Hallo, ich interessiere mich für eine Beratung bei The Pretty Point.";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Button
      asChild
      className={`bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${className}`}
      {...props}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        WhatsApp Kontakt
      </a>
    </Button>
  );
}
