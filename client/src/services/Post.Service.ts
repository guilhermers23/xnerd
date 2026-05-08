import type { IPost } from "../types/IPost";
import { APISevice } from "./API.service";

export const PostService = APISevice.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: body => ({
        url: "posts/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Posts"]
    }),
    // Buscar posts
    getPosts: builder.query<IPost[], void>({
      query: () => "feed/",
      providesTags: ["Posts"]
    }),
    // Buscar um post específico
    getPost: builder.query<IPost, string | undefined>({
      query: (postID) => `posts/${postID}/`,
      providesTags: ["Posts"]
    }),
    // Buscar comentários de um post específico
    getComments: builder.query<IPost[], string | undefined>({
      query: (postID) => `posts/${postID}/comments/`,
      providesTags: ["Posts"]
    }),
    // Criar um comentário (enviando o parent id na URL ou no body)
    addComments: builder.mutation<IPost, { postID: string | number; formData: FormData }>({
      query: ({ postID, formData }) => ({
        url: `posts/${postID}/comments/`,
        method: "POST",
        body: formData
      }),
      invalidatesTags: ["Posts"],
    }),
  })
});

export const { useAddPostMutation, useGetPostsQuery, useAddCommentsMutation, useGetCommentsQuery, useGetPostQuery } = PostService;
