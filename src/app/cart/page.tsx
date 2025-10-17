"use client";
import CartItemCard from "@/components/common/cart-item-card";
import ErrorState from "@/components/common/error-state";
import NoRecords from "@/components/common/no-records";
import { PageBreadcrumb } from "@/components/common/page-breadcrumb";
import ProductListSection from "@/components/common/product-list-section";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Typography } from "@/components/ui/typography";
import { productsApi } from "@/lib/api/product";
import { useCartStore } from "@/stores/use-cart-store";
import { getRelatedProducts } from "@/utils/product-utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";

export default function Page() {
  const { items: cartItems, taxPercentage, getTotalPrice } = useCartStore();
  const { error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getAll,
  });

  const shippingFee = 5;

  const relatedProducts = useMemo(
    () =>
      products?.length
        ? getRelatedProducts(
            products,
            cartItems?.map((x) => x.id),
            cartItems?.map((x) => x.category)
          )
        : [],
    [products, cartItems]
  );

  const totalPrice = getTotalPrice();
  const taxAmount = totalPrice * taxPercentage;

  if (error)
    return (
      <div className="min-h-64 bg-background text-foreground flex items-center justify-center p-6">
        <ErrorState
          title="Failed to load cart items"
          description={error instanceof Error ? error.message : undefined}
        />
      </div>
    );

  if (!cartItems?.length)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center mt-12">
        <NoRecords
          title="No items in cart"
          description="Add items to your cart to see your order summary"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Go to homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/shop">Browse the shop</Link>
          </Button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto p-[120px] ">
        <PageBreadcrumb breadcrumbs={[{ label: "Cart", href: "/cart" }]} />

        <SectionHeader title="Shopping Cart" />

        <div className="flex flex-row w-full border-t border-border pt-12 gap-6">
          <div className="flex flex-col gap-4 flex-1">
            {cartItems.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:w-2/5 w-full  h-fit  rounded-lg p-6 bg-muted">
            <Typography variant="h3">Order Summary</Typography>

            <div className="flex flex-row gap-2 border-b border-border pb-4 justify-between">
              <Typography variant="caption" color="muted">
                Subtotal:
              </Typography>
              <Typography variant="caption" color="muted" fullWidth={false}>
                ${totalPrice.toFixed(2)}
              </Typography>
            </div>
            <div className="flex flex-row gap-2 border-b border-border pb-4">
              <Typography variant="caption" color="muted">
                Shipping:
              </Typography>
              <Typography variant="caption" color="muted" fullWidth={false}>
                ${shippingFee.toFixed(2)}
              </Typography>
            </div>
            <div className="flex flex-row gap-2 border-b border-border pb-4">
              <Typography variant="caption" color="muted">
                Tax ({taxPercentage * 100}%):
              </Typography>
              <Typography variant="caption" color="muted" fullWidth={false}>
                ${taxAmount.toFixed(2)}
              </Typography>
            </div>
            <div className="flex flex-row gap-2 mb-8">
              <Typography
                variant="caption"
                color="primary"
                className="font-semibold"
              >
                Grand Total:
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                className="font-semibold"
                fullWidth={false}
              >
                ${(totalPrice + shippingFee + taxAmount).toFixed(2)}
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <Button
                variant="default"
                className="w-full gap-2  transition-all duration-200"
              >
                Go to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ProductListSection
        products={relatedProducts}
        title="You May Also Like"
      />
      <Toaster />
    </div>
  );
}
