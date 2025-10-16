import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function DropdownMenu({
  sortOption,
  label,
  items,
  onItemClick,
}: {
  sortOption: string;
  label: string;
  items: { label: string; value: string }[];
  onItemClick: (value: string) => void;
}) {
  return (
    <NavigationMenu className="border border-border rounded-md">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li className="p-2 gap-1">
                {items.map((item) => (
                  <NavigationMenuLink key={item.value}>
                    <div
                      className={`cursor-pointer ${
                        sortOption === item.value
                          ? "text-primary bg-accent"
                          : "text-foreground hover:bg-accent"
                      } py-2 px-4 rounded-md transition-all duration-300 hover:bg-accent`}
                      onClick={() => onItemClick(item.value)}
                    >
                      {item.label}
                    </div>
                  </NavigationMenuLink>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
