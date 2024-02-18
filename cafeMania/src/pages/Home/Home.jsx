import Café from "../../assets/img/café_novo.png";

export const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sb:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* seção do texto */}

          <div className="flex flex-col  justify-center h-full overflow-hidden">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Explore o melhor{" "}
              <span className="text-primary/70 font-mark">Café </span>
              para DEV
            </h1>
            <div className="overflow-hidden">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:secondary/70 duration-200 my-4">
                Café e código
              </button>
            </div>
          </div>
          {/* seção da imagem */}
          <div className="min-h [450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={Café}
              alt="Imagem do café"
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
