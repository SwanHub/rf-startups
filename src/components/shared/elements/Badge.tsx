import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center tracking-[0.4px] font-medium rounded-sm px-2 py-1.5 text-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
      default: "bg-violet-600 text-white hover:bg-violet-700",
      secondary: "bg-violet-100 text-violet-800",
      outline: "border border-gray-300 text-gray-700",
    };

    const combinedClasses = [baseClasses, variantClasses[variant], className]
      .filter(Boolean)
      .join(" ");

    return <div ref={ref} className={`${combinedClasses}`} {...props} />;
  }
);

Badge.displayName = "Badge";

export { Badge };
