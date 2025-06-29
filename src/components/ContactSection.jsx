import { Phone, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookingButton } from "./BookingButton";

// Data is now inlined and restructured
const contactData = {
  heading: "Kontakt & Beratung",
  leftColumn: {
    welcome: {
      title: "Willkommen bei The PrettyPoint",
      subtitle: "wo moderne Ästhetik auf medizinische Exzellenz trifft.",
    },
    section1: {
      p1: "Du wünschst dir Ergebnisse, die nicht gemacht, sondern einfach gut aussehen?",
    },
    quote: "„Weil echte Schönheit keine Schablone braucht.",
    section2: {
      headline: "Individuelle Beratung für natürliche Ergebnisse",
      body: "Bei The PrettyPoint erwarten dich keine Standards, sondern maßgeschneiderte Behandlungen, die dich in deinem natürlichen Glow bestärken. Wir hören zu, schauen genau hin – und arbeiten mit einem geschulten Auge, ruhiger Hand und fundierter medizinischer Expertise.",
    },
    section3: {
      headline: "Minimaler Eingriff. Maximale Wirkung.",
      body: "Ob Babybotox, sanfte Hyaluron-Akzente oder exklusive Signature-Behandlungen – bei uns trifft höchste Qualität auf Ästhetik mit Feingefühl.",
    },
    section4: {
      headline: "100% ärztlich geführt. 100% Vertrauenssache.",
      body: "Du wirst ausschließlich von einer erfahrenen Ärztin behandelt – mit Präzision, Transparenz und einem Ziel: Deine natürliche Ausstrahlung zu betonen – nicht zu verändern.",
    },
    callToAction: {
      title: "Bereit für Ihren PrettyPoint-Moment?",
      subtitle:
        "Jetzt Termin sichern – und erleben, wie sich medizinische Ästhetik richtig gut anfühlen kann.",
    },
  },
  rightColumn: {
    quickContact: {
      title: "Sofort kontaktieren",
      subtitle: "Schnell, einfach, persönlich",
      benefits: [
        "Antwort am selben Tag garantiert",
        "Persönliche Beratung",
        "Direkte Terminbuchung",
        "Diskret und vertraulich",
      ],
      whatsappButton: {
        text: "WhatsApp Chat starten",
        phoneNumber: "+4915778527430",
      },
    },
    doctorInfo: {
      name: "Dr. med. Sarah Müller",
      title: "Fachärztin für Ästhetische Medizin",
      contact: {
        address: "Hefnersteig 1, 13629 Berlin",
        phone: "0157 78527430",
        email: "info@theprettypoint.de",
        instagram: "@the_prettypoint_berlin",
      },
    },
  },
};

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
          <div className="flex flex-col gap-8">
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
                {/* Section 1 */}
                {/* <div className="text-base text-foreground leading-relaxed">
                  <p>{leftColumn.section1.p1}</p>
                </div> */}
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
          <div className="flex flex-col justify-around h-full">
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
                    /\s/g,
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
                  <p className="text-sm text-muted-foreground leading-loose">
                    {rightColumn.doctorInfo.contact.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href={`tel:${rightColumn.doctorInfo.contact.phone.replace(
                      /\s/g,
                      ""
                    )}`}
                    className="text-sm text-foreground hover:text-primary transition-colors leading-loose"
                  >
                    Telefon: {rightColumn.doctorInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${rightColumn.doctorInfo.contact.email}`}
                    className="text-sm text-foreground hover:text-primary transition-colors leading-loose"
                  >
                    E-Mail: {rightColumn.doctorInfo.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-primary rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">IG</span>
                  </div>
                  <a
                    href={`https://instagram.com/${rightColumn.doctorInfo.contact.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-primary transition-colors leading-loose"
                  >
                    Instagram: {rightColumn.doctorInfo.contact.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
