import { useState } from "react";
import { LuImageUp } from "react-icons/lu";

import { useAddPostMutation } from "../../services/Post.Service";
import { useGetMeQuery } from "../../services/Users.Service";

import { useFileUpload } from "./fuctionsCreatePost";

import { colors } from "../../styles/theme";
import { ProfileIcon } from "../profileIcon";
import { Button, Container } from "../../styles/GlobalStyles";
import * as Style from "./CreatePostStyled";

type Props = { placeholder: string, titleButton: string };

export const CreatePost = ({ placeholder, titleButton }: Props) => {
  const { data: user } = useGetMeQuery();
  const [makePost] = useAddPostMutation();

  const [content, setContent] = useState('');
  const { file, preview, onChangeFile, clearPost } = useFileUpload();
  const isDisabled = content.trim().length < 3;

  const publishPost = async () => {
    if (content.trim().length < 3) {
      alert('Campo deve possui no mínimo 3 caracteres.')
      return;
    };

    const formData = new FormData();
    formData.append('content', content);
    if (file) { formData.append('midia', file) };

    try {
      const res = await makePost(formData).unwrap();
      console.log(res);
      alert("Postagem realizada com sucesso!");
      setContent('');
      clearPost();

    } catch (error) {
      console.error(error)
      alert("Ocorreu erro ao realizar Postagem!");
    }
  };

  return (
    <Container>
      <Style.Card>
        <ProfileIcon urlImage={user?.profile_image} />
        <Style.Input name="content" id="content" placeholder={placeholder}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Style.Card>

      {preview && (
        <Style.Preview>
          <Style.Close src="/close.png" alt="Close" onClick={clearPost} />
          <Style.PreviewFile src={preview} alt="Preview do arquivo" />
        </Style.Preview>
      )}

      <Style.ListIcons>
        <span>
          <label htmlFor="file-upload-image">
            <LuImageUp size={25} color={colors.info} cursor="pointer" title="Selecionar uma imagem" />
          </label>
          <Style.UploadIcon id="file-upload-image" type="file" accept="image/*"
            onChange={onChangeFile} />
        </span>
        <Button onClick={publishPost} disabled={isDisabled}>{titleButton}</Button>
      </Style.ListIcons>
    </Container>
  )
};
