import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";

import type { RootReducer } from "../../store";
import { ProfileIcon } from "../profileIcon";
import { SideBar } from "../../containers/sidebar";
import * as Style from "./HeaderMobileStyle";

const HeaderMobile = () => {
  const { user } = useSelector((state: RootReducer) => state.user);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Style.Header>
        <nav>
          <button onClick={() => setOpen(!open)}>
            <ProfileIcon urlImage={user?.profile_image} />
          </button>
          <Link to="/">
            <header><BsTwitterX size={35} /></header>
          </Link>
          <span></span>
        </nav>
      </Style.Header>
      {open && <SideBar mobile={open} />}
    </>
  )
};

export default HeaderMobile;
