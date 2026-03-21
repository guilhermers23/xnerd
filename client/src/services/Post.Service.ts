import type { IPost } from "../types/IPost";
import { APISevice } from "./API.service";

export const PostService = APISevice.injectEndpoints({
  endpoints: (builder) => ({
    post: builder.mutation({
      query: body => ({
        url: "posts/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Posts"]
    }),

    getPosts: builder.query<IPost[], void>({
      query: () => "feed/",
      providesTags: ["Posts"]
    }),

  })
});

export const { usePostMutation, useGetPostsQuery } = PostService;
