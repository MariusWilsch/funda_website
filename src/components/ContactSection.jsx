import { Phone, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookingButton } from "./BookingButton";
import { contactData } from "@/data/contactData";

export function ContactSection() {
  const { heading, leftColumn, rightColumn } = contactData;

  return (
    <section
      id="contact"
      className="py-24 xs:py-28 sm:py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container-responsive">
        {/* Main Heading */}
        <div className="text-center mb-12 xs:mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 sm:gap-6 md:gap-4 lg:gap-6 w-full items-start max-w-full">
          {/* Left Column Wrapper */}
          <div className="flex flex-col gap-6 xs:gap-8 sm:gap-10 w-full max-w-full">
            {/* Main Content Card */}
            <div className="bg-background rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 border border-muted shadow-sm w-full max-w-full">
              <div className="space-y-6 xs:space-y-7 sm:space-y-8">
                {/* Welcome Section */}
                <div className="text-center">
                  <h3 className="text-2xl xs:text-3xl font-bold text-foreground mb-4 xs:mb-5 sm:mb-6 leading-snug tracking-tight">
                    {leftColumn.welcome.title}
                  </h3>

                  <p className="text-sm xs:text-base text-muted-foreground leading-relaxed mb-4 xs:mb-5 sm:mb-6">
                    {leftColumn.welcome.subtitle}
                  </p>
                  <Separator className="w-24 mx-auto bg-bordeaux-500" />
                </div>
                {/* Section 2 */}
                <div className="space-y-3 xs:space-y-4">
                  <h4 className="text-base xs:text-lg font-semibold text-foreground leading-snug">
                    {leftColumn.section2.headline}
                  </h4>
                  <p className="text-sm xs:text-base text-muted-foreground leading-relaxed">
                    {leftColumn.section2.body}
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-3 xs:space-y-4">
                  <h4 className="text-base xs:text-lg font-semibold text-foreground leading-snug">
                    {leftColumn.section3.headline}
                  </h4>
                  <p className="text-sm xs:text-base text-muted-foreground leading-relaxed">
                    {leftColumn.section3.body}
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-3 xs:space-y-4">
                  <h4 className="text-base xs:text-lg font-semibold text-foreground leading-snug">
                    {leftColumn.section4.headline}
                  </h4>
                  <p className="text-sm xs:text-base text-muted-foreground leading-relaxed">
                    {leftColumn.section4.body}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-muted/30 rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-muted text-center w-full max-w-full">
              <h4 className="text-xl xs:text-2xl font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
                {leftColumn.callToAction.title}
              </h4>
              <p className="text-base xs:text-lg text-muted-foreground mb-5 xs:mb-6">
                {leftColumn.callToAction.subtitle}
              </p>
              <div className="w-full max-w-full overflow-hidden px-2">
                <BookingButton variant="primary" size="lg" />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="flex flex-col justify-start gap-4 xs:gap-5 sm:gap-6 w-full max-w-full overflow-hidden pr-2">
            {/* Quick Contact Box */}
            <div className="bg-muted/30 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 border border-muted w-full max-w-full overflow-hidden mr-2">
              <h4 className="text-base xs:text-lg font-semibold text-foreground mb-2 leading-snug tracking-tight break-words">
                {rightColumn.quickContact.title}
              </h4>
              <p className="text-xs xs:text-sm text-muted-foreground mb-5 xs:mb-6 leading-loose">
                {rightColumn.quickContact.subtitle}
              </p>
              <div className="space-y-2 xs:space-y-3 mb-6 xs:mb-7 sm:mb-8">
                {rightColumn.quickContact.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 xs:space-x-3"
                  >
                    <Check className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-xs xs:text-sm text-foreground leading-loose">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full max-w-full overflow-hidden px-1">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white text-xs xs:text-sm py-2 px-2 xs:px-3 shadow-lg hover:shadow-xl transition-all duration-300 max-w-full overflow-hidden text-center"
                >
                  <a
                    href={`https://wa.me/${rightColumn.quickContact.whatsappButton.phoneNumber.replace(
                      /[\s+]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    {rightColumn.quickContact.whatsappButton.text}
                  </a>
                </Button>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="bg-background rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 border border-muted shadow-sm w-full max-w-full overflow-hidden mr-2">
              <h4 className="text-base xs:text-lg font-semibold text-foreground mb-1 leading-snug tracking-tight break-words">
                {rightColumn.doctorInfo.name}
              </h4>
              <p className="text-xs xs:text-sm text-primary font-medium mb-4 xs:mb-5 leading-loose tracking-wide break-words">
                {rightColumn.doctorInfo.title}
              </p>
              <div className="space-y-3 xs:space-y-4">
                <div>
                  <p className="text-xs xs:text-sm font-medium text-foreground mb-1 leading-loose tracking-wide">
                    Praxisadresse:
                  </p>
                  <p className="text-xs xs:text-sm text-muted-foreground leading-loose mb-1">
                    {rightColumn.doctorInfo.contact.address}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div>
                    <p className="text-xs xs:text-sm font-medium text-foreground leading-loose tracking-wide mb-1">
                      Telefon:
                    </p>
                    <a
                      href={`tel:${rightColumn.doctorInfo.contact.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="text-xs xs:text-sm text-muted-foreground hover:text-primary transition-colors leading-loose"
                    >
                      {rightColumn.doctorInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* E-Mail */}
                <div>
                  <div>
                    <p className="text-xs xs:text-sm font-medium text-foreground leading-loose tracking-wide mb-1">
                      E-Mail:
                    </p>
                    <a
                      href={`mailto:${rightColumn.doctorInfo.contact.email}`}
                      className="text-xs xs:text-sm text-muted-foreground hover:text-primary transition-colors leading-loose break-all"
                    >
                      {rightColumn.doctorInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div>
                  <div>
                    <p className="text-xs xs:text-sm font-medium text-foreground leading-loose tracking-wide mb-1">
                      Instagram:
                    </p>
                    <a
                      href={`https://instagram.com/${rightColumn.doctorInfo.contact.instagram.replace(
                        "@",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs xs:text-sm text-muted-foreground hover:text-primary transition-colors leading-loose break-all"
                    >
                      {rightColumn.doctorInfo.contact.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
