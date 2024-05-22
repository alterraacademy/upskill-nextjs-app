"use server";

import { redirect } from "next/navigation";

import { createTransaction } from "../apis/transactions";

export async function handleCheckout(formData: FormData) {
  const body = {
    amount: formData.get("amount") as string,
    cart_id: +(formData.get("cart_id") as string),
  };

  const result = await createTransaction(body);

  redirect(result.data);
}
