import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import EnquirySection from "./components/EnquirySection";
import AboutSection from "./components/AboutSection";
import PartnersSection from "./components/PartnersSection";
import ServiceSection from "./components/ServiceSection";
import Footer from "./components/Footer";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});
const theme = extendTheme({ breakpoints });

function App() {
  return (
    <div className="App" className="font-link">
      <NavBar />
      <MainSection  />
      <AboutSection />
      <ServiceSection />
      <PartnersSection/>
      <EnquirySection/>
      <Footer/>
    </div>
  );
}

export default App;
