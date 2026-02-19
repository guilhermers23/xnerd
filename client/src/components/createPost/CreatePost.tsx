import { Main } from "../../styles/GlobalStyles";
import * as Style from "./CreatePostStyled";

export const CreatePost = () => {
  return (
    <Main>
      <p>Following</p>
      <Style.Card>
        <Style.ProfileIcon src="https://www.gamereactor.pt/media/29/crashbandicoot4_3192963b.png" alt="" />
        <Style.Input name="content" id="" placeholder="What's happening?"></Style.Input>
      </Style.Card>
      <input type="file" accept="video/*" />
      <input type="file" accept="image/*" />
      <Style.Button>Post</Style.Button>
    </Main>
  )
};
