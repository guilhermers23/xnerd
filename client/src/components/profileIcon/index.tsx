import * as Style from "./ProfileIconStyled";

export const ProfileIcon = (props: { urlImage: string | null | undefined }) => {
  const srcUlr = props.urlImage || "/avatar_default.jpg";

  return (
    <Style.ProfileIcon src={srcUlr}
      alt="Avatar do Perfil" />
  )
};
