"use client";
import Counter from "@/components/common/counter";
import NoRecords from "@/components/common/no-records";
import { PageBreadcrumb } from "@/components/common/page-breadcrumb";
import ProductListSection from "@/components/common/product-list-section";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Typography } from "@/components/ui/typography";
import { productsApi } from "@/lib/api/product";
import { useCartStore } from "@/stores/use-cart-store";
import { getRelatedProducts } from "@/utils/product-utils";
import { useQuery } from "@tanstack/react-query";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const [selectedSize, setSelectedSize] = useState<
    "Small" | "Medium" | "Large"
  >("Small");
  const [quantity, setQuantity] = useState<number>(1);
  const { addItem } = useCartStore();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productsApi.getById(Number(productId)),
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi.getAll(),
  });

  const relatedProducts = useMemo(
    () =>
      products?.length && productId && product?.category
        ? getRelatedProducts(products, [Number(productId)], [product?.category])
        : [],
    [products, productId, product?.category]
  );

  if (error) return <div>Error: {error?.message}</div>;
  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center gap-4 py-[128px]">
        <Spinner />
      </div>
    );

  if (!product)
    return (
      <div className="col-span-2 flex justify-center mt-12">
        <NoRecords />
      </div>
    );

  const onAddToCart = () => {
    addItem({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      quantity: quantity,
      image: product?.image,
      size: selectedSize,
      category: product?.category,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto p-[120px]">
        <PageBreadcrumb
          breadcrumbs={[
            { label: "Shop", href: "/shop" },
            { label: product?.category ?? "", href: `/shop` },
            { label: product?.title, href: `/product/${productId}` },
          ]}
        />
      </div>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center gap-4">
          <Spinner />
        </div>
      ) : (
        <div className="w-full h-full flex  justify-start gap-4 mx-auto px-[120px] mb-[120px]">
          <div className="flex flex-1 gap-6 ">
            <div className="flex flex-col gap-4  ">
              <div className="relative w-40 h-40  overflow-hidden border border-border rounded-lg">
                <Image
                  src={product?.image}
                  alt="Sleeveless Blouse"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative  w-40  h-40  overflow-hidden border border-border rounded-lg">
                <Image
                  src={product?.image}
                  alt="Sleeveless Blouse"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative  w-40  h-40  overflow-hidden border border-border rounded-lg">
                <Image
                  src={product?.image}
                  alt="Sleeveless Blouse"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="relative   flex-1 overflow-hidden border border-border rounded-lg">
              <Image
                src={product?.image}
                alt="Sleeveless Blouse"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4 mt-6">
            <div className="flex flex-col gap-4 border-b border-border pb-4">
              <Typography variant="h2" fullWidth={false}>
                {product?.title}
              </Typography>
              <div className="flex flex-row items-center gap-2">
                <Star fill="currentColor" className="w-6 h-6 text-yellow-500" />
                <Typography variant="caption">
                  {product.rating.rate}/5
                </Typography>
              </div>
              <Typography variant="h3" className="font-semibold">
                ${product?.price.toFixed(2)}
              </Typography>
              <Typography variant="label" color="muted" className="mb-10">
                {product.description}
              </Typography>
            </div>
            <div className="flex flex-col gap-2 border-b border-border pb-8">
              <Typography variant="label" color="muted">
                Select Size
              </Typography>
              <div className="flex flex-row items-center gap-4 mt-2">
                <Button
                  variant={selectedSize === "Small" ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedSize("Small")}
                >
                  Small
                </Button>

                <Button
                  variant={selectedSize === "Medium" ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedSize("Medium")}
                >
                  Medium
                </Button>

                <Button
                  variant={selectedSize === "Large" ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedSize("Large")}
                >
                  Large
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <Counter quantity={quantity} setQuantity={setQuantity} />
              <Button
                variant="default"
                disabled={!selectedSize || quantity === 0}
                onClick={onAddToCart}
                className="w-full gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Plus className="w-6 h-6 " /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full pb-[128px] px-[120px]">
        <SectionHeader title="Description" />
        <Typography variant="label" color="muted">
          {product.description}
        </Typography>
      </div>
      <ProductListSection products={relatedProducts} title="Related Products" />
    </div>
  );
}
