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
      className="py-24 xs:py-28 sm:py-32 px-3 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-sm xs:max-w-md sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-foreground mb-12 xs:mb-16 sm:mb-20 text-center leading-tight tracking-tight">
          {heading}
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-[70%_30%] gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Left Column Wrapper */}
          <div className="flex flex-col gap-8 xs:gap-10 sm:gap-12">
            {/* Main Content Card */}
            <div className="bg-background rounded-lg xs:rounded-xl sm:rounded-2xl p-6 xs:p-7 sm:p-8 lg:p-12 border border-muted shadow-sm">
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
            <div className="bg-muted/30 rounded-lg xs:rounded-xl sm:rounded-2xl p-6 xs:p-7 sm:p-8 border border-muted text-center">
              <h4 className="text-xl xs:text-2xl font-bold text-foreground mb-2 xs:mb-3 sm:mb-4">
                {leftColumn.callToAction.title}
              </h4>
              <p className="text-base xs:text-lg text-muted-foreground mb-5 xs:mb-6">
                {leftColumn.callToAction.subtitle}
              </p>
              <BookingButton variant="primary" size="lg" />
            </div>
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="flex flex-col justify-start md:justify-around h-full gap-6 xs:gap-7 sm:gap-8 md:gap-0">
            {/* Quick Contact Box */}
            <div className="bg-muted/30 rounded-lg xs:rounded-xl sm:rounded-2xl p-6 xs:p-7 sm:p-8 border border-muted">
              <h4 className="text-lg xs:text-xl font-semibold text-foreground mb-2 leading-snug tracking-tight">
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
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white text-base xs:text-lg py-3 xs:py-4 px-5 xs:px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a
                  href={`https://wa.me/${rightColumn.quickContact.whatsappButton.phoneNumber.replace(
                    /[\s+]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rightColumn.quickContact.whatsappButton.text}
                </a>
              </Button>
            </div>

            {/* Doctor Information */}
            <div className="bg-background rounded-lg xs:rounded-xl sm:rounded-2xl p-6 xs:p-7 sm:p-8 border border-muted shadow-sm">
              <h4 className="text-lg xs:text-xl font-semibold text-foreground mb-1 leading-snug tracking-tight">
                {rightColumn.doctorInfo.name}
              </h4>
              <p className="text-xs xs:text-sm text-primary font-medium mb-5 xs:mb-6 leading-loose tracking-wide">
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
                      className="text-xs xs:text-sm text-muted-foreground hover:text-primary transition-colors leading-loose"
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
                      className="text-xs xs:text-sm text-muted-foreground hover:text-primary transition-colors leading-loose"
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
