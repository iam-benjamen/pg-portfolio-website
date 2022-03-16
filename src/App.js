import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import EnquirySection from "./components/EnquirySection"
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App" className="font-link">
      <NavBar/>
      <MainSection />
      <AboutSection/>
      <EnquirySection/>
    </div>
  );
}

export default App;
