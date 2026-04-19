interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const Logo = ({ size = "sm", showTagline = true }: LogoProps) => {
  const dims = size === "lg" ? { w: 64, h: 76, text: "text-2xl", tag: "text-sm" }
    : size === "md" ? { w: 48, h: 56, text: "text-lg", tag: "text-[0.75rem]" }
    : { w: 40, h: 48, text: "text-[1.02rem]", tag: "text-[0.65rem]" };

  return (
    <div className="flex items-center gap-2.5">
      <svg width={dims.w} height={dims.h} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        {/* Stylized F with arrow/flag mark */}
        <path d="M4 4 L36 4 L36 12 L14 12 L14 22 L30 22 L30 30 L14 30 L14 44 L4 44 Z" fill="hsl(var(--foreground))" />
        <path d="M28 6 L38 16 L34 20 L28 14 Z" fill="hsl(var(--primary))" />
        <circle cx="34" cy="38" r="4" fill="hsl(var(--primary))" />
      </svg>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className={`font-sans-brand font-bold ${dims.text} tracking-[0.13em] text-white uppercase`}>
          F<span className="text-primary">1</span>RST GO SERVICES
        </span>
        {showTagline && (
          <span className={`font-display italic ${dims.tag} text-primary tracking-[0.04em]`}>
            Hire best, with us
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
