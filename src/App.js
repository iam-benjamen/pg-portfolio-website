import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import EnquirySection from "./components/EnquirySection";
import AboutSection from "./components/AboutSection";
import PartnersSection from "./components/PartnersSection";
import ServiceSection from "./components/ServiceSection";
import Animation from "./components/Animation";
import ReviewsSection from "./components/Reviews";
import WorksSection from "./components/WorksSection";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  
  if (loading) return <Animation />;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="works" element={<Project />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <AboutSection />
      <ServiceSection />
      <WorksSection />
      <ReviewsSection />
      <PartnersSection />
      <EnquirySection />
      <Footer />
    </>
  );
};

const Project = () => {
  return(
    <>
      <NavBar />
      <MainSection />
      <AboutSection />
      <ServiceSection />
      <Footer />
    </>
  )
}
export default App;
