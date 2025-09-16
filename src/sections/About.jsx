import { useRef, useState } from "react"; // 1. Impor useState kembali
import Card from "../components/Card.jsx";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";

const About = () => {
  const grid2Container = useRef();
  // 2. Tambahkan state untuk melacak interaksi tap/klik
  const [isGrid1Active, setGrid1Active] = useState(false);

  return (
    <section className="c-space section-spacing" id="aboute">
      <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        About Me
      </h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-8 md:mt-12 px-4 md:px-0">
        
        {/* Grid 1 - Sekarang responsif terhadap Tap di mobile */}
        <div 
          className="group relative flex items-end grid-default-color col-span-1 md:col-span-3 lg:col-span-2 min-h-[18rem] md:min-h-0 overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
          // 3. Tambahkan event onClick
          onClick={() => setGrid1Active(!isGrid1Active)}
        >
          {/* Gambar sebagai background */}
          <img 
            src="assets/foto.jpg" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 ${
              isGrid1Active ? "!grayscale-0 !scale-110" : ""
            }`}
            alt="Teguh Ahmadi Zebua"
          />
          
          {/* Gradient overlay untuk keterbacaan teks */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Konten teks di atas gambar */}
          <div className={`relative z-10 p-4 sm:p-6 transition-all duration-300 transform group-hover:opacity-0 group-hover:translate-y-4 ${
              isGrid1Active ? "!opacity-0 !translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 headtext text-white">
              Hi, I'm Teguh Ahmadi Zebua
            </p>
            <p className="text-sm sm:text-base subtext text-gray-200">
              Over the last 3 years, I developed my frontend and backend dev
              skills to deliver dynamic software and web applications.
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color col-span-1 md:col-span-3 lg:col-span-2 min-h-[18rem] md:min-h-0 rounded-lg hover:shadow-xl transition-all duration-300">
          <div 
            ref={grid2Container} 
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
          >
            <p className="absolute flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500/30 font-bold tracking-wider animate-pulse">
              CODE IS CRAFT
            </p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Patterns" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Design Principles" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/spring-security.png" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/Spring_Boot.png" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/react.png" containerRef={grid2Container} className="hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="relative grid-black-color col-span-1 md:col-span-2 min-h-[18rem] md:min-h-0 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="z-10 w-full sm:w-3/4 md:w-[50%] p-4 sm:p-6">
            <p className="text-xl sm:text-2xl font-bold mb-2 headtext group-hover:text-blue-400 transition-colors duration-300">
              Time Zone
            </p>
            <p className="text-sm sm:text-base subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute right-4 sm:right-8 md:left-[30%] top-[20%] md:top-[10%] scale-75 sm:scale-90 md:scale-100 group-hover:animate-spin transition-all duration-1000">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color col-span-1 md:col-span-2 min-h-[12rem] sm:min-h-[14rem] md:min-h-0 rounded-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-blue-600/20 group">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full h-full p-4 sm:p-5 md:p-6">
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold headtext group-hover:scale-105 transition-transform duration-300 leading-tight">
              Do you want to start a project together?
            </p>
            <div className="transform hover:scale-105 transition-transform duration-300 w-full flex justify-center">
              <CopyEmailButton />
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="relative grid-default-color col-span-1 md:col-span-2 min-h-[18rem] md:min-h-0 rounded-lg overflow-hidden p-4 sm:p-6 flex items-center hover:shadow-xl transition-all duration-300">
          <div className="z-10 w-1/2">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 w-1/2 start-[50%] scale-110 flex items-center justify-center">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;