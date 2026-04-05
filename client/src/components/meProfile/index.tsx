import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import type { IUser } from "../../types/IUser";
import { useImageUpload } from "./functions";
import * as Style from "./MeProfileStyled";

export const MeProfile = ({ cover, name, username, profile_image, following }: Omit<IUser, "email" | "password" | "birth_date">) => {
  const { images, onchangeFile, clear, isDisabled } = useImageUpload();
  const avatarSrc = images.avatar.preview || profile_image || "/avatar_default.jpg";
  const coverSrc = images.cover.preview || cover || "/banner.jpg";

  //Evitar memory leak
  useEffect(() => {
    return () => {
      Object.values(images).forEach((img) => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, [images]);

  return (
    <Style.ProfileContainer>
      <Style.ProfileBackground isCover={coverSrc}>

        <Style.EditCover>
          <label htmlFor="cover">
            <FaRegEdit size={25} cursor='pointer' title="Editar Background" />
          </label>
          <Style.InputNone id='cover' type="file" accept="image/*"
            onChange={onchangeFile("cover")} />
        </Style.EditCover>

        <Style.ProfileHeader>
          <Style.Avatar src={avatarSrc} alt="Foto de Perfil" />
          <Style.EditAvatar>
            <label htmlFor="profile">
              <FaRegEdit size={45} cursor='pointer' title="Editar Avatar" />
            </label>
            <Style.InputNone id="profile" type="file" accept="image/*"
              onChange={onchangeFile("avatar")} />
          </Style.EditAvatar>
        </Style.ProfileHeader>
      </Style.ProfileBackground>

      <Style.Buttons>
        <Style.ButtonEdit isDisabled={isDisabled} type="salvar">Salvar</Style.ButtonEdit>
        <Style.ButtonEdit isDisabled={isDisabled} type="cancelar"
          onClick={clear}>Cancelar</Style.ButtonEdit>
      </Style.Buttons>

      <Style.ProfileInfo>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p><b>{following}</b> Seguidores</p>
      </Style.ProfileInfo>
    </Style.ProfileContainer>
  )
};
