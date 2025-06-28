import logoWhite from "@/assets/LogoWhite.png";
import OptimizedImage from "@/components/ui/OptimizedImage";

export function IntroSplash({ isFading }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F9F6F4] transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <OptimizedImage
        src={logoWhite}
        alt="The PrettyPoint Logo"
        className="w-48 h-auto"
      />
    </div>
  );
}
