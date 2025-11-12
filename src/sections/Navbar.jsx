import { useState, useEffect } from "react";
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
    <ul className={`flex ${isMobile ? 'flex-col gap-4 py-4' : 'items-center gap-8 sm:gap-10 md:gap-12'}`}>
      {navItems.map((item, index) => (
        <motion.li
          key={item.name}
          initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: isMobile ? index * 0.05 : 0,
            ease: "easeOut"
          }}
        >
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              
              // Fungsi untuk scroll ke target
              const scrollToTarget = () => {
                // Unlock body scroll jika masih locked
                document.body.style.overflow = 'unset';
                
                // Coba beberapa cara untuk menemukan target
                const targetId = item.href.replace('#', '');
                let target = document.getElementById(targetId);
                
                // Jika tidak ditemukan dengan getElementById, coba querySelector
                if (!target) {
                  target = document.querySelector(item.href);
                }
                
                // Jika masih tidak ditemukan, coba dengan querySelector yang lebih spesifik
                if (!target) {
                  target = document.querySelector(`[id="${targetId}"]`);
                }
                
                if (target) {
                  const navbarHeight = 80;
                  
                  // Gunakan requestAnimationFrame untuk memastikan DOM sudah siap
                  requestAnimationFrame(() => {
                    const targetRect = target.getBoundingClientRect();
                    const targetPosition = targetRect.top + window.pageYOffset;
                    const offsetPosition = targetPosition - navbarHeight;
                    
                    window.scrollTo({
                      top: Math.max(0, offsetPosition),
                      behavior: 'smooth'
                    });
                  });
                } else {
                  console.warn(`Target not found: ${item.href} (ID: ${targetId})`);
                  // Fallback: scroll ke top jika target tidak ditemukan
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              };
              
              // Jika mobile, tutup menu dulu lalu scroll
              if (isMobile) {
                onItemClick();
                // Tunggu menu tertutup dan body scroll di-unlock
                setTimeout(() => {
                  scrollToTarget();
                }, 150);
              } else {
                // Desktop langsung scroll
                scrollToTarget();
              }
            }}
            className={`block text-sm sm:text-base font-medium transition-all duration-300
                     text-neutral-400 hover:text-white
                     ${isMobile ? 'py-3 px-4 rounded-lg hover:bg-white/10 active:bg-white/20 w-full text-left' : 'hover:scale-105'}`}
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

  // Prevent body scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Tutup menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40 border-b border-white/10">
        <div className="mx-auto c-space max-w-7xl">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMenu();
              }}
              className="text-xl font-bold transition-colors text-neutral-400 hover:text-white z-10"
              whileHover={{ scale: 1.05 }}
            >
              teguh zeyt
            </motion.a>

            {/* Hanya Tampilkan Hamburger Button di Mobile */}
            <button
              onClick={toggleMenu}
              className="sm:hidden flex items-center justify-center cursor-pointer text-neutral-400 hover:text-white 
                         focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 transition-colors z-10
                         relative w-10 h-10"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
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
            <>
              {/* Backdrop Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
              />
              
              {/* Mobile Menu Content */}
              <motion.div
                className="sm:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 relative z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="c-space py-4">
                  <Navigation isMobile={true} onItemClick={closeMenu} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;