import logoImg from "@/assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const Logo = ({ size = "sm" }: LogoProps) => {
  const h =
    size === "lg"
      ? "h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
      : size === "md"
      ? "h-12 sm:h-14 md:h-16 lg:h-20"
      : "h-8 sm:h-10 md:h-12 lg:h-14";
  return (
    <img
      src={logoImg}
      alt="First Go Services — Hire best, with us"
      className={`${h} w-auto border-none border-deep font-normal text-9xl object-fill bg-deep`}
    />
  );
};

export default Logo;
