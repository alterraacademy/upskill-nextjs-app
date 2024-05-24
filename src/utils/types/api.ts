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
  metadata?: MetaData;
}

export interface IResponseFailed extends Pick<IResponse<never>, "message"> {
  reason?: Record<string, string[]> & string;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}
