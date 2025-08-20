import { Button } from "@/components/ui/button";

export function BookingButton({
  children = "Jetzt buchen",
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  onModalClose,
  href = "https://www.doctolib.de/praktischer-arzt/berlin/funda-kircil?utm_campaign=website-button&utm_source=funda-kircil-website-button&utm_medium=referral&utm_content=option-8&utm_term=funda-kircil",
}) {
  const handleBookingClick = (e) => {
    // Close modal first (if provided)
    if (onModalClose) {
      onModalClose();
      console.log("📍 [BookingButton] Closing modal before opening Doctolib");
    } 

    // Open Doctolib in new tab
    window.open(href, "_blank", "noopener,noreferrer");
    console.log("📍 [BookingButton] Opening Doctolib booking");

    // Call any additional onClick handler
    onClick?.(e);
  };

  return (
    <Button
      onClick={handleBookingClick}
      className={`
        ${
          variant === "primary"
            ? "bg-bordeaux-500 hover:bg-bordeaux-600 text-white shadow-lg hover:shadow-xl"
            : "bg-white border-2 border-bordeaux-500 text-bordeaux-500 hover:bg-bordeaux-50"
        }
        ${size === "lg" ? "px-10 py-5 text-xl" : "px-6 py-3 text-base"}
        font-semibold rounded-md transition-all duration-300 cursor-pointer transform hover:scale-105
        ${className}
      `}
    >
      {children}
    </Button>
  );
}
