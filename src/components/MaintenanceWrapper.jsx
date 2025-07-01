import { useState, useEffect } from "react";
import { MaintenanceScreen } from "./MaintenanceScreen";

export function MaintenanceWrapper({ children }) {
  const [showMaintenance, setShowMaintenance] = useState(false);

  // Check if maintenance mode is enabled via environment variable
  const isMaintenanceModeEnabled =
    import.meta.env.VITE_MAINTENANCE_MODE === "true";

  useEffect(() => {
    const checkViewport = () => {
      if (!isMaintenanceModeEnabled) {
        setShowMaintenance(false);
        return;
      }

      const width = window.innerWidth;
      // Show maintenance screen BETWEEN mobile and desktop (425px - 1440px)
      // Allow normal website on very small mobile (<425px) and large desktop (>1440px)
      setShowMaintenance(width > 425 && width <= 1600);
    };

    checkViewport(); // Initial check
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [isMaintenanceModeEnabled]);

  if (showMaintenance) {
    return <MaintenanceScreen />;
  }

  return children;
}
