import { NextRequest } from "next/server";
import { Session } from "next-auth";

export interface NextAuthRequest extends NextRequest {
  auth: Session | null;
}

interface MetaData {
  total_count: number;
  total_pages: number;
}

export interface IResponse<TData> {
  message: string;
  data: TData;
  reason?: string | null;
}

export interface IResponsePagination<TData> extends IResponse<TData> {
  metadata: MetaData;
}
