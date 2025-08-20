export function BookingProvider({ children }) {
  // Legacy provider - no longer needed with Doctolib external booking
  // Keeping for backwards compatibility, remove in future cleanup
  return <>{children}</>;
}
