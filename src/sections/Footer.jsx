import { mySocials } from "../constants/Index.js";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="c-space pb-6 pt-2">
      <div className="section-divider mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {currentYear} Teguh Ahmadi Zebua. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {mySocials.filter(s => s.href).map((social, index) => (
            <motion.a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-lavender/40 hover:bg-white/5 transition-all duration-300"
            >
              <img src={social.icon} className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity duration-300" alt={social.name} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;