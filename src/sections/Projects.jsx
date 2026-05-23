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
      <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">My Selected Projects</span>
      </h2>
      <p className="text-center text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
        A collection of projects that showcase my passion for building impactful digital solutions.
      </p>
      <div className="section-divider mb-12" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
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