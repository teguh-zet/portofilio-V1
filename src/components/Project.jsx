import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 lg:py-12">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative w-full sm:w-32 md:w-40 lg:w-48 xl:w-56 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div 
              className="relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer
                         bg-gradient-to-br from-gray-800 to-gray-900
                         shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setIsHidden(true)}
            >
              {/* Skeleton Loader */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
              )}
              
              {/* Main Image */}
              <img 
                src={image} 
                alt={title}
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-48 sm:h-32 md:h-36 lg:h-40 xl:h-44
                           object-cover transition-all duration-500
                           group-hover:scale-110 group-hover:brightness-90
                           ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Mobile Click Indicator */}
              <div className="absolute bottom-2 right-2 sm:hidden">
                <span className="text-xs text-white/80 bg-black/50 px-2 py-1 rounded-full">
                  Tap to view
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Title and Tags */}
            <div>
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
                         text-white mb-2 sm:mb-3 line-clamp-2
                         hover:text-lavender-400 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsHidden(true)}
                whileHover={{ x: 5 }}
              >
                {title}
              </motion.h3>
               from-lavender to-royal hover-animation
              {/* Tags Container */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {tags.map((tag, index) => (
                  <motion.div
                    key={tag.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group/tag"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {tag.path && (
                        <img 
                          src={tag.path} 
                          alt={tag.name}
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 
                                   object-contain opacity-70 group-hover/tag:opacity-100
                                   transition-opacity duration-200"
                        />
                      )}
                      <span className="text-xs sm:text-sm md:text-base text-sand/70 
                                     group-hover/tag:text-sand transition-colors duration-200">
                        {tag.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Short Description - Only on larger screens */}
              {description && (
                <p className="hidden md:block mt-3 lg:mt-4 text-sm lg:text-base 
                           text-gray-400 line-clamp-2 lg:line-clamp-3">
                  {description}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 mt-4 sm:mt-5">
              {/* Read More Button */}
              <motion.button
                onClick={() => setIsHidden(true)}
                className="flex items-center justify-center xs:justify-start gap-2 
                         px-4 py-2 sm:px-5 sm:py-2.5
                         bg-gradient-to-r from-indigo-600 to-blue-800 
                         hover:from-indigo-500 hover:to-blue-800
                         text-white text-sm sm:text-base font-medium 
                         rounded-lg sm:rounded-xl
                         shadow-lg hover:shadow-xl
                         transition-all duration-300
                         group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read More</span>
                <motion.img 
                  src="assets/arrow-right.svg" 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                />
              </motion.button>

              {/* View Live Button - Optional */}
              {href && (
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center xs:justify-start gap-2 
                           px-4 py-2 sm:px-5 sm:py-2.5
                           border border-gray-600 hover:border-gray-500
                           text-gray-300 hover:text-white text-sm sm:text-base font-medium 
                           rounded-lg sm:rounded-xl
                           transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>See more</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Divider with Animation */}
        <motion.div 
          className="relative h-[1px] w-full overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "linear",
              repeatDelay: 5 
            }}
            style={{ opacity: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;