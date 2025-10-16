"use client";

import CountSummary from "@common/count-summary";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ImageTile } from "@common/image-tile";
import { SectionHeader } from "@common/section-header";
import { ActionLabel } from "@common/action-label";
import { productsApi } from "@/lib/api/product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const { isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getAll,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto ">
        <div className="flex flex-col items-start justify-center text-left">
          <div className="flex flex-row items-start bg-muted  items-stretch w-full h-[700px]">
            <div className="flex flex-col items-start justify-center gap-4 gap-[64px] flex-1 pl-[120px]">
              <div className="flex flex-col items-start justify-center gap-4">
                <Typography variant="h1">
                  Redefining Fashion <br /> with Modern Walk
                </Typography>
                <Typography variant="caption">
                  Step into timeless fashion made for today’s lifestyle.
                </Typography>
                <Button>Shop Now</Button>
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
          <div className="w-full py-[128px] px-[120px] flex flex-col gap-8">
            <SectionHeader
              title="Shop By Category"
              right={<ActionLabel label="Browse All Categories" />}
            />
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-6">
              <ImageTile
                title="New Arrival"
                src="/images/new-arrival.png"
                alt="New arrival category"
                className="row-span-2"
              />
              <ImageTile
                title="Women's Clothing"
                src="/images/women-clothing.png"
                alt="Women clothing category"
                className="h-64"
              />
              <ImageTile
                title="Men's Clothing"
                src="/images/men-clothing.png"
                alt="Men clothing category"
                className="h-64"
              />
            </div>
          </div>
          <div className="w-full pb-[128px] px-[120px]">
            <SectionHeader title="Flash Sale" />
          </div>
          <div className=" w-full pb-[128px] px-[120px]">
            <SectionHeader title="Most Popular" />
          </div>
          <div className=" w-full pb-[128px] px-[120px]"></div>
          <div className=" w-full pb-[128px] px-[120px]">
            <SectionHeader
              title="Latest Products"
              right={<ActionLabel label="Browse All Products" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
