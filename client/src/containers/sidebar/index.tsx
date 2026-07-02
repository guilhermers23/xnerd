import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import { GoHome } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuUserPlus } from "react-icons/lu";
import { RiNotification4Line } from "react-icons/ri";

import type { RootReducer } from "../../store";
import { logout } from "../../store/reducers/user";
import { ProfileIcon } from "../../components/profileIcon";
import { Button } from "../../styles/GlobalStyles";
import * as Style from "./Sidebar";

type Props = { mobile?: boolean };

export const SideBar = ({ mobile = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootReducer) => state.user);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const out = () => {
    dispatch(logout());
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <Style.SideMenu $isOpen={mobile}>
      <nav>
        <Link to="/">
          <header><BsTwitterX size={35} /></header>
        </Link>
        <Style.ListMenu>
          <Link to="/">
            <li> <GoHome size={35} /> Home</li>
          </Link>
          <Link to="/">
            <li><TbSearch size={35} />Explorar</li>
          </Link>
          <Link to="/">
            <li> <RiNotification4Line size={35} />Notificaçoes</li>
          </Link>
          <Link to="/connect_people">
            <li><LuUserPlus size={35} />Seguir</li>
          </Link>
          <Link to={`/${user?.username}`}>
            <li><FaRegUser size={35} />Perfil</li>
          </Link>
        </Style.ListMenu>
      </nav>

      <Style.Account onClick={toggleDropdown}>
        <ProfileIcon urlImage={user?.profile_image_url} />
        <span>
          <b>{user?.name}</b>
          <p>{user?.username}</p>
        </span>

        <Style.ButtonLogout $isOpen={isOpen}>
          <Button style={{ backgroundColor: 'red' }}
            onClick={out}>Sair</Button>
        </Style.ButtonLogout>
      </Style.Account>

    </Style.SideMenu >
  )
};
