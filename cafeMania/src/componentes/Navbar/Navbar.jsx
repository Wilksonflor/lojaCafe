import { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
// import s from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const Menus = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
    },
    {
      id: 2,
      name: "Itens",
      link: "/produtos",
    },
    {
      id: 3,
      name: "Chás",
      link: "/chas",
    },
  ];

  return (
    <div className="bg-brandDark text-white pr-4">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="font-bold text-2xl flex items-center gap-2 tracking-wider font-cursive"
            >
              <img src={logo} alt="#" className="w-20" />
              CaféVida
            </a>
          </div>
          {/* Ícone do menu para telas menores */}
          <button className="sm:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {/* Menu para telas maiores */}
          <ul className="hidden sm:flex items-center gap-8  ">
            {Menus.map((data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className="font-bold text-white hover:text-gray-400 duration-200"
                  onClick={closeMenu}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Botão de comprar para telas maiores */}
          <button className="hidden sm:flex w-32 bg-primary/70 px-3 py-1 rounded-full hover:scale-105 duration-200 flex justify-evenly items-center">
            <FaCoffee size={25} />
            Comprar
          </button>
        </div>
        {/* Menu responsivo */}
        {isOpen && (
          <ul className="sm:hidden flex-col gap-6 m sm:gap-12 border-b-2 mb-3">
            {Menus.map((data, index) => (
              <li
                key={index}
                className="text-center h-16  mt-10 flex items-center justify-center bg-white300"
              >
                <a
                  href={data.link}
                  className="font-bold text-white text-xl hover:text-gray-400 duration-200 "
                  onClick={closeMenu}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
