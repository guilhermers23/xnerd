import { useForm, type SubmitHandler } from "react-hook-form";
import { RiMovieAiFill } from "react-icons/ri";
import { LuImageUp } from "react-icons/lu";
import { colors } from "../../styles/theme";
import { Container } from "../../styles/GlobalStyles";
import { ProfileIcon } from "../profileIcon";
import * as Style from "./CreatePostStyled";

interface IData { content: string, file_image: FileList, file_video: FileList };

export const CreatePost = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm<IData>();

  const publishPost: SubmitHandler<IData> = (data) => {
    if (data.content.length < 3) {
      alert('Campo deve possui no mínimo 3 caracteres.')
      return;
    };
    console.log('Form data:', data);

    // Para acessar o arquivo:
    if (data.file_image && data.file_image.length > 0) {
      const file = data.file_image[0];
      console.log('Arquivo selecionado:', file.name, file.size, file.type);
    };
  };

  return (
    <>
      <Style.Cabecalho>Following</Style.Cabecalho>
      <form onSubmit={handleSubmit(publishPost)}>
        <Container>
          <Style.Card>
            <ProfileIcon />

            <Style.Input id="content" placeholder="What's happening?"
              {...register("content")}
            ></Style.Input>
          </Style.Card>
          <Style.ListIcons>

            <div>
              <span>
                <label htmlFor="file-upload-image">
                  <LuImageUp size={25} color={colors.info} cursor="pointer" title="Selecionar uma imagem" />
                </label>
                <Style.UploadIcon id="file-upload-image" type="file" accept="image/*"
                  {...register("file_image")}
                />
              </span>

              <span>
                <label htmlFor="file-upload-video">
                  <RiMovieAiFill size={25} color={colors.info} cursor="pointer" title="Selecionar um vídeo" />
                </label>
                <Style.UploadIcon id="file-upload-video" type="file" accept="video/*"
                  {...register("file_video")} />
              </span>

            </div>
            <Style.Button type="submit">Post</Style.Button>
          </Style.ListIcons>
        </Container >
      </form>
    </>
  )
};
