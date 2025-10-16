import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl leading-normal font-bold text-balance",
      h2: "text-3xl leading-normal font-bold text-balance",
      h3: "text-2xl leading-normal font-bold text-balance",
      h4: "text-xl leading-normal font-bold text-balance",
      h5: "text-lg leading-normal font-bold text-balance",
      h6: "text-base leading-normal font-bold text-balance",
      caption: "text-base text-muted-foreground",
      label: "text-sm font-medium",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "caption",
    fullWidth: true,
    align: "left",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "p" | "span" | "div";
  align?: "left" | "center" | "right";
}

export function Typography({
  className,
  variant,
  fullWidth,
  as,
  children,
  align,
  ...props
}: TypographyProps) {
  const Component =
    as || (variant === "h1" ? "h1" : variant === "h2" ? "h2" : "p");

  return (
    <Component
      className={cn(
        typographyVariants({ variant, fullWidth, align }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
