import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { useGetMeQuery } from "../../services/Auth.Service";
import { logout, setUser } from "../../store/reducers/user";

import { CreatePost } from "../../components/createPost";
import { Post } from "../../components/posts";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: getUser, error, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (Cookies.get("token") && getUser) dispatch(setUser(getUser));
    if (!Cookies.get("token") && getUser) dispatch(logout());

  }, [getUser, dispatch])

  console.log(`Olá ${getUser?.name}`);

  return (
    <section>
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </section>
  )
};
