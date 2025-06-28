export function BookingProvider({ children }) {
  // Cal.com API is now initialized directly in BookingSection
  // This provider just wraps the app for future Cal.com features
  return <>{children}</>;
}
