import logoImg from "@/assets/logo.jpg";

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
      className={`${h} w-auto object-contain bg-secondary border-none text-base`}
    />
  );
};

export default Logo;
