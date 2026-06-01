import { MeProfile } from "../../components/meProfile";
import { Post } from "../../components/posts"
import { useGetMePostsQuery } from "../../services/Post.Service";
import { Cabecalho } from "../../styles/GlobalStyles";
import { useParams } from "react-router";
import { useGetUserByUsernameQuery } from "../../services/Users.Service";

export const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const queryUsername = username ?? "";
  const { data: user } = useGetUserByUsernameQuery(queryUsername);
  const { data: posts, isError: postsError } = useGetMePostsQuery(queryUsername);

  return (
    <section>
      {user ?
        <MeProfile id={user.id} cover={user.cover}
          followers_count={user.followers_count}
          following_count={user.following_count}
          name={user.name}
          profile_image={user.profile_image}
          username={user.username}
        />
        : "Ocorreu um erro ao processar os dados!"}

      <Cabecalho style={{ borderRight: "none", borderLeft: "none" }}>Suas postagens</Cabecalho>

      {postsError && "Ocorreu erro ao buscar suas postagens."}
      {posts?.length == 0 && "Seu Feed se encontra vazio no momento."}
      {posts?.map((post) => (
        <Post id={post.id} key={post.id} user={post.user}
          content={post.content} midia={post.midia}
          comments_count={post.comments_count}
          creation_at={post.creation_at}
          likes_count={post.likes_count}
        />
      ))}
    </section>
  )
};
