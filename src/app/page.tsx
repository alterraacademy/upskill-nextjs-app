import { LaptopIcon, ComputerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { addItemToCart } from "@/utils/actions/cart";
import { getProducts } from "@/utils/apis/products";
import { formatCurrency } from "@/utils/functions";

export default async function Home() {
  const result = await getProducts();

  return (
    <main>
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            width="550"
            src="/placeholder.svg"
            priority
          />
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Upgrade Your Tech with Acme Computers
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the latest and greatest in computer technology. Shop
                our wide selection of laptops, desktops, and accessories.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Featured Products
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out our latest and greatest computer products.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {result.data.slice(0, 3).map((product) => (
              <Card key={product.id}>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <Image
                    alt="Product"
                    className="aspect-square rounded-md object-contain"
                    width="150"
                    height="150"
                    src={product.image ?? "/placeholder.svg"}
                  />
                  <div className="space-y-1 text-center">
                    <Link
                      className="text-lg font-medium"
                      href={`/products/${product.id}`}
                    >
                      {product.name}
                    </Link>
                    <p className="text-gray-500 dark:text-gray-400">
                      {formatCurrency(+product.price)}
                    </p>
                  </div>
                  <form action={addItemToCart}>
                    <Input type="hidden" name="product_id" value={product.id} />
                    <Button type="submit" size="sm">
                      Add to Cart
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Shop by Category
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse our selection of computer products by category.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link
              className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <LaptopIcon className="h-12 w-12 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                Laptops
              </span>
            </Link>
            <Link
              className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <ComputerIcon className="h-12 w-12 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                Desktops
              </span>
            </Link>
            <Link
              className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <ComputerIcon className="h-12 w-12 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                Accessories
              </span>
            </Link>
            <Link
              className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <ComputerIcon className="h-12 w-12 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                Peripherals
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Upgrade Your Tech Today
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Dont settle for less, get the best computer technology for your
              needs.
            </p>
          </div>
          <div className="rounded-lg bg-gray-900 p-6 sm:p-8 md:p-12">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-50">
                  Get the latest tech
                </h3>
                <p className="text-gray-400">
                  Shop our selection of the newest and most powerful computer
                  products.
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
