import { CartExtend, CartSchema } from "@/utils/types/carts";
import Fetch from "./fetch";

export const getCart = async () => {
  try {
    const response = await Fetch.get<CartExtend>("/api/carts", {
      next: {
        tags: ["cart"],
      },
    });

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const AddItemToCart = async (data: CartSchema) => {
  const response = await Fetch.create<null>("/api/carts", {
    body: JSON.stringify(data),
  });

  return response;
};

export const editItemFromCart = async (path: number, data: CartSchema) => {
  const response = await Fetch.update<null>(`/api/carts/${path}`, {
    body: JSON.stringify(data),
  });

  return response;
};

export const removeItemFromCart = async (path: number) => {
  const response = await Fetch.delete<null>(`/api/carts/${path}`);

  return response;
};
