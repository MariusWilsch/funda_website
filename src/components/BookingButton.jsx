import { Button } from "@/components/ui/button";

export function BookingButton({
  children = "Jetzt Termin buchen",
  variant = "primary",
  size = "lg",
  className = "",
  calLink,
}) {
  return (
    <Button
      data-cal-link={calLink}
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
  );
}
