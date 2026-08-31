import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Portfolio", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Inquiry", path: "/inquiry" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white px-6 py-5 sm:px-8 sm:py-6 lg:px-12 xl:px-30 rounded-md ">

      <div className="flex items-center justify-between">
        

        <h1 className="uppercase text-2xl sm:text-3xl tracking-[2px] font-semibold">
          asthetique
        </h1>

        <ul className="hidden lg:flex items-center gap-6 text-md font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="cursor-pointer hover:text-black transition-colors"
            >
               <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "text-black opacity-100"
                      : "text-gray-700 opacity-70 hover:opacity-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

    
        <div className="hidden lg:block">
         <Link to="/consultation">
          <Button
            color="black"
            textColor="white"
            text="Consultation"
          />
         </Link>
        </div>

      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          
        >
          {isOpen ? (
            <X size={28} strokeWidth={1.5} />
          ) : (
            <Menu size={28} strokeWidth={1.5} />
          )}
        </button>
      </div>

     
   {isOpen && (
  <div className="lg:hidden mt-6 border-t border-gray-200 pt-5">
    <ul className="flex flex-col gap-5 text-md font-medium text-gray-700">
      {navItems.map((item) => (
        <li
          key={item.path}
          onClick={() => setIsOpen(false)}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer transition-colors ${
                isActive
                  ? "text-black opacity-100"
                  : "text-gray-700 opacity-70 hover:opacity-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="mt-6">
      <Link to="/consultation">
        <Button
          color="black"
          textColor="white"
          text="Consultation"
        />
      </Link>
    </div>
  </div>
)}
    </header>
  );
};

export default Navbar;