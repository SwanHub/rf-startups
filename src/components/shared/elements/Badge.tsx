import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
      default: "bg-violet-600 text-white hover:bg-violet-700",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border border-gray-300 text-gray-700",
    };

    const combinedClasses = [baseClasses, variantClasses[variant], className]
      .filter(Boolean)
      .join(" ");

    return <div ref={ref} className={combinedClasses} {...props} />;
  }
);

Badge.displayName = "Badge";

export { Badge };
