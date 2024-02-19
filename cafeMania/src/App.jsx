import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./componentes/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Banner } from "./componentes/Banner/Banner";
import { Cards } from "./componentes/Cards/Cards";
import { AppBanner } from "./componentes/AppBanner/AppBanner";
import { SlideFeedback } from "./componentes/SlideFeedback/SlideFeedback";
import { Footer } from "./componentes/Footer/Footer";

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
      <div className="overflow-y-hidden overflow-x-hidden">
        <Navbar />
        <Home />
        <Cards />
        <Banner />
        <AppBanner />
        <SlideFeedback />
        <Footer />
      </div>
    </>
  );
}

export default App;
