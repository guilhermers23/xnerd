import { FaRegEdit } from "react-icons/fa";
import type { IUser } from "../../types/IUser";
import * as Style from "./MeProfileStyled";

export const MeProfile = ({ cover, name, username, profile_image, following }: Omit<IUser, "email" | "password" | "birth_date">) => {
  const src = profile_image ? profile_image : "/avatar_default.jpg";
  const background = cover ? cover : "/banner.jpg";

  return (
    <Style.ProfileContainer>
      <Style.ProfileBackground isCover={background}>

        <Style.EditCover>
          <label htmlFor="cover">
            <FaRegEdit size={25} cursor='pointer' title="Editar Background" />
          </label>
          <Style.InputNone id='cover' type="file" accept="image/*" />
        </Style.EditCover>

        <Style.ProfileHeader>
          <Style.Avatar src={src} alt="Foto de Perfil" />
          <Style.EditAvatar>
            <label htmlFor="profile">
              <FaRegEdit size={45} cursor='pointer' title="Editar Avatar" />
            </label>
            <Style.InputNone id='profile' type="file" accept="image/*" />
          </Style.EditAvatar>
        </Style.ProfileHeader>
      </Style.ProfileBackground>
      <Style.Span></Style.Span>
      <Style.ProfileInfo>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p><b>{following}</b> Seguidores</p>
      </Style.ProfileInfo>
    </Style.ProfileContainer>
  )
};
