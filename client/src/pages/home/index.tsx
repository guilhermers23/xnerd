import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import Cookies from "js-cookie";

import { useGetMeQuery } from "../../services/Users.Service";
import { useGetPostsQuery } from "../../services/Post.Service";
import { logout, setUser } from "../../store/reducers/user";

import { CreatePost } from "../../components/createPost";
import { Post } from "../../components/posts";
import { Cabecalho } from "../../styles/GlobalStyles";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: posts, isLoading: loadingPosts, error: postError } = useGetPostsQuery();
  const { data: getUser } = useGetMeQuery();

  useEffect(() => {
    if (Cookies.get("token") && getUser) dispatch(setUser(getUser));
    if (!Cookies.get("token") && getUser) dispatch(logout());
  }, [getUser, dispatch])

  return (
    <section>
      <Cabecalho>Following</Cabecalho>
      <CreatePost placeholder="O que está acontecendo?" titleButton="Postar" />
      {loadingPosts && "Carregando Feed..."}
      {posts?.length == 0 && "Seu Feed se encontra vazio no momento."}
      {postError && "Ocorreu erro ao buscar as postagens."}
      {posts?.map((post) => (
        <Link to={`/post/detail/${post.id}/`}>
          <Post key={post.id} user={post.user}
            content={post.content} midia={post.midia}
            comments_count={post.comments_count}
            creation_at={post.creation_at}
            likes_count={post.likes_count}
          />
        </Link>
      ))}
    </section>
  )
};
