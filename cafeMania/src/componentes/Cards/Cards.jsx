import Img1 from "../../assets/img/café_novo.png";
import Img2 from "../../assets/img/café03.png";
import Img3 from "../../assets/img/latteMacchiato.png";
import Img4 from "../../assets/img/pngwing.com.png";
import Img5 from "../../assets/img/Pepper.png";
import Img6 from "../../assets/img/flatWhite.png";

export const Cards = () => {
  const produtosData = [
    {
      id: 1,
      img: Img1,
      name: "Tradicional",
      descrição: "Café preto clássico, sem adições.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img2,
      name: "Expresso",
      descrição: "Café concentrado, encorpado e forte.",
      aosDelay: "100",
    },
    {
      id: 3,
      img: Img3,
      name: "Cappuccino",
      descrição: "Espresso com leite vaporizado e espuma.",
      aosDelay: "100",
    },
    {
      id: 4,
      img: Img4,
      name: "Café Latte",
      descrição: "Espresso com leite vaporizado, suave e cremoso.",
      aosDelay: "100",
    },
    {
      id: 5,
      img: Img5,
      name: "Pepper Brew Coffee",
      descrição: "Café com um toque picante de pimenta.",
      aosDelay: "100",
    },
    {
      id: 6,
      img: Img6,
      name: "Flat White",
      descrição: "Café suave da Austrália e Nova Zelândia.",
      aosDelay: "100",
    },
  ];

  return (
    <>
      <span id="services"></span>
      <div className="py-10 overflow-hidden">
        <div className="container">
          {/* titulo */}
          <div className="text-center mb-20" data-aos="fade-up">
            <h3 className="text-6xl font-bold font-cursive">
              O Melhor café para você!
            </h3>
          </div>

          {/* Section dos cards dos produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-14 place-items-center">
            {produtosData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] relative"
                >
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[170px] max-h-[170px] cover mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold">{data.name}</h3>
                    <p className="text-white-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.descrição}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
