import React from "react";
import Logo from "../../pictures/logo.png";
import { NavLink } from "react-router-dom";
const AppLogo = () => {
  return (
    <>
      <NavLink to="/">
        <div>
          <img src={Logo} alt="website logo" className=" mx-auto  p-3  " />
        </div>
      </NavLink>
    </>
  );
};

export default AppLogo;
