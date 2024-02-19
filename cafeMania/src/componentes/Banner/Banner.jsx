import imgBanner from "../../assets/img/café03.png";
import bgTexture from "../../assets/img/bgBanner.png";
import { GrSecure } from "react-icons/gr";
import { FaFire } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

const bgImage = {
  backgroundImage: `url(${bgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const Banner = () => {
  return (
    <>
      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <img
                src={imgBanner}
                alt="Imagem de café com torra de café"
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_ rgba(0,0,0,1)"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h3
                className="text-3xl sm:text-5xl font-bold font-cursive"
                data-aos="fade-up"
              >
                Premium Blend - Grãos selecionados
              </h3>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur sint quos cum qui quam animi vero molestias nobis
                aperiam alias!
              </p>

              <div className="grid grid-cols-2 gap-6 mt-5">
                <div className="space-y-5 ">
                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Cafés seguros e confiáveis</span>
                  </div>

                  <div
                    className="flex items-center gap-3 mt-3 mb-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <FaFire className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200" />
                    <span>Café sempre quente e fresco</span>
                  </div>

                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
                    <span>Combine seu café com os melhores lanches</span>
                  </div>
                </div>

                <div
                  className="border-l-4 border-primary/50 pl-6 space-y-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3
                    className="text-4xl font-semibold font-cursive"
                    data-aos="fade-left"
                    data-aos-delay="350"
                  >
                    Amantes de chá
                  </h3>
                  <p
                    className="text-gray-500 text-sm"
                    data-aos="fade-left"
                    data-aos-delay="350"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem adipisci accusamus in, laudantium modi consequuntur
                    reiciendis perferendis nulla officia laboriosam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
