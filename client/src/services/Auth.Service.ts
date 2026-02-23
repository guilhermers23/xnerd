import { APISevice } from "./API.Service";

interface AuthUser { token: string; user: IUser; };

export const AuthService = APISevice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthUser, { email: string; password: string; }>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"]
    }),
    register: builder.mutation<AuthUser, IUser>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"]
    })
  }),
});
