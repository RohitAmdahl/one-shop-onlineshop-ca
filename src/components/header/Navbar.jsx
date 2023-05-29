import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <nav className={`${nav ? "bg-green-100" : "bg-red-100 block"}`}>
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
      </nav>
    </>
  );
};

export default NavBar;
