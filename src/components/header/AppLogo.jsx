import React from "react";
import Logo from "../../pictures/logo.png";
import { NavLink } from "react-router-dom";
const AppLogo = () => {
  return (
    <NavLink to="/">
      <img src={Logo} alt="website logo" className=" mx-auto  p-3  " />
    </NavLink>
  );
};

export default AppLogo;
