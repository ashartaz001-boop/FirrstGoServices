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
      className={`${h} w-auto border-none border-deep font-normal text-9xl object-fill bg-neutral-300/0`}
    />
  );
};

export default Logo;
