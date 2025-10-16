import Link from "next/link";
import { Typography } from "./ui/typography";
import { Icon, Plus, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { InputGroup, InputGroupInput, InputGroupAddon } from "./ui/input-group";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full h-[100px] bg-background px-[120px] py-6 border-b border-border">
      <div>
        {" "}
        <Link href="/">
          <Typography variant="h2" className="cursor-pointer">
            MW.
          </Typography>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <Link href="/shop">Shop</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <InputGroup className="w-[380px]">
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 text-foreground gap-8 ">
        <Link href="/cart">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
        </Link>
        <User className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};
