import logo from "../../assets/img/logo.png";
import { FaCoffee } from "react-icons/fa";
export const Navbar = () => {
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
      name: "Gourmet",
      link: "/gourmet",
    },
  ];

  return (
    // bg-gradient-to-r from-secondary  
    <div className="bg-brandDark text-white flex justify-between">
      <div className="container py-2">
        <div className="flex justify-between">
          {/* logo */}
          <div className="flex items-center justify-center">
            <a
              href=""
              className="font-bold text-2xl sm:text-4xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={logo} alt="#" className="w-20" />
              CaféVida
            </a>
          </div>
          {/* Links */}
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center m-6 gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className=" font-bold sm:text-1xl mx-4 text-white/100 hover:text-white/70 duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="w-40 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex justify-evenly ">
              <FaCoffee size={25} />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
