import { Product } from "@/lib/api/product";
import ProductCard from "@common/product-card";
import SectionHeader from "@common/section-header";
import { ReactNode } from "react";

export default function ProductListSection({
  products,
  title,
  right,
}: {
  products: Product[];
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="w-full pb-[128px] px-[120px]">
      <SectionHeader title={title} right={right} />
      <div className="w-full grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
