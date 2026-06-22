import { useState, useCallback } from "react";
import { useUpdateMeMutation } from "../../../services/Users.Service";
import { FloatingInput } from "../../../components/input";
import { ToastEmitter } from "../../../components/toastify";
import { ResponseError } from "../../../utils/ultilsFuction";
import * as Style from "../MeProfileStyled";

type MeProfileProps = Omit<IUser, "email" | "birth_date" | "following" | "password">;

export const MeProfile = ({ cover, name, profile_image }: MeProfileProps) => {
  const [updateMe] = useUpdateMeMutation();

  // Estados para os dados do perfil
  const [tempName, setTempName] = useState<string>(name);
  const [tempPassword, setTempPassword] = useState<string>('');
  const [tempCover, setTempCover] = useState<string>(cover || '');
  const [tempAvatar, setTempAvatar] = useState<string>(profile_image || '');
  const [isSaving, setIsSaving] = useState(false);

  // Fallbacks caso os links estejam vazios
  const avatarSrc = tempAvatar || "/avatar_default.jpg";
  const coverSrc = tempCover || "/banner.jpg";

  const updateProfile = useCallback(async () => {
    setIsSaving(true);

    // Como mudamos para links, não precisamos de FormData. Enviamos um JSON simples.
    const payload: Partial<IUser> & { password?: string } = {
      name: tempName,
      cover: tempCover,
      profile_image: tempAvatar,
    };

    // Só adiciona a senha ao payload se o usuário digitou algo
    if (tempPassword) { payload.password = tempPassword;}

    try {
      await updateMe(payload).unwrap();
      ToastEmitter("Atualização feita com sucesso!", "sucess");
      setTempPassword(''); // Limpa o campo de senha por segurança
    } catch (error) {
      ResponseError(error, "Ocorreu um erro ao realizar a atualização!");
    } finally {
      setIsSaving(false);
    }
  }, [tempName, tempCover, tempAvatar, tempPassword, updateMe]);

  return (
    <Style.ProfileContainer>
      {/* O background e o avatar mudam em tempo real conforme o usuário cola o link */}
      <Style.ProfileBackground isCover={coverSrc}>
        <Style.ProfileHeader>
          <Style.Avatar src={avatarSrc} alt="Foto de Perfil" />
        </Style.ProfileHeader>
      </Style.ProfileBackground>

      <Style.ProfileInfoEdit>
        <FloatingInput
          label="Nome"
          id="name"
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />

        <FloatingInput
          label="Link da Imagem de Perfil"
          id="avatar"
          type="text"
          value={tempAvatar}
          onChange={(e) => setTempAvatar(e.target.value)}
        />

        <FloatingInput
          label="Link da Imagem de Capa"
          id="cover"
          type="text"
          value={tempCover}
          onChange={(e) => setTempCover(e.target.value)}
        />

        <FloatingInput
          label="Alterar Senha"
          id="password"
          value={tempPassword}
          type="password"
          onChange={(e) => setTempPassword(e.target.value)}
        />
      </Style.ProfileInfoEdit>

      <Style.Buttons>
        <Style.ButtonEdit isDisabled={isSaving} type="salvar" onClick={updateProfile}>
          {isSaving ? "Salvando..." : "Salvar"}
        </Style.ButtonEdit>
      </Style.Buttons>
    </Style.ProfileContainer>
  );
};
