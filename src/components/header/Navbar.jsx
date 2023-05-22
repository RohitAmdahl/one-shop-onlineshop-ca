import React from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  //   const [nav, setNav] = useState(false);

  //   const handleNav = () => {
  //     setNav(!nav);
  //   };
  return (
    <>
      <nav className="text-fontcolor font-pins ">
        <div className="text-center py-3 border-b-2 border-y-pink w-1/2 mx-auto">
          <ul className="hidden md:flex  container mx-auto lg:flex lg: justify-evenly lg:items-start max-w-xl">
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium">
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li className="p-2 hover:text-indigo-800 hover:underline font-medium  ">
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
                <BsHandbag className=" absolute " />
                <span className="w-full relative bottom-5 left-3">6</span>
              </NavLink>
            </li>
          </ul>
          <div className="block md:hidden cursor-pointer">
            <AiOutlineMenu className="mobile-nav-icon" />
            <AiOutlineClose className="mobile-nav-icon close-outline" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
