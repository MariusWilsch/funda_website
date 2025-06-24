import { siteData } from "@/data/siteData";
import { BookingButton } from "./BookingButton";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-warm-gray-300 hover:text-bordeaux-400 transition-colors"
  >
    {children}
  </a>
);

const FooterColumn = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { socials, legalLinks, treatmentLinks, practiceLinks } = siteData;

  return (
    <footer className="bg-warm-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-12 text-center border-b border-warm-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-warm-gray-300 max-w-2xl mx-auto mb-8">
            Buchen Sie jetzt Ihren persönlichen Beratungstermin in unserer
            Praxis in Berlin.
          </p>
          <BookingButton variant="primary" size="xl">
            Termin online buchen
          </BookingButton>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">
              The <span className="text-bordeaux-400">PrettyPoint</span>
            </h3>
            <p className="text-warm-gray-300 leading-relaxed">
              Ihre Praxis für ästhetische Medizin. Professionell, sicher und mit
              natürlichen Ergebnissen.
            </p>
            <div className="flex space-x-4 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-warm-gray-400 hover:text-bordeaux-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Treatments Column */}
          <FooterColumn title="Behandlungen">
            {treatmentLinks.map((link) => (
              <FooterLink key={link.name} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Practice Column */}
          <FooterColumn title="Praxis">
            {practiceLinks.map((link) => (
              <FooterLink key={link.name} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Legal Column */}
          <FooterColumn title="Rechtliches">
            {legalLinks.map((link) => (
              <FooterLink key={link.name} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        {/* Sub-Footer */}
        <div className="py-6 border-t border-warm-gray-800 text-center text-sm text-warm-gray-400">
          <p>© {currentYear} The PrettyPoint - Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}
