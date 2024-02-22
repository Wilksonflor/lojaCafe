import logo from "../../assets/img/logo.png";
import { useState } from "react"; // Importe o useState
import { FaCoffee } from "react-icons/fa";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false); // Função para fechar o menu ao clicar em um item
  };
  const Menus = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
    },
    {
      id: 2,
      name: "Serviços",
      link: "/servicos",
    },
    {
      id: 3,
      name: "Chás",
      link: "/chas",
    },
  ];

  return (
    <div className="bg-brandDark text-white flex justify-between">
      <div className="container py-2">
        <div className="flex justify-between">
          {/* Logo */}
          <div
            className="flex items-center justify-center"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <a
              href="/"
              className="font-bold text-2xl sm:text-4xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={logo} alt="#" className="w-20" />
              CaféVida
            </a>
          </div>
          {/* Ícone do menu para telas menores */}
          <button className="sm:hidden text-white mr-4" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
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

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex items-center m-6 gap-4`}
          >
            {Menus.map((data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className=" font-bold sm:text-1xl mx-4 text-white/100 hover:text-white/70 duration-200"
                  onClick={closeMenu}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden sm:flex w-32 bg-primary/70 px-3 py-1 mt-5 rounded-full hover:scale-105 duration-200 flex justify-evenly items-center">
            <FaCoffee size={25} />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
