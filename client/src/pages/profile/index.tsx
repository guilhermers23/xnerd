import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";

import type { RootReducer } from "../../store";
import { useGetUserByUsernameQuery } from "../../services/Users.Service";
import { useGetMePostsQuery } from "../../services/Post.Service";

import { MeProfile } from "../../containers/profiles/meProfile";
import { UserProfile } from "../../containers/profiles/usersProfile";
import { Modal } from "../../components/modal";
import { Post } from "../../components/posts"

import { Cabecalho } from "../../styles/GlobalStyles";
import * as Styled from "./ProfileStyled";

export const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const queryUsername = username ?? "";
  const { user: loggedInUser } = useSelector((state: RootReducer) => state.user);
  const { data: user } = useGetUserByUsernameQuery(queryUsername);
  const { data: posts, isError: postsError } = useGetMePostsQuery(queryUsername);
  const [isOpenModal, setModalOpen] = useState(false);
  const isLoggedIn = queryUsername === loggedInUser?.username;

  return (
    <Styled.Section>
      {isLoggedIn && <>
        <Styled.EditProfile onClick={() => setModalOpen(true)}>
          <FaRegEdit size={25} title="Editar Perfil" />
        </Styled.EditProfile>
        <Modal isOpen={isOpenModal} onClose={() => setModalOpen(false)}>
          <MeProfile id={loggedInUser.id} cover={loggedInUser.cover}
            followers_count={loggedInUser.followers_count}
            following_count={loggedInUser.following_count}
            name={loggedInUser.name}
            profile_image={loggedInUser.profile_image}
            username={loggedInUser.username}
          />
        </Modal>
      </>
      }

      {user ?
        <UserProfile id={user.id} cover={user.cover}
          followers_count={user.followers_count}
          following_count={user.following_count}
          name={user.name}
          profile_image={user.profile_image}
          username={user.username}
          is_following={user.is_following}
          isLoggedIn={isLoggedIn}
        />
        : "Ocorreu um erro ao processar os dados!"
      }

      <Cabecalho style={{ borderRight: "none", borderLeft: "none" }}>Suas postagens</Cabecalho>

      {postsError && "Ocorreu erro ao buscar suas postagens."}
      {posts?.length == 0 && "Seu Feed se encontra vazio no momento."}
      {posts?.map((post) => (
        <Post id={post.id} key={post.id} user={post.user}
          content={post.content} midia={post.midia}
          comments_count={post.comments_count}
          creation_at={post.creation_at}
          likes_count={post.likes_count}
          is_liked={post.is_liked}
        />
      ))}
    </Styled.Section>
  )
};
