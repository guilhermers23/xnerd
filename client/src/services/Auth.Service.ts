import { APISevice } from "./API.service";
import type { IUser } from "../types/IUser";

type AuthUser = { access: string; refresh: string, user: IUser; };

export const AuthService = APISevice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthUser, { username: string; password: string; }>({
      query: (body) => ({
        url: "auth/login/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"]
    }),

    register: builder.mutation<AuthUser, Omit<IUser, "id">>({
      query: (body) => ({
        url: "auth/register/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"]
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = AuthService;
