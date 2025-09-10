
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experiences from "./sections/Experiences.jsx";
import Certificates from "./sections/Certificates.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experiences /> */}
      <Certificates />
      <Contact />
      <Footer  />
    </div>
  );
};

export default App;