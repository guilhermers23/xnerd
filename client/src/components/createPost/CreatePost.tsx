import { RiMovieAiFill } from "react-icons/ri";
import { LuImageUp } from "react-icons/lu";
import { colors } from "../../styles/theme";
import * as Style from "./CreatePostStyled";

export const CreatePost = () => {
  return (
    <>
      <Style.Cabecalho>Following</Style.Cabecalho>
      <Style.Container>
        <Style.Card>
          <Style.ProfileIcon src="https://www.gamereactor.pt/media/29/crashbandicoot4_3192963b.png" alt="" />
          <Style.Input name="content" id="" placeholder="What's happening?"></Style.Input>
        </Style.Card>
        <Style.ListIcons>

          <div>
            <span>
              <label htmlFor="file-upload-image">
                <LuImageUp size={25} color={colors.info} cursor="pointer" title="Selecionar uma imagem" />
              </label>
              <Style.UploadIcon id="file-upload-image" type="file" accept="image/*" />
            </span>

            <span>
              <label htmlFor="file-upload-video">
                <RiMovieAiFill size={25} color={colors.info} cursor="pointer" title="Selecionar um vídeo" />
              </label>
              <Style.UploadIcon id="file-upload-video" type="file" accept="video/*" />
            </span>
          </div>
          <Style.Button>Post</Style.Button>
        </Style.ListIcons>
      </Style.Container>
    </>
  )
};
