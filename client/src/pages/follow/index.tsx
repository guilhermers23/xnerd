import { useFollowUserMutation, useGetUsersQuery } from "../../services/Users.Service";
import { ProfileIcon } from "../../components/profileIcon";
import { Button, Cabecalho } from "../../styles/GlobalStyles";
import * as Style from "./FollowStyle";

export const Follow = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [followUser, { isLoading: followLoading }] = useFollowUserMutation();

  const follow = async (id: number) => {
    const res = await followUser(id);
    console.log(res)

    if (res.error) {
      alert("Desculpe! Ocorreu algum erro.");
      console.error(res.error);
      return;
    };
    alert(res.data.detail);
  };

  return (
    <Style.SectionFollow>
      <Cabecalho>Follow</Cabecalho>
      {isLoading && "Carregando Feed..."}
      {data?.map(({ name, username, profile_image, id, is_following }) =>
        <>
          <Style.Follow>
            <Style.HeaderFollow>
              <ProfileIcon urlImage={profile_image} key={id} />
              <span>
                <b>{name}</b>
                <p>{username}</p>
              </span>
            </Style.HeaderFollow>
            <Button onClick={() => follow(id)}
              disabled={followLoading}>
              {is_following ? "Deixar de seguir" : "Seguir"}
            </Button>
          </Style.Follow>
        </>
      )}
    </Style.SectionFollow>
  )
};
