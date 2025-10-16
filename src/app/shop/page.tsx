"use client";
import DropdownMenu from "@/components/common/dropdown-menu";
import { PageBreadcrumb } from "@/components/common/page-breadcrumb";
import SectionHeader from "@/components/common/section-header";
import CategoriesFilter from "@/components/shop/categories-filter";
import ProductList from "@/components/shop/product-list";
import { Spinner } from "@/components/ui/spinner";
import { Product, productsApi } from "@/lib/api/product";
import { useShopStore } from "@/stores/use-shop-store";
import { getProductCategories, mapProducts } from "@/utils/product-utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getAll,
  });
  const [sortOption, setSortOption] = useState("most-popular");
  const [currentPage, setCurrentPage] = useState(1);
  const { categories, setCategories } = useShopStore();
  const sortOptions = useMemo(
    () => [
      { label: "Most Popular", value: "most-popular" },
      { label: "Best Rating", value: "top-rated" },
      { label: "Recent", value: "most-recent" },
      { label: "Price: Low to High", value: "price-low-to-high" },
      { label: "Price: High to Low", value: "price-high-to-low" },
    ],
    []
  );
  const mappedProducts = useMemo(() => mapProducts(products ?? []), [products]);

  const productCategories = useMemo(
    () => getProductCategories(mappedProducts ?? []),
    [mappedProducts]
  );

  const filteredAndSortedProducts = useMemo(() => {
    if (!mappedProducts?.length) return [];

    const filteredProducts =
      categories.length === 1 && categories[0] === "new-arrival"
        ? mappedProducts
        : mappedProducts.filter((product: Product) =>
            categories.includes(product.category)
          );

    return [...filteredProducts].sort((a: Product, b: Product) => {
      switch (sortOption) {
        case "most-popular":
          return b.rating.count - a.rating.count;
        case "top-rated":
          return b.rating.rate - a.rating.rate;
        case "most-recent":
          return (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);
        case "price-low-to-high":
          return a.price - b.price;
        case "price-high-to-low":
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [mappedProducts, sortOption, categories]);

  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [sortOption, categories, currentPage]);

  const paginatedProducts = useMemo(() => {
    return filteredAndSortedProducts.slice(
      (currentPage - 1) * 9,
      currentPage * 9
    );
  }, [filteredAndSortedProducts, currentPage]);

  const handleCategoryChange = (category: string) => {
    if (!categories.includes(category)) {
      setCategories([category, ...categories]);
    } else {
      setCategories(categories.filter((c) => c !== category));
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto p-[120px]">
        <PageBreadcrumb breadcrumbs={[{ label: "Shop", href: "/shop" }]} />

        <SectionHeader
          title="Shop"
          right={
            <div className="flex flex-row items-center justify-center gap-4">
              <DropdownMenu
                sortOption={sortOption}
                label="Sort"
                items={sortOptions}
                onItemClick={setSortOption}
              />
            </div>
          }
        />
        {isPending ? (
          <div className="w-full h-full flex items-center justify-center gap-4">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6 border-t border-border pt-12">
            <CategoriesFilter
              productCategories={productCategories}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
            />

            <ProductList
              paginatedProducts={paginatedProducts}
              sortOption={sortOption}
              currentPage={currentPage}
              filteredAndSortedProducts={filteredAndSortedProducts}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
