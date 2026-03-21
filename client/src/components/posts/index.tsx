import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { ProfileIcon } from "../profileIcon";
import type { IPost } from "../../types/IPost";
import * as Style from "./PostCardStyled";

export const Post = (props: Omit<IPost, "id">) => {
  return (
    <Style.ContainerCard>
      <ProfileIcon />
      <Style.HeaderPost>
        <h4>{props.user.name} <i>{props.user.username}</i></h4>
        <p>{props.content}</p>
        <Style.BodyPost>
          {props.midia && (
            <img src={props.midia} alt="Mídia da Postagem" />
          )}
        </Style.BodyPost>
        <Style.IconsList>
          <span> <FaRegComment size={20} cursor="pointer" title="Comentários" /> {props.comments_count} </span>
          <span> <BiRepost size={25} cursor="pointer" title="Repostagens" /> 20 </span>
          <span> <IoIosHeartEmpty size={20} cursor="pointer" title="Like" /> {props.likes_count} </span>
          <span> <BsGraphUp size={20} cursor="pointer" title="Views" /> 20mil </span>
        </Style.IconsList>
      </Style.HeaderPost>
    </Style.ContainerCard>
  )
};
