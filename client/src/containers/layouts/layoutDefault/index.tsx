import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { useGetMeQuery } from "../../../services/Users.Service";
import { logout, setUser } from "../../../store/reducers/user";

import { colors } from "../../../styles/theme";
import { SideBar } from "../../sidebar";
import * as Style from "./LayoutStyled";
import HeaderMobile from "../../../components/headerMobile";

export const LayoutDefault = () => {
  const { data: getUser } = useGetMeQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token") && getUser) dispatch(setUser(getUser));
    if (!Cookies.get("token") && !getUser) {
      dispatch(logout())
      navigate("/login")
    }
  }, [getUser, dispatch, navigate])

  return (
    <Style.Main>
      <HeaderMobile />
      <SideBar />
      <Outlet />
      <aside style={{ borderLeft: `solid 1px ${colors.gray500}` }}></aside>
    </Style.Main>
  )
};
