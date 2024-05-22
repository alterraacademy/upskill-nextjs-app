import { SearchIcon, LaptopIcon } from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <LaptopIcon className="h-6 w-6" />
          <span className="font-bold">Upskill Store</span>
        </Link>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full rounded-md bg-gray-100 pl-10 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-950"
            placeholder="Search products..."
            type="search"
          />
        </div>
        <nav className="hidden gap-4 md:flex">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Laptops
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Desktops
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Accessories
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/cart"
          >
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
