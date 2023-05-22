import React from "react";
import Logo from "../../pictures/logo.png";
import { NavLink } from "react-router-dom";
const AppLogo = () => {
  return (
    <>
      <NavLink to="/">
        <div className=" container mx-auto w-1/2 ">
          <img
            src={Logo}
            alt="website logo"
            className="size mx-auto  px-3 w-25 h-25 "
          />
        </div>
      </NavLink>
    </>
  );
};

export default AppLogo;
