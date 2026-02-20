import { useState } from "react";
import { RiMovieAiFill } from "react-icons/ri";
import { LuImageUp } from "react-icons/lu";
import { colors } from "../../styles/theme";
import { Container } from "../../styles/GlobalStyles";
import { ProfileIcon } from "../profileIcon/ProfileIcon";
import * as Style from "./CreatePostStyled";

export const CreatePost = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<FileList | null>(null);

  const publishPost = () => {
    if (content.length < 3) {
      alert('Campo deve possui no mínimo 3 caracteres.')
      return;
    };

    const formData = new FormData();
    if (file) {
      formData.append('file', file[0])
    };

    const data = { content, file };
    console.log(data);
  };

  return (
    <>
      <Style.Cabecalho>Following</Style.Cabecalho>
      <Container>
        <Style.Card>
          <ProfileIcon />
          <Style.Input name="content" id="" placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Style.Input>
        </Style.Card>
        <Style.ListIcons>

          <div>
            <span>
              <label htmlFor="file-upload-image">
                <LuImageUp size={25} color={colors.info} cursor="pointer" title="Selecionar uma imagem" />
              </label>
              <Style.UploadIcon id="file-upload-image" type="file" accept="image/*"
                onChange={(e) => setFile(e.target.files)} />
            </span>

            <span>
              <label htmlFor="file-upload-video">
                <RiMovieAiFill size={25} color={colors.info} cursor="pointer" title="Selecionar um vídeo" />
              </label>
              <Style.UploadIcon id="file-upload-video" type="file" accept="video/*"
                onChange={(e) => setFile(e.target.files)} />
            </span>
          </div>
          <Style.Button onClick={publishPost}>Post</Style.Button>
        </Style.ListIcons>
      </Container>
    </>
  )
};
