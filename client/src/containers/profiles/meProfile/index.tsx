import { useEffect, useState, useCallback } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useUpdateMeMutation } from "../../../services/Users.Service";
import { useImageUpload } from "./functions";
import { FloatingInput } from "../../../components/input";
import * as Style from "../MeProfileStyled";
import { ToastEmitter } from "../../../components/toastify";
import { ResponseError } from "../../../utils/ultilsFuction";

type MeProfileProps = Omit<IUser, "email" | "birth_date" | "following" | "password">;

export const MeProfile = ({ cover, name, profile_image }: MeProfileProps) => {
  const [updateMe] = useUpdateMeMutation();
  const { images, onchangeFile, clear } = useImageUpload();
  const [tempName, setTempName] = useState<string>(name);
  const [tempPassword, setTempPassword] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);

  const avatarSrc = images.avatar.preview || profile_image || "/avatar_default.jpg";
  const coverSrc = images.cover.preview || cover || "/banner.jpg";

  const updateProfile = useCallback(async () => {
    setIsSaving(true);
    const formData = new FormData();
    if (images.cover.file) formData.append("cover", images.cover.file);
    if (images.avatar.file) formData.append("profile_image", images.avatar.file);
    if (tempPassword) formData.append("password", tempPassword);
    formData.append("name", tempName);

    try {
      const res = await updateMe(formData as Partial<IUser>).unwrap();
      console.log(res);
      console.log("Dados enviados", formData);
      ToastEmitter("Atualização feita com sucesso!", "sucess");
      clear();
    } catch (error) {
      ResponseError(error, "Ocorreu um erro ao realizar a atualização!");
    } finally {
      setIsSaving(false);
    }
  }, [images, tempName, tempPassword, updateMe, clear]);

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
            <FaRegEdit size={25} cursor="pointer" title="Editar Background" />
          </label>
          <Style.InputNone id="cover" type="file" accept="image/*" onChange={onchangeFile("cover")} />
        </Style.EditCover>

        <Style.ProfileHeader>
          <Style.Avatar src={avatarSrc} alt="Foto de Perfil" />
          <Style.EditAvatar>
            <label htmlFor="profile">
              <FaRegEdit size={45} cursor="pointer" title="Editar Avatar" />
            </label>
            <Style.InputNone id="profile" type="file" accept="image/*" onChange={onchangeFile("avatar")} />
          </Style.EditAvatar>
        </Style.ProfileHeader>
      </Style.ProfileBackground>

      <Style.ProfileInfoEdit>
        <FloatingInput label="Nome" id="name" type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} />
        <FloatingInput label="Alterar Senha" id="password" value={tempPassword} type="password" onChange={(e) => setTempPassword(e.target.value)} />
      </Style.ProfileInfoEdit>

      <Style.Buttons>
        <Style.ButtonEdit isDisabled={isSaving} type="salvar" onClick={updateProfile}>
          {isSaving ? "Salvando..." : "Salvar"}
        </Style.ButtonEdit>
      </Style.Buttons>
    </Style.ProfileContainer>
  );
};
