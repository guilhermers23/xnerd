import { CreatePost } from "../../components/createPost";
import { Post } from "../../components/posts";

export const Home = () => {
  return (
    <section>
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </section>
  )
};
