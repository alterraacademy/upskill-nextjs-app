import { cookies } from "next/headers";

import { IResponse } from "../types/api";
import { CartExtend, CartSchema } from "@/utils/types/carts";

export const getCart = async (params?: any) => {
  try {
    const sessionCookie =
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token";
    const response = await fetch("http://localhost:3000/api/carts", {
      headers: {
        Cookie: `${sessionCookie}=${cookies().get(sessionCookie)?.value ?? ""}`,
      },
      next: { tags: ["cart"] },
    });
    const result = await response.json();

    return result as IResponse<CartExtend>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const addCartItem = async (body: CartSchema) => {
  try {
    const sessionCookie =
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token";
    const response = await fetch("http://localhost:3000/api/carts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Cookie: `${sessionCookie}=${cookies().get(sessionCookie)?.value ?? ""}`,
      },
    });
    const result = await response.json();

    return result as IResponse<CartExtend>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const editCartItem = async (item_id: number, data: CartSchema) => {
  try {
    const sessionCookie =
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token";
    const response = await fetch(`http://localhost:3000/api/carts/${item_id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Cookie: `${sessionCookie}=${cookies().get(sessionCookie)?.value ?? ""}`,
      },
    });
    const result = await response.json();

    return result as IResponse<CartExtend>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const removeCartItem = async (item_id: number) => {
  try {
    const sessionCookie =
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token";
    const response = await fetch(`http://localhost:3000/api/carts/${item_id}`, {
      method: "DELETE",
      headers: {
        Cookie: `${sessionCookie}=${cookies().get(sessionCookie)?.value ?? ""}`,
      },
    });
    const result = await response.json();

    return result as IResponse<CartExtend>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
