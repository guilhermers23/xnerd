import { useEffect } from "react";
import { Outlet } from "react-router"
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { useGetMeQuery } from "../../../services/Users.Service";
import { logout, setUser } from "../../../store/reducers/user";

import { colors } from "../../../styles/theme";
import { SideBar } from "../../sidebar";
import * as Style from "./LayoutStyled";

export const LayoutDefault = () => {
  const { data: getUser } = useGetMeQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get("token") && getUser) dispatch(setUser(getUser));
    if (!Cookies.get("token") && getUser) dispatch(logout());
  }, [getUser, dispatch])

  return (
    <Style.Main>
      <SideBar />
      <Outlet />
      <aside style={{ borderLeft: `solid 1px ${colors.gray500}` }}></aside>
    </Style.Main>
  )
};
