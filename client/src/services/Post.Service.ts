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
    // Buscar posts de usuários seguidos
    getPosts: builder.query<IPost[], void>({
      query: () => "feed/",
      providesTags: ["Posts"]
    }),
    // Buscar somente seus posts
    getMePosts: builder.query<IPost[], string | undefined>({
      query: (username) => `posts/user/${username}`,
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

    like: builder.mutation({
      query: (id: number) => ({
        url: `posts/${id}/like/`,
        method: "POST",
        id
      }),
      invalidatesTags: ["Posts"]
    }),
  })
});

export const {
  useAddPostMutation,
  useGetPostsQuery,
  useAddCommentsMutation,
  useGetCommentsQuery,
  useGetPostQuery,
  useGetMePostsQuery,
  useLikeMutation } = PostService;
