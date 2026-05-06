import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import type { IUser } from "../../types/IUser";
import { useImageUpload } from "./functions";
import { useUpdateMeMutation } from "../../services/Users.Service";
import * as Style from "./MeProfileStyled";

export const MeProfile = ({ cover, name, username, profile_image, following }: Omit<IUser, "email" | "password" | "birth_date">) => {
  const [updateMe] = useUpdateMeMutation();
  const { images, onchangeFile, clear, isDisabled } = useImageUpload();
  const avatarSrc = images.avatar.preview || profile_image || "/avatar_default.jpg";
  const coverSrc = images.cover.preview || cover || "/banner.jpg";

  const updateProfile = async () => {
    const formData = new FormData();
    if (images.cover.file) { formData.append("cover", images.cover.file); };
    if (images.avatar.file) { formData.append("profile_image", images.avatar.file); };

    try {
      const res = await updateMe(formData).unwrap();
      console.log(res);
      alert("Atualização feita com sucesso!");
      clear();

    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao realizar a atualização!");
    }
  };

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
        <Style.ButtonEdit isDisabled={isDisabled} type="salvar"
          onClick={updateProfile}>Salvar</Style.ButtonEdit>
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
