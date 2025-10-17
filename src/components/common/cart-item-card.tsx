"use client";
import { Typography } from "@/components/ui/typography";
import { CartItem, useCartStore } from "@/stores/use-cart-store";
import Image from "next/image";
import Counter from "./counter";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

export default function CartItemCard({ item }: { item: CartItem }) {
  const { updateItemQuantity, removeItem } = useCartStore();
  return (
    <div className="border border-border hover:border-primary rounded-lg p-6 flex flex-row gap-6 cursor-pointer transition-all duration-300">
      <div className="relative flex-1 h-36 mb-4 overflow-hidden">
        <Image
          src={item.image}
          alt="Sleeveless Blouse"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex  flex-2  flex-col gap-2  items-center justify-center ">
        <Typography variant="subtitle">{item.title}</Typography>

        <Typography variant="caption">Size: {item.size}</Typography>

        <Typography variant="caption">${item.price?.toFixed(2)}</Typography>
      </div>

      <div className="flex  flex-row items-center gap-2 ml-auto">
        <Counter
          quantity={item.quantity}
          setQuantity={(quantity) => updateItemQuantity(item.id, quantity)}
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeItem(item.id)}
        >
          <Trash className="text-red-500" />
        </Button>
      </div>
    </div>
  );
}
