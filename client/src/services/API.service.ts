import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";
import { BaseURL } from './BaseURL.Service';

export const APISevice = createApi({
  reducerPath: "APIService",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["User", "Posts"],
  endpoints: () => ({}),
});
