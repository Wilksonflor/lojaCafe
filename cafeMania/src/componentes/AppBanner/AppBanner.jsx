import apple from "../../assets/img/app store.png";
import googlePlay from "../../assets/img/playstore.png";
import bgApple from "../../assets/img/bgApp.png";

const backgroundStyle = {
  backgroundImage: `url(${bgApple})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const AppBanner = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center gap-4 w-full md:w-10/12 lg:w-auto">
            <div className="space-y-5  mx-auto" data-aos="fade-up">
              <h2 className="text-2xl text-center sm:text-center sm:text-4xl text-white/90 font-semibold w-full">
                CaféVida está disponível nas plataformas Android e IOS
              </h2>
              <div className="flex flex-wrap justify-center sm:justify-center items-center gap-4">
                <a href="#" className="inline-block">
                  <img
                    src={apple}
                    alt="Imagem para baixar no app store"
                    className="max-w-[250px] md:max-w-[250px]"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src={googlePlay}
                    alt="Imagem para baixar na play Store"
                    className="w-150 h-150 max-w-[250px] md:max-w-[250px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
