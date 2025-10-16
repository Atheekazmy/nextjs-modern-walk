"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Typography } from "@/components/ui/typography";

type SectionHeaderProps = {
  title: string;
  right?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function SectionHeader({
  title,
  right,
  className,
  ...rest
}: SectionHeaderProps) {
  return (
    <div
      className={`w-full  flex flex-row items-center justify-between items-stretch ${
        className ?? ""
      }`}
      {...rest}
    >
      <Typography variant="h2" fullWidth={false}>
        {title}
      </Typography>
      {right ? right : null}
    </div>
  );
}

export default SectionHeader;
