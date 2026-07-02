import * as Style from './ProfileIconStyled';

export const ProfileIcon = (props: { urlImage: string | undefined | null }) => {
  const srcImage = props.urlImage || '/avatar_default.jpg';

  return <Style.ProfileIcon src={srcImage} alt="Avatar do Perfil" />;
};
