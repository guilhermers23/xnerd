import { Link } from "react-router";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { ProfileIcon } from "../profileIcon";
import { MdOutlineFavorite } from "react-icons/md";
import { useLikeMutation } from "../../services/Post.Service";
import * as Style from "./PostCardStyled";

export const Post = ({ user, content, midia, comments_count, likes_count, id, is_liked }: IPost) => {
  const [like] = useLikeMutation();

  return (
    <Style.ContainerCard>
      <Link to={`/${user.username}`}>
        <ProfileIcon urlImage={user.profile_image_url || '/avatar_default.jpg'} />
      </Link>
      <Style.HeaderPost>
        <h4>{user.name} <i>{user.username}</i></h4>
        <Link to={`/post/detail/${id}/`} key={id}>
          <p>{content}</p>
          <Style.BodyPost>
            {midia && <img src={midia} alt="Mídia da Postagem" />}
          </Style.BodyPost>
        </Link>
        <Style.IconsList>
          <Link to={`/post/detail/${id}/`} key={id}>
            <span> <FaRegComment size={20} cursor="pointer" title="Comentários" /> {comments_count} </span>
          </Link>
          <span> <BiRepost size={25} cursor="pointer" title="Repostagens" /> 20 </span>

          <span onClick={() => like(id)}>
            {!is_liked ? (
              <IoIosHeartEmpty size={20} cursor="pointer" title="DesLike" />
            ) : (
              <MdOutlineFavorite color="red" size={20} cursor="pointer" title="Like" />
            )} {likes_count} </span>
          <span> <BsGraphUp size={20} cursor="pointer" title="Views" /> 20mil </span>
        </Style.IconsList>
      </Style.HeaderPost>

    </Style.ContainerCard>
  )
};
