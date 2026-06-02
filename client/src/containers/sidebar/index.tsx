import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { BsTwitterX } from "react-icons/bs";
import { ProfileIcon } from "../../components/profileIcon";
import { GoHome } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { RiNotification4Line } from "react-icons/ri";
import { LuUserPlus } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import * as Style from "./Sidebar";

export const SideBar = () => {
  const { user } = useSelector((state: RootReducer) => state.user);

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
          <Link to="/connect_people">
            <li><LuUserPlus size={35} />Seguir</li>
          </Link>
          <Link to={`/${user?.username}`}>
            <li><FaRegUser size={35} />Perfil</li>
          </Link>
        </Style.ListMenu>
      </nav>

      <Style.Account>
        <ProfileIcon urlImage={user?.profile_image} />
        <span>
          <b>{user?.name}</b>
          <p>{user?.username}</p>
        </span>
      </Style.Account>

    </Style.SideMenu >
  )
};
