import { ProductCard } from "@/components/product-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { getProducts } from "@/utils/apis/products";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data, metadata } = await getProducts();
  const pageNumber = searchParams["page"] ?? "1";

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            href={`/products/${product.id}`}
            className="w-full"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${+pageNumber - 1}`}
              aria-disabled={+pageNumber == 1}
              tabIndex={+pageNumber == 1 ? -1 : undefined}
              className={
                +pageNumber == 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`?page=${+pageNumber + 1}`}
              aria-disabled={
                +pageNumber === metadata?.total_pages ||
                metadata?.total_pages === 0
              }
              tabIndex={
                +pageNumber === metadata?.total_pages ||
                metadata?.total_pages === 0
                  ? -1
                  : undefined
              }
              className={
                +pageNumber === metadata?.total_pages ||
                metadata?.total_pages === 0
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
