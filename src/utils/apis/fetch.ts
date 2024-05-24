import { cookies } from "next/headers";

import { IResponse, IResponseFailed, SearchParams } from "../types/api";

const BASE_URL = process.env.BASE_URL;

interface RequestOptions extends RequestInit {
  query?: SearchParams;
}

async function request<TResponse>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  requestOptions?: RequestOptions
) {
  const sessionName =
    process.env.NODE_ENV === "production"
      ? "__Secure-authjs.sessiont-token"
      : "authjs.session-token";
  const options: RequestInit = {
    ...requestOptions,
    method,
    headers: {
      Cookie: `${sessionName}=${cookies().get(`${sessionName}`)?.value ?? ""}`,
    },
  };
  const headers = new Headers(options.headers);

  if (requestOptions?.query) {
    url += "?" + objectToQueryString(requestOptions.query);
  }
  if (requestOptions?.body && !(requestOptions.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(BASE_URL + url, options);

    if (response.ok) {
      return (await response.json()) as IResponse<TResponse>;
    }

    return Promise.reject((await response.json()) as IResponseFailed);
  } catch (error) {
    throw error;
  }
}

function objectToQueryString(obj: SearchParams) {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
}

export default {
  get: <TResponse>(url: string, params?: RequestOptions) =>
    request<TResponse>(url, "GET", params),
  create: <TResponse>(url: string, params?: RequestOptions) =>
    request<TResponse>(url, "POST", params),
  update: <TResponse>(url: string, params?: RequestOptions) =>
    request<TResponse>(url, "PUT", params),
  delete: <TResponse>(url: string, params?: RequestOptions) =>
    request<TResponse>(url, "DELETE", params),
};
