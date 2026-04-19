import logoImg from "@/assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const Logo = ({ size = "sm" }: LogoProps) => {
  const h = size === "lg" ? "h-24" : size === "md" ? "h-16" : "h-12";
  return (
    <img
      src={logoImg}
      alt="First Go Services — Hire best, with us"
      className={`${h} w-auto object-contain border-none bg-deep border-deep text-4xl`}
    />
  );
};

export default Logo;
