import { Link } from "react-router";
import { useGetUsersQuery } from "../../services/Users.Service";
import { ProfileIcon } from "../../components/profileIcon";
import { Button, Cabecalho } from "../../styles/GlobalStyles";
import { useFollow } from "../../utils/ultilsFuction";
import * as Style from "./FollowStyle";

export const Follow = () => {
  const {followLoading, fuctionFollow} = useFollow();
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Style.SectionFollow>
      <Cabecalho>Follow</Cabecalho>
      {isLoading && "Carregando Feed..."}
      {data?.map(({ name, username, profile_image_url, id, is_following }) =>
          <Style.Follow key={id}>
            <Link to={`/${username}`}>
              <Style.HeaderFollow>
                <ProfileIcon urlImage={profile_image_url} />
                <span>
                  <b>{name}</b>
                  <p>{username}</p>
                </span>
              </Style.HeaderFollow>
            </Link>
            <Button onClick={() => fuctionFollow(id)}
              disabled={followLoading}>
              {is_following ? "Deixar de seguir" : "Seguir"}
            </Button>
          </Style.Follow>
      )}
    </Style.SectionFollow>
  )
};
