import { Link } from "react-router";
import { BsTwitterX } from "react-icons/bs";
import { ProfileIcon } from "../profileIcon";
import { GoHome } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { RiNotification4Line } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import * as Style from "./Sidebar";

export const SideBar = () => {
  return (
    <Style.SideMenu>
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
          <Link to="/">
            <li><LuUserPlus size={35} />Seguir</li>
          </Link>
          <Link to="/me">
            <li><FaRegUser size={35} />Perfil</li>
          </Link>
        </Style.ListMenu>
      </nav>

      <Style.Account>
        <ProfileIcon urlImage="" />
        <span>
          <b>Guilheme R.Silva</b>
          <p>@guilhermers23</p>
        </span>
      </Style.Account>

    </Style.SideMenu >
  )
};
