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

    register: builder.mutation<AuthUser, IUser>({
      query: (body) => ({
        url: "auth/register/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"]
    }),

    getMe: builder.query<IUser, void>({
      query: () => "me/",
      providesTags: ["User"], // Isso ajuda o Redux a saber quando atualizar os dados
    }),

    updateMe: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: "me/",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"], // Quando atualizar, o getMe será chamado de novo automaticamente
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUpdateMeMutation, useGetMeQuery } = AuthService;
