import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { mySocials } from "../constants/Index.js";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.p
          className="text-lg font-medium text-neutral-500 tracking-widest uppercase"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Full-Stack Developer
        </motion.p>
        <motion.h1
          className="text-5xl md:text-6xl font-bold gradient-text mt-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Teguh Ahmadi Zebua
        </motion.h1>
        <div className="flex flex-col items-start mt-4">
          <motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Web Solutions
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-4 lg:gap-6 mt-8"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
          
            <a
              href="/assets/Resume_Teguh_Ahmadi_Zebua.pdf"
              download="Resume_Teguh_Ahmadi_Zebua.pdf"
              className="px-5 py-3 sm:px-6 sm:py-3 text-sm font-semibold inline-flex items-center gap-2 relative z-10 rounded-xl border border-white/20 text-white hover:border-lavender/50 hover:bg-white/5 transition-all duration-300"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-3 lg:ml-2">
            {mySocials.filter(s => s.href).map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-lavender/50 hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={social.icon} className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" alt={social.name} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex- flex-col space-y-4 md:hidden">
        <motion.p
          className="text-sm font-medium text-neutral-500 tracking-widest uppercase"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Full-Stack Developer
        </motion.p>
        <motion.h1
          className="text-4xl font-bold gradient-text"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Teguh Ahmadi Zebua
        </motion.h1>
        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Web Applications
          </motion.p>
        </div>

        {/* Mobile CTA */}
        <motion.div
          className="flex flex-col items-start sm:items-center gap-5 mt-8 w-full"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto sm:justify-center">
            <a
              href="/assets/Resume_Teguh_Ahmadi_Zebua.pdf"
              download="Resume_Teguh_Ahmadi_Zebua.pdf"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold inline-flex justify-center items-center gap-2 relative z-10 rounded-xl border border-white/20 text-white hover:border-lavender/50 hover:bg-white/5 transition-all duration-300"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-start sm:justify-center gap-3 w-full">
            {mySocials.filter(s => s.href).map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-lavender/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={social.icon} className="w-4 h-4 opacity-60" alt={social.name} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;