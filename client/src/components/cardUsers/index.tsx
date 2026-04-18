import { Button } from "../../styles/GlobalStyles";
import { ProfileIcon } from "../profileIcon";
import * as Style from "./CardUsersStyles";

type UsersFollow = { name: string, username: string, profile_image: string | null, id: number };

export const CardUsers = ({ name, username, profile_image, id }: UsersFollow) => {
  return (
    <Style.Follow>
      <Style.HeaderFollow>
        <ProfileIcon urlImage={profile_image} key={id} />
        <span>
          <b>{name}</b>
          <p>{username}</p>
        </span>
      </Style.HeaderFollow>
      <Button>Seguir</Button>
    </Style.Follow>
  )
};
