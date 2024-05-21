"use server";

import { Category } from "@prisma/client";
import { cookies } from "next/headers";

import { IResponse } from "../types/api";

export async function createCategory(formData: FormData) {
  console.log(formData);
  try {
    const body = {
      name: formData.get("name"),
    };
    const sessionCookie =
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token";
    const response = await fetch("http://localhost:3000/api/categories", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Cookie: `${sessionCookie}=${cookies().get(sessionCookie)?.value ?? ""}`,
      },
    });

    if (!response.ok) {
      console.log(body);
    }
    const result = await response.json();

    return result as IResponse<Category>;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
}
