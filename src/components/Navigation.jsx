import React from "react";
import { navigationData } from "@/data/navigationData";
import { ServiceDialog } from "@/features/services";
import { Button } from "@/components/ui/button";

export function Navigation({ isMobile = false, onNavItemClick }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (onNavItemClick) {
      onNavItemClick();
    }
  };

  const baseClasses = "transition-colors duration-200";
  const mobileClasses =
    "flex items-center justify-between w-full px-3 py-3 text-lg font-medium text-warm-gray-700 hover:text-bordeaux-600 hover:bg-warm-gray-50 rounded-md";
  const desktopClasses = "text-black hover:text-gray-700 font-medium text-lg";

  if (isMobile) {
    return (
      <nav className="space-y-1">
        {navigationData.map((item) => (
          <React.Fragment key={item.label}>
            {/* Main Navigation Item */}
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`${baseClasses} ${mobileClasses}`}
            >
              <span>{item.label}</span>
            </a>

            {/* Sub Navigation Items, rendered directly */}
            {item.subItems && (
              <div className="pl-4 pt-1 pb-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <ServiceDialog
                    key={subItem.label}
                    serviceType={subItem.serviceType}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-3 py-2 text-base font-medium text-warm-gray-600 hover:text-bordeaux-600 hover:bg-warm-gray-100"
                      onClick={onNavItemClick}
                    >
                      {subItem.label}
                    </Button>
                  </ServiceDialog>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }

  // Desktop Navigation
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationData.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href)}
          className={`${baseClasses} ${desktopClasses}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
