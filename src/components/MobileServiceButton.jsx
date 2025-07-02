import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { servicesDialogData } from "@/features/services/data/servicesDialogData";
import { ServiceContent } from "@/features/services/components/ServiceContent";

export function MobileServiceButton({
  serviceType,
  children,
  onMobileMenuClose,
}) {
  const [open, setOpen] = useState(false);

  const serviceData = servicesDialogData[serviceType];

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("MobileServiceButton clicked:", { serviceType, serviceData });

    // Close mobile menu first
    if (onMobileMenuClose) {
      console.log("Closing mobile menu...");
      onMobileMenuClose();
    }

    // Then open service dialog after a small delay
    setTimeout(() => {
      console.log("Opening service dialog...");
      setOpen(true);
    }, 100);
  };

  if (!serviceData) {
    console.error(`Service data not found for type: ${serviceType}`);
    return null;
  }

  console.log("MobileServiceButton render:", {
    serviceType,
    open,
    serviceData: !!serviceData,
  });

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="h-[90vh] rounded-t-xl bg-background border-t-4 border-t-primary shadow-2xl overflow-y-auto p-6"
        >
          <SheetHeader className="pb-6">
            <SheetTitle className="text-2xl font-bold text-foreground uppercase card-title-serif">
              {serviceData.title} – {serviceData.subtitle}
            </SheetTitle>
            <div className="w-full h-px bg-primary mt-4" />
          </SheetHeader>
          <ServiceContent
            serviceData={serviceData}
            isMobile={true}
            closeModal={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
