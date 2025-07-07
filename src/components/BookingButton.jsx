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
    <div className="max-w-full overflow-hidden">
      <Button
        onClick={handleBookingClick}
        className={`
          ${
            variant === "primary"
              ? "bg-bordeaux-500 hover:bg-bordeaux-600 text-white shadow-lg hover:shadow-xl"
              : "bg-white border-2 border-bordeaux-500 text-bordeaux-500 hover:bg-bordeaux-50"
          }
          ${size === "lg" ? "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg" : size === "xl" ? "px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl" : "px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"}
          font-semibold rounded-md transition-all duration-300 cursor-pointer max-w-full overflow-hidden whitespace-nowrap text-ellipsis
          ${className}
        `}
      >
        {children}
      </Button>
    </div>
  );
}
