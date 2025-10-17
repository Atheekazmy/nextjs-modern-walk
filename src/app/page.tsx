"use client";

import ActionLabel from "@/components/common/action-label";
import ProductListSection from "@/components/common/product-list-section";
import { HeroSection } from "@/components/home/hero-section";
import { ShopByCategorySection } from "@/components/home/shop-by-category-section";
import { Spinner } from "@/components/ui/spinner";
import { productsApi } from "@/lib/api/product";
import {
  getFlashSaleProducts,
  getLatestProducts,
  getMostPopularProducts,
  mapProducts,
} from "@/utils/product-utils";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function Home() {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getAll,
  });
  const mappedProducts = useMemo(() => mapProducts(products ?? []), [products]);
  const flashSaleProducts = useMemo(
    () =>
      mappedProducts?.length ? getFlashSaleProducts(mappedProducts, 2) : [],
    [mappedProducts]
  );
  const mostPopularProducts = useMemo(
    () =>
      mappedProducts?.length ? getMostPopularProducts(mappedProducts, 4) : [],
    [mappedProducts]
  );

  const latestProducts = useMemo(
    () => (mappedProducts?.length ? getLatestProducts(mappedProducts, 8) : []),
    [mappedProducts]
  );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto ">
        <div className="flex flex-col items-start justify-center text-left">
          <HeroSection />
          {isPending ? (
            <div className="w-full h-full flex items-center justify-center gap-4 mt-24">
              <Spinner />
            </div>
          ) : (
            <>
              <ShopByCategorySection />
              <ProductListSection
                products={flashSaleProducts}
                title="Flash Sale"
              />

              <ProductListSection
                products={mostPopularProducts}
                title="Most Popular"
              />

              <div className=" w-full pb-[128px] px-[120px]"></div>
              <ProductListSection
                products={latestProducts}
                title="Latest Products"
                right={
                  <ActionLabel label="Browse All Products" redirectTo="/shop" />
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
