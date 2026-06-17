import { useGetPostsQuery } from "../../services/Post.Service";

import { CreatePost } from "../../components/createPost";
import { Post } from "../../components/posts";
import { Cabecalho } from "../../styles/GlobalStyles";
import HeaderMobile from "../../components/headerMobile";

export const Home = () => {
  const { data: posts, isLoading: loadingPosts, error: postError } = useGetPostsQuery();

  return (
    <section>
      <HeaderMobile/>
      <Cabecalho>Following</Cabecalho>
      <CreatePost placeholder="O que está acontecendo?" titleButton="Postar" />
      {loadingPosts && "Carregando Feed..."}
      {posts?.length == 0 && "Seu Feed se encontra vazio no momento."}
      {postError && "Ocorreu erro ao buscar as postagens."}
      {posts?.map((post) => (
        <Post id={post.id} key={post.id} user={post.user}
          content={post.content} midia={post.midia}
          comments_count={post.comments_count}
          creation_at={post.creation_at}
          likes_count={post.likes_count}
          is_liked={post.is_liked}
        />
      ))}
    </section>
  )
};
