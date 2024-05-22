import { cookies } from "next/headers";

import { TransactionSchema } from "../types/transactions";
import { IResponse } from "../types/api";

export const createTransaction = async (body: TransactionSchema) => {
  try {
    const sessionCookie =
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token";
    const response = await fetch("http://localhost:3000/api/transactions", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Cookie: `${sessionCookie}=${cookies().get(sessionCookie)?.value ?? ""}`,
      },
    });
    const result = await response.json();

    return result as IResponse<string>;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
