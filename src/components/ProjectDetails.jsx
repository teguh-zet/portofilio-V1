import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm bg-black/50 p-4 sm:p-6 md:p-8"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 
                   my-auto border shadow-xl rounded-xl sm:rounded-2xl 
                   bg-gradient-to-l from-midnight to-navy border-white/10
                   max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute z-10 p-1.5 sm:p-2 rounded-full 
                     top-2 right-2 sm:top-3 sm:right-3 md:top-5 md:right-5 
                     bg-midnight/80 hover:bg-gray-500/80 backdrop-blur-sm
                     transition-colors duration-200"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl" 
          />
        </div>

        {/* Content Container - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-8">
          {/* Title */}
          <h5 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl 
                         font-bold text-white break-words">
            {title}
          </h5>

          {/* Main Description */}
          <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg 
                        font-normal text-neutral-400 leading-relaxed">
            {description}
          </p>

          {/* Sub Descriptions */}
          {subDescription && subDescription.length > 0 && (
            <div className="space-y-2 sm:space-y-3">
              {subDescription.map((subDesc, index) => (
                <p 
                  key={index}
                  className="text-sm sm:text-base md:text-lg font-normal 
                             text-neutral-400 leading-relaxed"
                >
                  {subDesc}
                </p>
              ))}
            </div>
          )}

          {/* Footer Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center 
                          justify-between gap-4 mt-4 sm:mt-5 md:mt-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11
                             rounded-lg hover-animation object-contain"
                />
              ))}
            </div>

            {/* View Project Link */}
            <a 
              className="inline-flex items-center gap-1 sm:gap-1.5 
                         text-sm sm:text-base md:text-lg
                         font-medium cursor-pointer hover-animation 
                         text-white hover:text-blue-400 transition-colors
                         whitespace-nowrap" 
              target="_blank" 
              rel="noopener noreferrer"
              href={href}
            >
              View Project
              <img 
                src="assets/arrow-up.svg" 
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" 
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;