import { useParams } from "react-router";
import { Post } from "../../components/posts";
import { useGetPostQuery, useGetCommentsQuery } from "../../services/Post.Service";
import { Cabecalho } from "../../styles/GlobalStyles";
import { CreatePost } from "../../components/createPost";

export const PostDetail = () => {
  const { postID } = useParams();
  const { data } = useGetPostQuery(postID);
  const { data: getComments } = useGetCommentsQuery(postID);

  return (
    <section>
      <Cabecalho>Post</Cabecalho>
      {!data ? "Ocorreu erro ao carregar Postagem." :
        <Post id={data.id} key={data.id}
          user={data.user}
          content={data.content}
          comments_count={data.comments_count}
          midia={data.midia}
          creation_at={data.creation_at}
          likes_count={data.likes_count}
        />
      }

      <CreatePost placeholder="Poste sua resposta" titleButton="Responder" postID={postID} />

      {!getComments ? "Ocorreu erro ao carregar os comentários." : (
        getComments.map((comments) => (
          <Post id={comments.id} key={comments.id}
            user={comments.user}
            content={comments.content}
            comments_count={comments.comments_count}
            midia={comments.midia}
            creation_at={comments.creation_at}
            likes_count={comments.likes_count}
          />
        ))
      )}

    </section>
  )
};
