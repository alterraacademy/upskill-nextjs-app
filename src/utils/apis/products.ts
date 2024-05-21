import { IResponse, IResponsePagination } from "../types/api";
import { ProductExtend } from "../types/products";

export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      next: { tags: ["products"], revalidate: 30 },
    });
    const result = await response.json();

    return result as IResponsePagination<ProductExtend[]>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getDetailProducts = async (product_id: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/${product_id}`,
      {
        next: { tags: [`products-${product_id}`] },
      }
    );
    const result = await response.json();

    return result as IResponse<ProductExtend>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
