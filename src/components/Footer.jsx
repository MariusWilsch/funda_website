import { siteData } from "@/data/siteData";
import { handleSmoothScroll } from "@/lib/utils";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => handleSmoothScroll(e, href)}
    className="block py-1 xs:py-2 text-sm xs:text-base text-warm-gray-300 hover:text-bordeaux-400 transition-colors"
  >
    {children}
  </a>
);

const FooterColumn = ({ title, children }) => (
  <div className="space-y-3 xs:space-y-4">
    <h3 className="text-base xs:text-lg font-semibold text-white">{title}</h3>
    <div className="space-y-1 xs:space-y-2">{children}</div>
  </div>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { legalLinks, treatmentLinks } = siteData;

  return (
    <footer className="bg-warm-gray-900 text-white">
      <div className="max-w-sm xs:max-w-md sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 xs:py-10 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-7 sm:gap-8 justify-items-center md:justify-items-start items-start">
          {/* Treatments Column */}
          <FooterColumn title="Behandlungen">
            {treatmentLinks.map((link) => (
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

          {/* Opening Hours Column */}
          <FooterColumn title="Öffnungszeiten">
            <div className="space-y-1 xs:space-y-2">
              <div>
                <p className="text-xs xs:text-sm font-medium text-warm-gray-200 mb-1">
                  Montag - Freitag
                </p>
                <p className="text-xs xs:text-sm text-warm-gray-300 mb-0">
                  9:00 - 18:00 Uhr
                </p>
              </div>
              <div>
                <p className="text-xs xs:text-sm font-medium text-warm-gray-200 mb-1">
                  Samstag - Sonntag
                </p>
                <p className="text-xs xs:text-sm text-warm-gray-300 mb-0">
                  Geschlossen
                </p>
              </div>
            </div>
            <p className="text-xs xs:text-sm text-warm-gray-400 pt-2 mb-0">
              Termine nur nach Vereinbarung
            </p>
          </FooterColumn>
        </div>

        {/* Sub-Footer */}
        <div className="py-4 xs:py-5 sm:py-6 border-t border-warm-gray-800 text-center text-xs xs:text-sm text-warm-gray-400">
          <p>© {currentYear} The PrettyPoint - Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}
