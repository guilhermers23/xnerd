import { Button } from "../../../styles/GlobalStyles";
import { useFollow } from "../../../utils/ultilsFuction";
import * as Style from "../MeProfileStyled";
interface Props extends Omit<IUser, "email" | "password" | "birth_date" | "following"> { isLoggedIn: boolean };

export const UserProfile = ({ id, cover, name, username, profile_image, followers_count, following_count, is_following, isLoggedIn }: Props) => {
  const { followLoading, fuctionFollow } = useFollow();
  const avatarSrc = profile_image || profile_image || "/avatar_default.jpg";
  const coverSrc = cover || cover || "/banner.jpg";


  return (
    <Style.ProfileContainer>
      <Style.ProfileBackground $isCover={coverSrc}>
        <Style.ProfileHeader>
          <Style.Avatar src={avatarSrc} alt="Foto de Perfil" />
        </Style.ProfileHeader>
      </Style.ProfileBackground>

      <Style.ProfileInfo>
        <span>
          <h2>{name}</h2>
          <h3>{username}</h3>
          <div>
            <p><b>{followers_count}</b> Seguidores</p>
            <p><b>{following_count}</b> Seguindo</p>
          </div>
        </span>

        {!isLoggedIn &&
          <Button onClick={() => fuctionFollow(id)}
            disabled={followLoading}>
            {is_following ? "Deixar de seguir" : "Seguir"}
          </Button>
        }
      </Style.ProfileInfo>
    </Style.ProfileContainer>
  )
};
