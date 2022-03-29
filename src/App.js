import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import EnquirySection from "./components/EnquirySection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
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
      <MainSection id="nav-bar" />
      <AboutSection id="about-section" />
      <ServiceSection id="service-section" />
      <EnquirySection id="enquiry-section" />
    </div>
  );
}

export default App;
