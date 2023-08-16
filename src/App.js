import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar /> 
      <Home /> 
      <Socials/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
