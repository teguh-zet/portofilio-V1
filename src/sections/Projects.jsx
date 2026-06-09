import { useState } from "react";
import Project from "../components/Project.jsx";
import { myProjects } from "../constants/Index.js";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <span className="section-eyebrow mb-4">
          Portfolio · {myProjects.length} Works
        </span>
        <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">My Selected Projects</span>
        </h2>
        <p className="text-center text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
          A collection of projects that showcase my passion for building
          impactful digital solutions.
        </p>
      </motion.div>
      <div className="section-divider mb-12" />
      {myProjects.map((project, index) => (
        <Project
          key={project.id}
          index={index}
          {...project}
          setPreview={setPreview}
        />
      ))}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 mt-12 text-center"
      >
        <p className="text-neutral-400 text-sm md:text-base">
          Want to see more of what I build?
        </p>
        <a
          href="https://github.com/teguh-zet"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.48 5.92.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.695.825.577C20.565 21.795 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
          View GitHub Profile
        </a>
      </motion.div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
