import { BookingButton } from "@/components/BookingButton";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ServiceContent = ({ serviceData, isMobile = false, closeModal }) => (
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
                    <span
                      className={`font-bold text-primary whitespace-nowrap ${
                        isMobile ? "text-base" : "text-lg"
                      }`}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    {/* CTA Section */}
    <div className="text-center pt-6 border-t border-border">
      <BookingButton
        variant="primary"
        size={isMobile ? "lg" : "xl"}
        onClick={closeModal}
        className={`${
          isMobile ? "w-full" : "min-w-[300px]"
        } shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        Jetzt Termin buchen
      </BookingButton>
    </div>
  </div>
);
