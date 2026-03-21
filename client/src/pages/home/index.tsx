import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { useGetMeQuery } from "../../services/Auth.Service";
import { useGetPostsQuery } from "../../services/Post.Service";
import { logout, setUser } from "../../store/reducers/user";

import { CreatePost } from "../../components/createPost";
import { Post } from "../../components/posts";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: posts, isLoading: loadingPosts, error: postError } = useGetPostsQuery();
  const { data: getUser, error: userError, isLoading: userLoading } = useGetMeQuery();

  useEffect(() => {
    if (Cookies.get("token") && getUser) dispatch(setUser(getUser));
    if (!Cookies.get("token") && getUser) dispatch(logout());
  }, [getUser, dispatch])

  return (
    <section>
      <CreatePost />
      {loadingPosts && "Carregando Feed..."}
      {posts?.length == 0 && "Seu Feed se encontra vazio no momento."}
      {postError && "Ocorreu erro ao buscar as postagens."}
      {posts?.map((post) => (
        <Post key={post.id} user={post.user}
          content={post.content} midia={post.midia}
          comments_count={post.comments_count}
          creation_at={post.creation_at}
          likes_count={post.likes_count}
        />
      ))}
    </section>
  )
};
