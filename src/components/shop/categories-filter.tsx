import React from "react";
import { Typography } from "@/components/ui/typography";
import CheckboxWithLabel from "@/components/common/checkbox-with-label";

export default function CategoriesFilter({
  productCategories,
  categories,
  handleCategoryChange,
}: {
  productCategories: { label: string; value: string }[];
  categories: string[];
  handleCategoryChange: (category: string) => void;
}) {
  return (
    <div className="col-span-1 sticky top-40 h-fit">
      <Typography variant="subtitle">Category</Typography>
      <div className="flex flex-col gap-2 mt-6">
        {productCategories.map((category) => (
          <CheckboxWithLabel
            key={category.value}
            id={category.value}
            label={category.label}
            checked={categories.includes(category?.value)}
            onChange={() => handleCategoryChange(category.value)}
          />
        ))}
      </div>
    </div>
  );
}
