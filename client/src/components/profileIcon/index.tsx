import * as Style from "./ProfileIconStyled";

export const ProfileIcon = (props: { urlImage: string }) => {

  return <Style.ProfileIcon src={props.urlImage} alt="Avatar do Perfil" />
};
