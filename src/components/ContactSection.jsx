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
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-foreground mb-20 text-center leading-tight tracking-tight">
          {heading}
        </h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[70%_30%] gap-16 lg:gap-20">
          {/* Left Column Wrapper */}
          <div className="flex flex-col gap-12">
            {/* Main Content Card */}
            <div className="bg-background rounded-2xl p-8 lg:p-12 border border-muted shadow-sm">
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-snug tracking-tight">
                    {leftColumn.welcome.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {leftColumn.welcome.subtitle}
                  </p>
                  <Separator className="w-24 mx-auto bg-bordeaux-500" />
                </div>
                {/* Section 2 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground leading-snug">
                    {leftColumn.section2.headline}
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {leftColumn.section2.body}
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground leading-snug">
                    {leftColumn.section3.headline}
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {leftColumn.section3.body}
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground leading-snug">
                    {leftColumn.section4.headline}
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {leftColumn.section4.body}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-muted/30 rounded-2xl p-8 border border-muted text-center">
              <h4 className="text-2xl font-bold text-foreground mb-2">
                {leftColumn.callToAction.title}
              </h4>
              <p className="text-lg text-muted-foreground mb-6">
                {leftColumn.callToAction.subtitle}
              </p>
              <BookingButton variant="primary" size="lg" />
            </div>
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="flex flex-col justify-start sm:justify-around h-full gap-8 sm:gap-0">
            {/* Quick Contact Box */}
            <div className="bg-muted/30 rounded-2xl p-8 border border-muted">
              <h4 className="text-xl font-semibold text-foreground mb-2 leading-snug tracking-tight">
                {rightColumn.quickContact.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-6 leading-loose">
                {rightColumn.quickContact.subtitle}
              </p>
              <div className="space-y-3 mb-8">
                {rightColumn.quickContact.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-foreground leading-loose">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-4 px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
            <div className="bg-background rounded-2xl p-8 border border-muted shadow-sm">
              <h4 className="text-xl font-semibold text-foreground mb-1 leading-snug tracking-tight">
                {rightColumn.doctorInfo.name}
              </h4>
              <p className="text-sm text-primary font-medium mb-6 leading-loose tracking-wide">
                {rightColumn.doctorInfo.title}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1 leading-loose tracking-wide">
                    Praxisadresse:
                  </p>
                  <p className="text-sm text-muted-foreground leading-loose mb-1">
                    {rightColumn.doctorInfo.contact.address}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-loose tracking-wide mb-1">
                      Telefon:
                    </p>
                    <a
                      href={`tel:${rightColumn.doctorInfo.contact.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors leading-loose"
                    >
                      {rightColumn.doctorInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* E-Mail */}
                <div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-loose tracking-wide mb-1">
                      E-Mail:
                    </p>
                    <a
                      href={`mailto:${rightColumn.doctorInfo.contact.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors leading-loose"
                    >
                      {rightColumn.doctorInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-loose tracking-wide mb-1">
                      Instagram:
                    </p>
                    <a
                      href={`https://instagram.com/${rightColumn.doctorInfo.contact.instagram.replace(
                        "@",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors leading-loose"
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
