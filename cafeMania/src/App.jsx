import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Banner } from "./componentes/Banner/Banner";
import { Home } from "./pages/Home/Home";
import { Cards } from "./componentes/Cards/Cards";
import { AppBanner } from "./componentes/AppBanner/AppBanner";
import { SlideFeedback } from "./componentes/SlideFeedback/SlideFeedback";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <Cards />
        <Banner />
        <AppBanner />
        <SlideFeedback />
      </div>
    </>
  );
}

export default App;
