"use server";

import { redirect } from "next/navigation";

import {
  AddItemToCart,
  editItemFromCart,
  removeItemFromCart,
} from "../apis/cart";
import { revalidateTag } from "next/cache";
import { CartSchema } from "../types/carts";

export async function addItemToCart(formData: FormData) {
  const payload = {
    product_id: formData.get("product_id") as string,
    quantity: 1,
  };

  AddItemToCart(payload);

  revalidateTag("cart");
  redirect("/cart");
}

export async function handleEditItemCart(item_id: number, data: CartSchema) {
  editItemFromCart(item_id, data);

  revalidateTag("cart");
  redirect("/cart");
}

export async function handleRemoveItemCart(item_id: number) {
  removeItemFromCart(item_id);

  revalidateTag("cart");
  redirect("/cart");
}
