import { ProfileIcon } from "../../styles/GlobalStyles";
import * as Style from "./PostCardStyled";

export const PostCard = () => {
  return (
    <Style.ContainerCard>
      <ProfileIcon src="https://www.gamereactor.pt/media/29/crashbandicoot4_3192963b.png" alt="" />
      <Style.HeaderPost>
        <h4>Guilherme R.Siva <i>@guilhermers23</i></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur id nemo blanditiis assumenda, libero iure enim dolore eaque error officia nostrum temporibus cum dolor unde provident optio porro, nobis atque.</p>
        <Style.BodyPost>
          <img src="https://www.gamereactor.pt/media/29/crashbandicoot4_3192963b.png" alt="" />
        </Style.BodyPost>
      </Style.HeaderPost>
    </Style.ContainerCard>
  )
};
