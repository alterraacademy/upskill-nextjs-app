"use server";

import { redirect } from "next/navigation";

import { addCartItem, removeCartItem, editCartItem } from "../apis/cart";
import { revalidateTag } from "next/cache";
import { CartSchema } from "../types/carts";

export async function addItemToCart(formData: FormData) {
  const payload = {
    product_id: formData.get("product_id") as string,
    quantity: 1,
  };

  addCartItem(payload);

  revalidateTag("cart");
  redirect("/cart");
}

export async function editItemFromCart(item_id: number, data: CartSchema) {
  editCartItem(item_id, data);

  revalidateTag("cart");
  redirect("/cart");
}

export async function removeItemFromCart(item_id: number) {
  removeCartItem(item_id);

  revalidateTag("cart");
  redirect("/cart");
}
