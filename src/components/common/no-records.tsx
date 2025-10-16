import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Shirt } from "lucide-react";

export default function NoRecords() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Shirt />
        </EmptyMedia>
        <EmptyTitle>No products found</EmptyTitle>
        <EmptyDescription>
          Change your filters to find products
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
