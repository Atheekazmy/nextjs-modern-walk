"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import ActionLabel from "./action-label";

type ImageTileProps = {
  title: string;
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  onClick?: () => void;
};

export function ImageTile({
  title,
  src,
  alt,
  className,
  sizes = "(min-width: 768px)",
  onClick,
}: ImageTileProps) {
  return (
    <div
      className={cn(
        "w-full bg-muted rounded-lg relative overflow-hidden",
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      <div className="absolute bottom-0 left-0 p-8">
        <Typography variant="h3" className=" text-primary-foreground text-left">
          {title}
        </Typography>
        <ActionLabel
          label="Shop Now"
          className="mt-2 justify-start text-primary-foreground hover:underline"
          onClick={onClick}
          redirectTo="/shop"
        />
      </div>
    </div>
  );
}
