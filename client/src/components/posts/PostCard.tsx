import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { ProfileIcon } from "../profileIcon/ProfileIcon";
import * as Style from "./PostCardStyled";

export const PostCard = () => {
  return (
    <Style.ContainerCard>
      <ProfileIcon />
      <Style.HeaderPost>
        <h4>Guilherme R.Siva <i>@guilhermers23</i></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur id nemo blanditiis assumenda, libero iure enim dolore eaque error officia nostrum temporibus cum dolor unde provident optio porro, nobis atque.</p>
        <Style.BodyPost>
          <img src="https://www.gamereactor.pt/media/29/crashbandicoot4_3192963b.png" alt="" />
          <div>
            <span> <FaRegComment size={20} cursor="pointer" title="Comentários" /> 20 </span>
            <span> <BiRepost size={25} cursor="pointer" title="Repostagens" /> 20 </span>
            <span> <IoIosHeartEmpty size={20} cursor="pointer" title="Like" /> 20 </span>
            <span> <BsGraphUp size={20} cursor="pointer" title="Views" /> 20mil </span>
          </div>
        </Style.BodyPost>
      </Style.HeaderPost>
    </Style.ContainerCard>
  )
};
