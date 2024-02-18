import Img1 from "../../assets/img/café_novo.png";

export const Cards = () => {
  const produtosData = [
    {
      id: 1,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 3,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 5,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 6,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 6,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 6,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
    {
      id: 6,
      img: Img1,
      name: "Expresso",
      descrição: "Lorem Ipsum is simply dummy text",
      aosDelay: "100",
    },
  ];

  return (
    <>
      <span id="services"></span>
      <div className="py-10 overflow-hidden">
        <div className="container">
          {/* titulo */}
          <div className="text-center mb-20">
            <h3 className="text-6xl font-bold font-cursive">
              Melhor café para você!
            </h3>
          </div>

          {/* Section dos cards dos produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 mg:grid cols-3 gap-14 md:gap-50 place-items-center">
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
                      className="max-w-[170px] block mx-auto transform -translate-y-10 group-hover:scale-110 group-hover:rotate-6 duration-300"
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
