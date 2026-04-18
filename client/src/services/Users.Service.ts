import type { IUser } from "../types/IUser";
import { APISevice } from "./API.service";

export const UsersService = APISevice.injectEndpoints({
  endpoints: (builder) => ({
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

    getUsers: builder.query<IUser[], void>({
      query: () => "/users",
      providesTags: ["User"]
    }),

    followUser: builder.mutation({
      query: id => ({
        url: `/user/${id}/follow`,
        id
      }),
      invalidatesTags: ['User']
    }),

  })
});

export const { useGetMeQuery, useUpdateMeMutation, useGetUsersQuery, useFollowUserMutation } = UsersService;
