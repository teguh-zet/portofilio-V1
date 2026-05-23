
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";
import GridItem from "../components/GridItem.jsx";

const About = () => {
  const [isProfileActive, setProfileActive] = useState(false);

  return (
    <section className="c-space section-spacing" id="aboute">
      <motion.h2
        className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="gradient-text">About Me</span>
      </motion.h2>
      <p className="text-center text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
        Get to know me, my skills, and what drives my passion for technology.
      </p>
      <div className="section-divider mb-8" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-8 md:mt-12 px-4 md:px-0">

        {/* Grid 1: Profile Card */}
        <GridItem
          as="button"
          onClick={() => setProfileActive(!isProfileActive)}
          className="group grid-default-color col-span-1 md:col-span-2 md:row-span-2 min-h-[20rem] sm:min-h-[22rem] md:min-h-0 text-left"
        >
          <img
            src="assets/foto.jpg"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110 ${
              isProfileActive ? "!grayscale-0 !scale-110" : "grayscale"
            }`}
            alt="Teguh Ahmadi Zebua"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className={`relative z-10 flex flex-col justify-end h-full p-4 sm:p-6 transition-all duration-300 transform ${
              isProfileActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-4"
            }`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 headtext text-white">
              Teguh Ahmadi Zebua
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Full-Stack Developer
            </p>
          </div>
        </GridItem>

        {/* Grid 2: Summary Card */}
        <GridItem className="grid-default-color col-span-1 md:col-span-4 min-h-[18rem] sm:min-h-[20rem] md:min-h-0 flex flex-col justify-center p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Passionate about building <span className="gradient-text-accent">impactful software</span>
          </h3>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-4">
            Seorang Full-Stack Developer dengan pengalaman mengembangkan aplikasi web dan backend service. 
            Berpengalaman dalam membangun sistem skala besar menggunakan Java, Spring Boot, Golang, dan React.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {["Java", "Golang", "Spring Boot", "React", "Next.js", "PostgreSQL", "REST API"].map((skill) => (
              <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-royal/20 text-lavender border border-royal/30">
                {skill}
              </span>
            ))}
          </div>
        </GridItem>

        {/* Grid 3: Location Card */}
        <GridItem className="group grid-black-color col-span-1 md:col-span-2 min-h-[16rem] sm:min-h-[18rem] md:min-h-0">
          <div className="z-10 w-full sm:w-3/4 md:w-[50%] p-4 sm:p-6">
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 headtext group-hover:text-blue-400 transition-colors duration-300">
              Time Zone
            </p>
            <p className="text-xs sm:text-sm md:text-base subtext">
              I'm based in Bandung, Indonesia — and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute right-4 sm:right-8 md:left-[30%] top-[15%] sm:top-[20%] md:top-[10%] scale-70 sm:scale-75 md:scale-90 lg:scale-100 group-hover:animate-spin transition-all duration-1000">
            <Globe />
          </figure>
        </GridItem>

        {/* Grid 4: Contact Card */}
        <GridItem className="group grid-special-color col-span-1 md:col-span-2 min-h-[14rem] sm:min-h-[16rem] md:min-h-0 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-blue-600/20">
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-full p-4 sm:p-6">
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold headtext group-hover:scale-105 transition-transform duration-300 leading-tight px-2">
              Do you want to start a project together?
            </p>
            <div className="transform hover:scale-105 transition-transform duration-300 w-full flex justify-center">
              <CopyEmailButton />
            </div>
          </div>
        </GridItem>

        {/* Grid 5: Tech Stack Card */}
        <GridItem className="grid-default-color col-span-1 md:col-span-6 min-h-[18rem] sm:min-h-[20rem] md:min-h-0 p-4 sm:p-6 flex items-center">
          <div className="z-10 w-full md:w-1/2">
            <p className="headText text-lg sm:text-xl">Tech Stack</p>
            <p className="subtext text-xs sm:text-sm md:text-base">
              I specialize in a variety of languages, frameworks, and tools.
            </p>
          </div>
          <div className="absolute inset-y-0 w-1/2 start-[50%] scale-90 sm:scale-100 md:scale-110 flex items-center justify-center hidden md:flex">
            <Frameworks />
          </div>
          <div className="absolute inset-y-0 w-full start-0 scale-75 flex items-center justify-center md:hidden">
            <Frameworks />
          </div>
        </GridItem>

      </div>
    </section>
  );
};

export default About;