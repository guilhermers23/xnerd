import { BsTwitterX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";

import type { RootReducer } from "../../store";
import { ProfileIcon } from "../profileIcon";
import * as Style from "./HeaderMobileStyle";

const HeaderMobile = () => {
  const { user } = useSelector((state: RootReducer) => state.user);

  return (
    <Style.Header>
      <nav>
        <ProfileIcon urlImage={user?.profile_image} />
        <Link to="/">
          <header><BsTwitterX size={35} /></header>
        </Link>
      <span></span>
      </nav>
    </Style.Header>
  )
};

export default HeaderMobile;
