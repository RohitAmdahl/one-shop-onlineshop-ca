import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import AppLogo from "./AppLogo";
import { CartContext } from "../../context/CartContext";
import Logo from "../../pictures/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <div className="w-full flex justify-around ">
        <AppLogo />
        <div className="flex  justify-center">
          <Link to="/cart" className="w-full flex justify-between items-center">
            <BsHandbag className="text-3xl  " />
            <span className="w-10 h-10 font-bold text-center text-lg py-1 rounded-full bg-violet-300">
              {itemAmount}
            </span>
          </Link>
        </div>
      </div>
      <nav className="flex bg-yellow-100">
        <div className="flex container mx-auto justify-around   ">
          <ul className=" flex justify-between  gap-8 ">
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium">
              <NavLink className="font-semibold text-lg" to="/">
                Home
              </NavLink>
            </li>
            <li className="p-2  hover:text-indigo-800 hover:underline font-medium  ">
              <NavLink className="font-semibold text-lg" to="/product">
                Products
              </NavLink>
            </li>
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium ">
              <NavLink className="font-semibold text-lg" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className={`${nav ? "bg-green-100" : "bg-red-100 block"}`}>
        <div className="text-center py-3 border-b-2 border-y-pink w-1/2 mx-auto">
          <ul className=" hidden md:flex  container mx-auto lg:flex lg: justify-evenly lg:items-start max-w-xl">
            <li className="p-2   hover:text-indigo-800 hover:underline font-medium">
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li className="p-2  hover:text-indigo-800 hover:underline font-medium  ">
              <NavLink className="" to="/product">
                Products
              </NavLink>
            </li>
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium ">
              <NavLink className="" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="p-2  hover:text-indigo-800 hover:underline font-medium">
              <NavLink to="/cart">
                <BsHandbag className=" absolute  text-2xl flex justify-center " />
                <span className="w-full font-bold text-md relative    left-5 -top-3 px-2 py-1 rounded-full bg-violet-400">
                  {itemAmount}
                </span>
              </NavLink>
            </li>
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="block md:hidden cursor-pointer"
          >
            <AiOutlineMenu className="mobile-nav-icon" />
            <AiOutlineClose className="mobile-nav-icon close-outline" />
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
