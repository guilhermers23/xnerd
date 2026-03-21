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

  })
});

export const { usePostMutation } = PostService;
