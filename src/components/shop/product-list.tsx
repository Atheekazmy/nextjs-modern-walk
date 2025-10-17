import React from "react";
import ProductCard from "@common/product-card";
import NoRecords from "@common/no-records";
import { PaginationComponent } from "@common/pagination";
import { Product } from "@/lib/api/product";

export default function ProductList({
  paginatedProducts,
  sortOption,
  currentPage,
  filteredAndSortedProducts,
  setCurrentPage,
}: {
  paginatedProducts: Product[];
  sortOption: string;
  currentPage: number;
  filteredAndSortedProducts: Product[];
  setCurrentPage: (page: number) => void;
}) {
  return (
    <div className="col-span-3 grid grid-cols-3 gap-6" key={sortOption}>
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-2 flex justify-center mt-12">
          <NoRecords
            title="No products found"
            description="Change your filters to find products"
          />
        </div>
      )}
      <div className="col-span-full flex justify-center mt-12">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={Math.ceil(filteredAndSortedProducts.length / 9)}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
