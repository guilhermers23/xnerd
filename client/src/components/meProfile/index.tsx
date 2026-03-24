import type { IUser } from "../../types/IUser";
import * as Style from "./MeProfileStyled";

export const MeProfile = ({ cover, id, name, username, profile_image, following }: Omit<IUser, "email" | "password" | "birth_date">) => {
  const src = profile_image ? profile_image : "/avatar_default.jpg";

  return (
    <Style.ProfileContainer>
      <Style.ProfileBackground isCover={cover}>
        <Style.ProfileHeader>
          <Style.Avatar src={src} alt="Foto de Perfil" />
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
