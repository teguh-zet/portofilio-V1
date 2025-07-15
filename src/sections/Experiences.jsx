import { Timeline } from "../components/Timeline.jsx";
import { experiences } from "../constants/Index.js";
const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;