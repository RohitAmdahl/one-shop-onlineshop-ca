import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import AppLogo from "./AppLogo";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <div className="w-full max-w-4xl mx-auto flex justify-around ">
        <AppLogo />
        <div className="flex  justify-center">
          <Link to="/cart" className="w-full flex justify-between items-center">
            <BsHandbag className="text-3xl  " />
            <span className="w-10 h-10  text-center text-2xl py-1 rounded-full bg-violet-100">
              {itemAmount}
            </span>
          </Link>
        </div>
      </div>
      <nav className="flex bg-yellow-100 max-w-2xl container mx-auto shadow-sm rounded-full">
        <div className="flex container mx-auto justify-around p-2">
          <ul className=" flex justify-between  gap-8 ">
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium">
              <NavLink
                // className={({ isActive }) =>
                //   isActive &&
                // }
                className={"font-bold text-lg underline"}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="p-2  hover:text-indigo-800 hover:underline font-medium  ">
              <NavLink
                // className={({ isActive }) =>
                //   isActive && "font-bold text-lg underline"
                // }
                className={"font-bold text-lg underline"}
                to="/product"
              >
                Products
              </NavLink>
            </li>
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium ">
              <NavLink
                // className={({ isActive }) =>
                //   isActive && "font-bold text-lg underline "
                // }
                className={"font-bold text-lg underline"}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
