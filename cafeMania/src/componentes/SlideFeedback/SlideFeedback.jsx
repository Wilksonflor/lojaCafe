import Slider from "react-slick";
import pessoa1 from "../../assets/img/pessoas/pessoa1.jpg";
import pessoa2 from "../../assets/img/pessoas/pessoa02.jpg";
import pessoa3 from "../../assets/img/pessoas/pesssoa03.jpeg";

const DepoimentosData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit numquam nesciunt quasi soluta veritatis consectetur facere qui dignissimos adipisci.",
    img: pessoa1,
  },
  {
    id: 2,
    name: "Andréa Pattero",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit numquam nesciunt quasi soluta veritatis consectetur facere qui dignissimos adipisci.",
    img: pessoa2,
  },
  {
    id: 3,
    name: "Franklin Goes",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit numquam nesciunt quasi soluta veritatis consectetur facere qui dignissimos adipisci.",
    img: pessoa3,
  },
  {
    id: 4,
    name: "Franklin Goes",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit numquam nesciunt quasi soluta veritatis consectetur facere qui dignissimos adipisci.",
    img: pessoa3,
  },
  {
    id: 5,
    name: "Franklin Goes",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit numquam nesciunt quasi soluta veritatis consectetur facere qui dignissimos adipisci.",
    img: pessoa3,
  },
  {
    id: 6,
    name: "Franklin Goes",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit numquam nesciunt quasi soluta veritatis consectetur facere qui dignissimos adipisci.",
    img: pessoa3,
  },
];

export const SlideFeedback = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container max-w-[1000px]">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold font-cursive text-gray-800">
            Depoimentos
          </h2>
        </div>
        {/* Section do depoimento */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {DepoimentosData.map((data, index) => (
              <div className="my-6 px-5" key={index}>
                <div className="flex flex-col gap-4 shadow-lg py-4 px-4 rounded-xl bg-primary/10 relative max-w-[800px]">
                  <div className="mb-2 w-16 h-16">
                    <img
                      src={data.img}
                      className="rounded-full w-full h-full object-cover"
                      alt={data.name}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-4">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h2 className="text-lg font-bold text-black/80 font-mark">
                        {data.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-black/20 text-7xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
