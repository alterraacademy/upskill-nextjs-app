import { TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { getDetailProducts } from "@/utils/apis/products";
import { auth } from "@/auth";

interface Params {
  product_id: string;
}

export default async function Page({
  params: { product_id },
}: {
  params: Params;
}) {
  const product = await getDetailProducts(product_id);
  const session = await auth();

  return (
    <div className="w-full h-full grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0 overflow-auto">
      <div className="grid gap-6">
        <Image
          src={product.data.image ?? ""}
          alt={product.data.name}
          width={600}
          height={600}
          priority
          className="rounded-lg object-contain w-full aspect-square"
        />
        <div className="grid gap-2">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <TagIcon className="w-4 h-4" />
            <Link
              className={badgeVariants({ variant: "outline" })}
              href={`/products?category=${product.data.category.name}`}
            >
              {product.data.category.name}
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-charcoal dark:text-antique-white">
            {product.data.name}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl text-charcoal/75 dark:text-antique-white/75">
              {product.data.price}
            </span>
            {session?.user?.role === "user" ? (
              <form>
                <Button size="lg">Add to Cart</Button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
      <div className="grid gap-4 text-sm leading-loose text-charcoal dark:text-antique-white whitespace-pre-wrap md:overflow-auto">
        <p>{product.data.description}</p>
      </div>
    </div>
  );
}
