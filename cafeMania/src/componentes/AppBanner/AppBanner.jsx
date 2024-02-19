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
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-5 max-w-xl mx-auto " data-aos="fade-up">
              <h2 className="text-2xl text-center sm:text-left sm:text-4xl text-white/90 font-semibold pl-3">
                CaféVida está disponível nas plataformas Android e IOS
              </h2>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#" className="">
                  <img
                    src={apple}
                    alt="Imagem para baixar no app store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={googlePlay}
                    alt="Imagem para baixar na play Store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
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
