import logo from "@/assets/falcon-icon.png";

export const Logo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <img
    src={logo}
    alt="Falcon Geosolutions"
    className={`${className} object-contain drop-shadow-[0_4px_18px_rgba(255,106,26,0.35)]`}
  />
);
