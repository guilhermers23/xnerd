import { FaRegEdit } from "react-icons/fa";
import type { IUser } from "../../types/IUser";
import * as Style from "./MeProfileStyled";
import { useState, type ChangeEvent } from "react";

export const MeProfile = ({ cover, name, username, profile_image, following }: Omit<IUser, "email" | "password" | "birth_date">) => {
  const [coverEdit, setCoverEdit] = useState<File | null>(null);
  const [avatarEdit, setAvatarEdit] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | undefined>(undefined);
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(undefined);
  const src = profile_image ? profile_image : "/avatar_default.jpg";
  const background = cover ? cover : "/banner.jpg";

  const onchangeFile = (e: ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string | undefined>>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setValue(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearFiles = () => { setAvatarEdit(null); setCoverEdit(null); setAvatarPreview(undefined); setCoverPreview(undefined); };

  return (
    <Style.ProfileContainer>
      <Style.ProfileBackground isCover={!coverPreview ? background : coverPreview}>

        <Style.EditCover>
          <label htmlFor="cover">
            <FaRegEdit size={25} cursor='pointer' title="Editar Background" />
          </label>
          <Style.InputNone id='cover' type="file" accept="image/*"
            onChange={(e) => onchangeFile(e, setCoverEdit, setCoverPreview)} />
        </Style.EditCover>

        <Style.ProfileHeader>
          <Style.Avatar src={!avatarPreview ? src : avatarPreview} alt="Foto de Perfil" />
          <Style.EditAvatar>
            <label htmlFor="profile">
              <FaRegEdit size={45} cursor='pointer' title="Editar Avatar" />
            </label>
            <Style.InputNone id="profile" type="file" accept="image/*"
              onChange={(e) => onchangeFile(e, setAvatarEdit, setAvatarPreview)} />
          </Style.EditAvatar>
        </Style.ProfileHeader>
      </Style.ProfileBackground>

      <Style.Buttons>
        <Style.ButtonEdit isDisabled={!coverEdit && !avatarEdit} type="salvar">Salvar</Style.ButtonEdit>
        <Style.ButtonEdit isDisabled={!coverEdit && !avatarEdit} type="cancelar"
          onClick={clearFiles}>Cancelar</Style.ButtonEdit>
      </Style.Buttons>

      <Style.ProfileInfo>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p><b>{following}</b> Seguidores</p>
      </Style.ProfileInfo>
    </Style.ProfileContainer>
  )
};
