import { useState } from "react";
import { LuImageUp } from "react-icons/lu";
import { usePostMutation } from "../../services/Post.Service";
import { useGetMeQuery } from "../../services/Auth.Service";
import { useFileUpload } from "./fuctionsCreatePost";
import { colors } from "../../styles/theme";
import { Container } from "../../styles/GlobalStyles";
import { ProfileIcon } from "../profileIcon";
import * as Style from "./CreatePostStyled";

export const CreatePost = () => {
  const { data: user } = useGetMeQuery();
  const [makePost] = usePostMutation();

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
    <>
      <Style.Cabecalho>Following</Style.Cabecalho>

      <Container>
        <Style.Card>
          <ProfileIcon urlImage={user?.profile_image} />
          <Style.Input name="content" id="content" placeholder="What's happening?"
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
          <Style.Button onClick={publishPost} disabled={isDisabled}>Post</Style.Button>
        </Style.ListIcons>
      </Container>
    </>
  )
};
