import logoImg from "@/assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const Logo = ({ size = "sm", showTagline = true }: LogoProps) => {
  const h =
    size === "lg"
      ? "h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
      : size === "md"
      ? "h-12 sm:h-14 md:h-16 lg:h-20"
      : "h-8 sm:h-10 md:h-12 lg:h-14";

  const taglineSize =
    size === "lg"
      ? "text-xs sm:text-sm md:text-base"
      : size === "md"
      ? "text-[0.7rem] sm:text-xs md:text-sm"
      : "text-[0.6rem] sm:text-[0.65rem] md:text-xs";

  return (
    <div className="inline-flex flex-col items-center gap-1">
      <img
        src={logoImg}
        alt="First Go Services — Hire Best With Us"
        className={`${h} w-auto border-none font-normal object-contain bg-transparent`}
      />
      {showTagline && (
        <span
          className={`${taglineSize} tracking-[0.18em] uppercase text-primary font-medium`}
        >
          Hire Best With Us
        </span>
      )}
    </div>
  );
};

export default Logo;
