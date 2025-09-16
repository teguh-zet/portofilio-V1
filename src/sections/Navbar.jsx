import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = ({ isMobile = false, onItemClick = () => {} }) => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#aboute" },
    { name: "Projects", href: "#projects" },
    { name: "Certificate", href: "#certificate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className={`flex ${isMobile ? 'flex-col gap-6 py-6' : 'items-center gap-8 sm:gap-10 md:gap-12'}`}>
      {navItems.map((item, index) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: isMobile ? index * 0.1 : 0,
            ease: "easeOut"
          }}
        >
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) {
                window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
              onItemClick();
            }}
            className={`block text-sm sm:text-base font-medium transition-all duration-300
                     text-neutral-400 hover:text-white hover:scale-105
                     ${isMobile ? 'py-3 px-6 rounded-lg hover:bg-white/10' : ''}`}
          >
            {item.name}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

// Komponen Navbar Utama
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40 border-b border-white/10">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            whileHover={{ scale: 1.05 }}
          >
            teguh zeyt
          </motion.a>

          {/* Hanya Tampilkan Hamburger Button di Mobile */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex cursor-pointer text-neutral-400 hover:text-white 
                       focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="menu toggle"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>

          {/* Hanya Tampilkan Navigasi Desktop di Layar >= 640px (sm) */}
          <nav className="hidden sm:flex">
            <Navigation onItemClick={closeMenu} />
          </nav>
        </div>
      </div>

      {/* Mobile Menu: Hanya Muncul di Mobile Saat Dibuka */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-primary/70 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="container mx-auto px-6">
              <Navigation isMobile={true} onItemClick={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;