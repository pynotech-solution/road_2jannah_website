import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const MissionVision = ({coreValues,nextSlide,prevSlide,currentIndex}) => {
  return (
       <div className="mt-8">
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Our Mission & Vision</h4>
          <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
              <img
                src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036910/472206263_8807425239293997_4094478365450783416_n_xeyctj.jpg"
                alt="Mission Support"
                className="w-full h-32 object-cover rounded-t-lg mb-2"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                  console.error("Mission image failed to load:", e.target.src);
                }}
              />
              <h5 className="text-lg font-semibold text-teal-700 mb-2">Mission Statement</h5>
              <p className="text-gray-700">Our Mission is to prevent and alleviate the increasing rate of vulnerability in society.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
              <img
                src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036911/494051333_9489761157727065_7600707138854965521_n_wfs2yf.jpg"
                alt="Vision Outreach"
                className="w-full h-32 object-cover rounded-t-lg mb-2"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                  console.error("Vision image failed to load:", e.target.src);
                }}
              />
              <h5 className="text-lg font-semibold text-teal-700 mb-2">Vision Statement</h5>
              <p className="text-gray-700">Our Vision is to make the community a place of hope and transform lives through community outreach programmes.</p>
            </div>
          </div>
          <div id="core-values" className="py-12 bg-gradient-to-b from-teal-100 to-white text-center">
            <div className="container mx-auto px-4">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Core Values</h4>
              <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
              <div
                className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg p-6 sm:p-8 shadow-lg relative"
                onMouseEnter={() => clearInterval(intervalRef.current)}
                onMouseLeave={() => {
                  intervalRef.current = setInterval(nextSlide, 4000);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-2xl sm:text-3xl font-semibold text-teal-800 italic leading-relaxed text-center"
                  >
                    {coreValues[currentIndex].title}
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex + "-desc"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                    className="mt-4 text-teal-600 text-base sm:text-lg font-medium"
                  >
                    {coreValues[currentIndex].description}
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-800 text-white p-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-800 text-white p-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MissionVision