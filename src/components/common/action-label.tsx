"use client";

import { Typography } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import { ComponentType, HTMLAttributes } from "react";
import Link from "next/link";

type ActionLabelProps = {
  label: string;
  redirectTo: string;
  IconComponent?: ComponentType<{ className?: string }>;
} & HTMLAttributes<HTMLDivElement>;

export function ActionLabel({
  label,
  IconComponent = ChevronRight,
  className,
  redirectTo,
  ...rest
}: ActionLabelProps) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-1 ${
        className ?? ""
      }`}
      {...rest}
    >
      <Link href={redirectTo}>
        <Typography variant="label">{label}</Typography>
      </Link>
      <Link href={redirectTo}>
        <IconComponent />
      </Link>
    </div>
  );
}

export default ActionLabel;
