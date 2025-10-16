import { ActionLabel } from "@common/action-label";
import { ImageTile } from "@common/image-tile";
import { SectionHeader } from "@common/section-header";

export function ShopByCategorySection() {
  return (
    <div className="w-full py-[128px] px-[120px] flex flex-col ">
      <SectionHeader
        title="Shop By Category"
        right={<ActionLabel label="Browse All Categories" />}
      />
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-6">
        <ImageTile
          title="New Arrival"
          src="/images/new-arrival.png"
          alt="New arrival category"
          className="row-span-2"
        />
        <ImageTile
          title="Women's Clothing"
          src="/images/women-clothing.png"
          alt="Women clothing category"
          className="h-64"
        />
        <ImageTile
          title="Men's Clothing"
          src="/images/men-clothing.png"
          alt="Men clothing category"
          className="h-64"
        />
      </div>
    </div>
  );
}
