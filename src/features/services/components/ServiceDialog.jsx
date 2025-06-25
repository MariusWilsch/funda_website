import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { servicesDialogData } from "../data/servicesDialogData";

export function ServiceDialog({ serviceType, children }) {
  const [open, setOpen] = useState(false);

  // Get service data based on serviceType
  const serviceData = servicesDialogData[serviceType];

  if (!serviceData) {
    return null; // Don't render if no data found
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

        <div className="space-y-12">
          {/* Description */}
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-line max-w-prose">
            {serviceData.description}
          </div>

          {/* Treatment Details Card */}
          <Card className="bg-card border-l-4 border-l-primary shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground card-title-serif">
                BEHANDLUNGSDETAILS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base">
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
            <h3 className="text-xl font-bold mb-6 text-foreground card-title-serif">
              PREISLISTE
            </h3>
            <div className="border-b border-primary mb-8"></div>

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
                  <AccordionTrigger className="text-left font-semibold hover:no-underline px-6 py-4 text-lg">
                    <span className="text-foreground">
                      {group.groupTitle || "Behandlungen"} ({group.items.length}
                      )
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 pt-4">
                      {group.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-start py-4 border-b border-border last:border-b-0"
                        >
                          <div className="flex-1 pr-6">
                            <span className="font-medium text-foreground text-base">
                              {item.name}
                            </span>
                            {item.note && (
                              <span className="text-sm text-muted-foreground block mt-2 italic">
                                {item.note}
                              </span>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            {item.basePrice ? (
                              <span className="font-bold text-primary text-lg">
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
          <div className="space-y-3 bg-muted/30 p-6 rounded-lg border border-border">
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
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
            {serviceData.ctaButtonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
