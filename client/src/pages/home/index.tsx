import { CreatePost } from "../../components/createPost";
import { Post } from "../../components/posts";

export const Home = () => {
  return (
    <div>
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </div>
  )
};
