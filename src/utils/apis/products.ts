import { ProductExtend } from "../types/products";
import Fetch from "./fetch";

export const getProducts = async () => {
  try {
    const response = await Fetch.get<ProductExtend[]>("/api/products", {
      next: {
        tags: ["products"],
        revalidate: 30,
      },
    });

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getDetailProducts = async (product_id: string) => {
  try {
    const response = await Fetch.get<ProductExtend>(
      `/api/products${product_id}`,
      {
        next: {
          tags: [`products-${product_id}`],
          revalidate: 30,
        },
      }
    );

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
