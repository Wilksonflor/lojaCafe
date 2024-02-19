import bgFooter from "../../assets/img/bgfooter.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const footerLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Serviços",
    link: "/#servicos",
  },
  {
    id: 3,
    title: "Gourmet",
    link: "/#gourmet",
  },
];
const bgImage = {
  backgroundImage: `url(${bgFooter})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

export const Footer = () => {
  return (
    <>
      <div style={bgImage} className="text-white" data-aos="fade-up">
        <div className="bg-black/40 min-h-[400px]">
          <div className="container grid md:grid-cols-3 pb-20 pt-5">
            {/* Detalhes da empresa */}
            <div className="py-8 px-4">
              <a
                href=""
                className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
              >
                CaféVida
              </a>
              <p className="pt-4">
                CaféVida: O compilador da sua produtividade. Comece o dia com o
                seu Expresso perfeito.
              </p>
              <a
                href=""
                className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rouded-full"
              >
                Veja nosso canal no YouTube
              </a>
            </div>

            {/* Links do footer */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div className="py-8 px-4">
                <h2 className="text-xl font-semibold sm:text-left mb-3">
                  Acesse nossos links
                </h2>
                <ul className="space-y-3">
                  {footerLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Segunda coluna dos links */}
              <div className="py-8 px-4">
                <h2 className="text-xl font-semibold sm:text-left mb-3">
                  Acesse nossos links
                </h2>
                <ul className="space-y-3">
                  {footerLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Endereço */}
              <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h3 className="text-xl font-semibold sm:text-left mb-3">
                  Endereço
                </h3>
                <div>
                  <p className="mb-3">Palmares - Pernambuco</p>
                  <p>(81) 99999-9999</p>
                </div>

                <div className="space-x-3 mt-6">
                  <a href="">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
