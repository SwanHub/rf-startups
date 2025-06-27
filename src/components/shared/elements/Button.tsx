import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
      default: "bg-violet-600 text-white hover:bg-violet-700",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    };

    const sizeClasses = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md text-sm",
      lg: "h-11 px-8 rounded-md text-base",
    };

    const combinedClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    const Comp = asChild ? (
      React.cloneElement(React.Children.only(children as React.ReactElement), {
        className: combinedClasses,
        ...props,
      } as any)
    ) : (
      <button className={combinedClasses} ref={ref} {...props}>
        {children}
      </button>
    );

    return Comp;
  }
);

Button.displayName = "Button";

export { Button };
