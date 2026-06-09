import { Timeline } from "../components/Timeline.jsx";
import { experiences } from "../constants/Index.js";

const Experiences = () => {
  return (
    <section className="c-space section-spacing" id="experience">
      <div className="flex justify-center mb-4">
        <span className="section-eyebrow">Career Journey</span>
      </div>
      <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Work Experience</span>
      </h2>
      <p className="text-center text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
        My professional journey building scalable and impactful software solutions.
      </p>
      <div className="section-divider mb-12" />
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;