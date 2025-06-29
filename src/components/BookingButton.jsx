import { Button } from "@/components/ui/button";

export function BookingButton({
  children = "Jetzt buchen",
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  onModalClose,
}) {
  const handleBookingClick = (e) => {
    e.preventDefault();

    // Close modal first (if provided)
    if (onModalClose) {
      onModalClose();
      console.log("📍 [BookingButton] Closing modal before scroll");
    } 

    // Scroll to booking section smoothly
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      console.log("📍 [BookingButton] Scrolling to booking section");

      // Add a subtle highlight effect after scrolling
      setTimeout(() => {
        bookingSection.style.transform = "scale(1.01)";
        bookingSection.style.transition = "transform 0.3s ease";
        setTimeout(() => {
          bookingSection.style.transform = "scale(1)";
        }, 300);
      }, 800); // Wait for scroll to complete
    }

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
