import React from "react";
import { navigationData } from "@/data/navigationData";
import { ServiceDialog } from "@/features/services";
import { Button } from "@/components/ui/button";
import { handleSmoothScroll } from "@/lib/utils";

export function Navigation({ isMobile = false, onNavItemClick }) {
  const handleNavClick = (e, href) => {
    handleSmoothScroll(e, href);
    if (onNavItemClick) {
      onNavItemClick();
    }
  };

  const baseClasses = "transition-colors duration-200";
  const mobileClasses =
    "flex items-center justify-between w-full px-3 py-3 text-lg font-medium text-warm-gray-700 hover:text-bordeaux-600 hover:bg-warm-gray-50 rounded-md";
  const desktopClasses =
    "text-black hover:text-gray-700 font-medium text-sm lg:text-base xl:text-lg";

  console.log("isMobile:", isMobile);

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
    <nav className="hidden lg:flex items-center space-x-8">
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
