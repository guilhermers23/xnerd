import type { IUser } from "../../../types/IUser";
import * as Style from "../MeProfileStyled";

export const UserProfile = ({ cover, name, username, profile_image, followers_count, following_count }:
  Omit<IUser, "email" | "password" | "birth_date" | "following">) => {

  const avatarSrc = profile_image || profile_image || "/avatar_default.jpg";
  const coverSrc = cover || cover || "/banner.jpg";

  return (
    <Style.ProfileContainer>
      <Style.ProfileBackground isCover={coverSrc}>
        <Style.ProfileHeader>
          <Style.Avatar src={avatarSrc} alt="Foto de Perfil" />
        </Style.ProfileHeader>
      </Style.ProfileBackground>

      <Style.ProfileInfo>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <div>
          <p><b>{followers_count}</b> Seguidores</p>
          <p><b>{following_count}</b> Seguindo</p>
        </div>
      </Style.ProfileInfo>
    </Style.ProfileContainer>
  )
};
