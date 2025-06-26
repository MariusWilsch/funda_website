import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BookingProvider({ children }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      // Configure UI theme using the cal instance
      cal("ui", {
        styles: {
          branding: {
            brandColor: "#5c2a3a", // Bordeaux primary color to match website theme
          },
        },
        theme: "light", // Light theme to complement warm cream background
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      console.log("Cal.com API configured");
    })();

    // Preload using the global Cal API (separate from getCalApi)
    // This runs after the API is available
    const preloadTimer = setTimeout(() => {
      if (window.Cal) {
        window.Cal("preload", { calLink: "mariuswilsch/coffee-break" });
        console.log("Cal.com preload executed");
      }
    }, 1000); // Small delay to ensure Cal API is ready

    return () => clearTimeout(preloadTimer);
  }, []);

  return <>{children}</>;
}
