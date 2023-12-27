import About from "./About us/About";
import Adres from "./Adres/Adres";
import Bottom from "./Bottom/Bottom";
import Consultation from "./Consultation/Consultation";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Pagination from "./Projects/Projects";
import Reputation from "./Reputation/Reputation";
import Services from "./Services/Services";
import Top from "./Top/Top";

function App() {
  return (
    <div className="App">
      <Top/>
      <Navbar/>
      <Hero/>
      <Reputation/>
      <About/>
      <Services/>
      <Experience/>
      <Consultation/>
      <Pagination/>
      <Contact/>
      <Adres/>
      <Bottom/>
      
    </div>
  );
}

export default App;
