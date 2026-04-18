import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { ProfileIcon } from "../profileIcon";
import type { IPost } from "../../types/IPost";
import * as Style from "./PostCardStyled";

export const Post = ({ user, content, midia, comments_count, likes_count }: Omit<IPost, "id">) => {
  return (
    <Style.ContainerCard>
      <ProfileIcon urlImage={user.profile_image} />
      <Style.HeaderPost>
        <h4>{user.name} <i>{user.username}</i></h4>
        <p>{content}</p>
        <Style.BodyPost>
          {midia && <img src={midia} alt="Mídia da Postagem" />}
        </Style.BodyPost>
        <Style.IconsList>
          <span> <FaRegComment size={20} cursor="pointer" title="Comentários" /> {comments_count} </span>
          <span> <BiRepost size={25} cursor="pointer" title="Repostagens" /> 20 </span>
          <span> <IoIosHeartEmpty size={20} cursor="pointer" title="Like" /> {likes_count} </span>
          <span> <BsGraphUp size={20} cursor="pointer" title="Views" /> 20mil </span>
        </Style.IconsList>
      </Style.HeaderPost>
    </Style.ContainerCard>
  )
};
