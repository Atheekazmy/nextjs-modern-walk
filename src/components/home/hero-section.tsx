import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import CountSummary from "@common/count-summary";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex flex-row items-start bg-muted  items-stretch w-full h-[700px]">
      <div className="flex flex-col items-start justify-center gap-4 gap-[64px] flex-1 pl-[120px]">
        <div className="flex flex-col items-start justify-center gap-4">
          <Typography variant="h1">
            Redefining Fashion <br /> with Modern Walk
          </Typography>
          <Typography variant="caption" color="muted">
            Step into timeless fashion made for today’s lifestyle.
          </Typography>
          <Button asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
        <div className="flex flex-row items-start justify-center gap-12">
          <CountSummary count="200+" title="International Brands" />
          <CountSummary count="2000+" title="High-Quality Products" />
          <CountSummary count="30000+" title="Happy Customers" />
        </div>
      </div>
      <div className="w-full relative flex-1">
        <Image
          src="/images/hero.png"
          alt="Hero background"
          fill
          className="object-cover"
          sizes="(min-width: 768px)"
        />
      </div>
    </div>
  );
}
