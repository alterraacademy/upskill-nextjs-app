import { TransactionSchema } from "../types/transactions";
import Fetch from "./fetch";

export const createTransaction = async (body: TransactionSchema) => {
  const response = await Fetch.create<string>("/api/transactions", {
    body: JSON.stringify(body),
  });

  return response;
};
