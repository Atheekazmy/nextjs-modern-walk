"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Product } from "@/lib/api/product";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div
      className="border border-border hover:border-primary rounded-lg p-4 flex flex-col gap-2 cursor-pointer transition-all duration-300"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative w-full h-64 mb-4  overflow-hidden">
        <Image
          src={product.image}
          alt="Sleeveless Blouse"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Typography variant="subtitle">{product.title}</Typography>
      <div className="flex flex-row items-center justify-between gap-2 mt-1">
        <Typography variant="caption">${product.price?.toFixed(2)}</Typography>
        <div className="flex flex-row items-center gap-2">
          <Star fill="currentColor" className="w-6 h-6 text-yellow-500" />
          <Typography variant="caption">{product.rating.rate}/5</Typography>
        </div>
      </div>
      <Typography variant="label" color="muted" className="mb-10">
        {product.description.slice(0, 100)}...
      </Typography>
      <div className="mt-auto">
        <Button
          variant="secondary"
          className="w-full gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          <Plus className="w-6 h-6 " /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
