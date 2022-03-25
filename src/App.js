import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import EnquirySection from "./components/EnquirySection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ServiceSectionSWiper from "./components/ServiceSectionSwiper";

function App() {
  return (
    <div className="App" className="font-link">
      <NavBar />
      <MainSection id="nav-bar" />
      <AboutSection id="about-section" />
      <ServiceSection id="service-section" />
      {/* <ServiceSectionSWiper/> */}
      <EnquirySection id="enquiry-section" />
    </div>
  );
}

export default App;
