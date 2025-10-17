import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export default function Counter({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) {
  return (
    <div className="flex flex-row items-center gap-2 rounded-sm p-1 bg-accent">
      <Button
        variant="outline"
        size="icon"
        disabled={quantity === 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        <Minus />
      </Button>
      <Typography variant="label" className="px-2">
        {quantity}
      </Typography>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus />
      </Button>
    </div>
  );
}
