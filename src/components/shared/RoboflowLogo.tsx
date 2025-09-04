import Image from "next/image";
import Link from "next/link";

export const RoboflowLogo = ({
  inverted = false,
  priority = true,
  tag,
}: {
  inverted?: boolean;
  priority?: boolean;
  tag?: string;
}) => {
  const logoSrc = inverted
    ? "/logos/roboflow-logo-white.png"
    : "/logos/roboflow-logo.png";
  return (
    <div className="flex flex-row items-center relative">
      <Link href={"https://roboflow.com"} className="flex w-full relative z-10">
        <Image
          src={logoSrc}
          alt="Roboflow Logo"
          className="object-contain"
          width={120}
          height={22}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
        {!!tag && (
          <span className="absolute -top-3 -right-4 text-xs font-medium text-violet-600">
            {tag}
          </span>
        )}
      </Link>
    </div>
  );
};
