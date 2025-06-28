import { useState, useEffect } from "react";
import { BookingButton } from "@/components/BookingButton";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { servicesDialogData } from "../data/servicesDialogData";

export function ServiceDialog({ serviceType, children }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get service data based on serviceType
  const serviceData = servicesDialogData[serviceType];

  if (!serviceData) {
    return null; // Don't render if no data found
  }

  // Shared content component
  const ServiceContent = ({ isMobile = false, closeModal }) => (
    <div className={`${isMobile ? "space-y-8" : "space-y-12"}`}>
      {/* Description */}
      <div
        className={`${
          isMobile ? "text-base" : "text-lg"
        } leading-relaxed text-foreground whitespace-pre-line max-w-prose`}
      >
        {serviceData.description}
      </div>

      {/* Treatment Details Card */}
      <Card className="bg-card border-l-4 border-l-primary shadow-lg">
        <CardContent className={`${isMobile ? "p-6" : "p-8"}`}>
          <h3
            className={`${isMobile ? "text-lg" : "text-xl"} font-bold ${
              isMobile ? "mb-4" : "mb-6"
            } text-foreground card-title-serif`}
          >
            BEHANDLUNGSDETAILS
          </h3>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              isMobile ? "gap-6" : "gap-8"
            } text-base`}
          >
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-primary text-sm uppercase tracking-wide">
                Dauer:
              </span>
              <span className="text-foreground font-medium">
                {serviceData.treatmentInfo.duration}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-primary text-sm uppercase tracking-wide">
                Wirkung:
              </span>
              <span className="text-foreground font-medium">
                {serviceData.treatmentInfo.onset}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-primary text-sm uppercase tracking-wide">
                Haltbarkeit:
              </span>
              <span className="text-foreground font-medium">
                {serviceData.treatmentInfo.longevity}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-primary text-sm uppercase tracking-wide">
                Ausfallzeit:
              </span>
              <span className="text-foreground font-medium">
                {serviceData.treatmentInfo.downtime}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Section */}
      <div>
        <h3
          className={`${isMobile ? "text-lg" : "text-xl"} font-bold ${
            isMobile ? "mb-4" : "mb-6"
          } text-foreground card-title-serif`}
        >
          PREISLISTE
        </h3>
        <div
          className={`border-b border-primary ${isMobile ? "mb-6" : "mb-8"}`}
        ></div>

        <Accordion
          type="multiple"
          defaultValue={[serviceData.pricingGroups[0]?.groupTitle || "0"]}
          className="space-y-4"
        >
          {serviceData.pricingGroups.map((group, groupIndex) => (
            <AccordionItem
              key={group.groupTitle || groupIndex}
              value={group.groupTitle || groupIndex.toString()}
              className="border border-border rounded-lg bg-card shadow-sm"
            >
              <AccordionTrigger
                className={`text-left font-semibold hover:no-underline ${
                  isMobile ? "px-4 py-3 text-base" : "px-6 py-4 text-lg"
                }`}
              >
                <span className="text-foreground">
                  {group.groupTitle || "Behandlungen"} ({group.items.length})
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`${isMobile ? "px-4 pb-4" : "px-6 pb-6"}`}
              >
                <div
                  className={`${
                    isMobile ? "space-y-3 pt-3" : "space-y-4 pt-4"
                  }`}
                >
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex justify-between items-start ${
                        isMobile ? "py-3" : "py-4"
                      } border-b border-border last:border-b-0`}
                    >
                      <div className={`flex-1 ${isMobile ? "pr-4" : "pr-6"}`}>
                        <span
                          className={`font-medium text-foreground ${
                            isMobile ? "text-sm" : "text-base"
                          }`}
                        >
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-xs text-muted-foreground block mt-2 italic">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        {item.basePrice ? (
                          <span
                            className={`font-bold text-primary ${
                              isMobile ? "text-base" : "text-lg"
                            }`}
                          >
                            {item.basePrice}
                          </span>
                        ) : (
                          <div className="space-y-2">
                            {item.priceOptions?.map((option, optIndex) => (
                              <div key={optIndex} className="text-sm">
                                <span className="text-muted-foreground">
                                  {option.label}:
                                </span>{" "}
                                <span className="font-bold text-primary text-base">
                                  {option.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Disclaimers */}
      <div
        className={`space-y-3 bg-muted/30 ${
          isMobile ? "p-4" : "p-6"
        } rounded-lg border border-border`}
      >
        {serviceData.disclaimers.map((disclaimer, index) => (
          <div
            key={index}
            className="text-xs text-muted-foreground leading-relaxed"
          >
            {disclaimer}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <BookingButton
        onModalClose={closeModal}
        className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold ${
          isMobile ? "py-4 text-base" : "py-6 text-lg"
        } shadow-lg hover:shadow-xl transition-all duration-200`}
      >
        {serviceData.ctaButtonText}
      </BookingButton>
    </div>
  );

  // Render responsive component
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>{children}</SheetTrigger>
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
          <ServiceContent isMobile={true} closeModal={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[750px] lg:max-w-[800px] max-h-[85vh] overflow-y-auto p-8 lg:p-12">
        <DialogHeader className="pb-8">
          <DialogTitle className="text-2xl font-bold text-foreground uppercase card-title-serif">
            {serviceData.title} – {serviceData.subtitle}
          </DialogTitle>
          <div className="w-full h-px bg-primary mt-4" />
        </DialogHeader>
        <ServiceContent isMobile={false} closeModal={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
