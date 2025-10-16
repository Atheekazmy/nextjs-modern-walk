import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
      <div className="mt-6 space-y-3 mx-auto">
        <Typography variant="h1" align="center">
          We couldn’t find that page
        </Typography>
        <Typography className="text-muted-foreground">
          The page you’re looking for doesn’t exist or was moved. Try going back
          to the homepage or explore our latest products.
        </Typography>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">Go to homepage</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/shop">Browse the shop</Link>
        </Button>
      </div>
    </main>
  );
}
