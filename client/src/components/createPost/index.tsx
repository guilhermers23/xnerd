import { useState, type ChangeEvent } from "react";
import { LuImageUp } from "react-icons/lu";
import { usePostMutation } from "../../services/Post.Service";
import { useGetMeQuery } from "../../services/Auth.Service";
import { colors } from "../../styles/theme";
import { Container } from "../../styles/GlobalStyles";
import { ProfileIcon } from "../profileIcon";
import * as Style from "./CreatePostStyled";

export const CreatePost = () => {
  const { data: user, error, isLoading } = useGetMeQuery();
  const [makePost] = usePostMutation();
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const onchangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const publishPost = async () => {
    if (content.length < 3) {
      alert('Campo deve possui no mínimo 3 caracteres.')
      return;
    };

    const formData = new FormData();
    if (file) {
      formData.append('midia', file)
      formData.append('content', content);
    };

    try {
      const res = await makePost(formData);
      console.log(res.data);

    } catch (error) {
      console.error(error)
      alert("Ocorreu erro ao realizar Postagem!");
      return;
    }

    alert("Postagem realizada com sucesso!");
    setFile(null);
    setPreview(undefined);
    setContent("");
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
          ></Style.Input>
        </Style.Card>
        {preview && (
          <Style.Preview>
            <Style.Close src="/close.png" alt="Close" onClick={() => {
              setFile(null)
              setPreview(undefined)
            }} />
            <Style.PreviewFile src={preview} alt="Preview do arquivo" />
          </Style.Preview>
        )}

        <Style.ListIcons>
          <span>
            <label htmlFor="file-upload-image">
              <LuImageUp size={25} color={colors.info} cursor="pointer" title="Selecionar uma imagem" />
            </label>
            <Style.UploadIcon id="file-upload-image" type="file" accept="image/*"
              onChange={onchangeFile} />
          </span>
          <Style.Button onClick={publishPost}>Post</Style.Button>
        </Style.ListIcons>
      </Container>
    </>
  )
};
