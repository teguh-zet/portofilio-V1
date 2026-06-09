import { motion } from "motion/react";
import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";

const Hero = () => {
  return (
    <section
      className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
      id="home"
    >
      {/* Ambient aurora glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob aurora-violet w-[28rem] h-[28rem] -top-20 -left-24" />
        <div
          className="aurora-blob aurora-cyan w-[24rem] h-[24rem] top-1/3 right-0"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob aurora-royal w-[20rem] h-[20rem] bottom-0 left-1/4"
          style={{ animationDelay: "8s" }}
        />
      </div>

      <HeroText />
      <ParallaxBackground />

      {/* Scroll-down indicator */}
      <motion.a
        href="#aboute"
        aria-label="Scroll down"
        className="absolute z-20 -translate-x-1/2 bottom-8 left-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="flex items-start justify-center w-5 h-9 p-1 border rounded-full border-white/20">
          <motion.div
            className="w-1 h-2 rounded-full bg-lavender"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
