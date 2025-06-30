import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const Text_ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    className="inline-flex items-center gap-1 text-gray-600 hover:text-violet-700 transition-colors duration-200 no-underline group"
  >
    <span className="underline underline-offset-3 decoration-1 decoration-violet-400">
      {children}
    </span>
    <ExternalLink className="w-3 h-3 text-violet-500 group-hover:text-violet-700 transition-colors duration-200" />
  </Link>
);
