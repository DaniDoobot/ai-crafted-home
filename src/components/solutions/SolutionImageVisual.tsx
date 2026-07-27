interface SolutionImageVisualProps {
  src: string;
  alt: string;
  variant?: "hero" | "capability";
  embeddedFrame?: boolean;
  className?: string;
  priority?: boolean;
  maxWidth?: string;
  maxHeight?: string;
}

export function SolutionImageVisual({
  src,
  alt,
  variant = "capability",
  embeddedFrame = true,
  className = "",
  priority = false,
  maxWidth,
  maxHeight,
}: SolutionImageVisualProps) {
  const sizeClasses =
    maxWidth ??
    (variant === "hero"
      ? "max-w-[480px] sm:max-w-[520px] lg:max-w-[560px]"
      : "max-w-[220px] sm:max-w-[280px] lg:max-w-[330px] xl:max-w-[350px]");

  const imgMaxHeightClass =
    maxHeight ??
    (variant === "hero"
      ? "max-h-[480px] lg:max-h-[520px]"
      : "max-h-[240px] sm:max-h-[270px] lg:max-h-[300px]");

  if (embeddedFrame) {
    return (
      <div className={`mx-auto w-full text-center ${sizeClasses} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`mx-auto h-auto w-full ${imgMaxHeightClass} object-contain block drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]`}
        />
      </div>
    );
  }

  return (
    <div
      className={`mx-auto w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 p-2 sm:p-3 shadow-sm ${sizeClasses} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`mx-auto h-auto w-full ${imgMaxHeightClass} rounded-xl object-contain block`}
      />
    </div>
  );
}
