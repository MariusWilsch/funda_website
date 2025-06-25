export function Navigation({ isMobile = false, isTransparent = false }) {
  const navItems = [
    { label: "Behandlungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" },
  ];

  const baseClasses = "transition-colors duration-200";
  const mobileClasses =
    "block px-3 py-3 text-lg font-medium text-warm-gray-700 hover:text-bordeaux-600 hover:bg-warm-gray-50 rounded-md";
  const desktopClasses = isTransparent
    ? "text-white hover:text-warm-gray-200 font-medium text-lg"
    : "text-warm-gray-700 hover:text-bordeaux-600 font-medium text-lg";

  return (
    <nav
      className={
        isMobile ? "space-y-1" : "hidden md:flex items-center space-x-8"
      }
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`${baseClasses} ${
            isMobile ? mobileClasses : desktopClasses
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
