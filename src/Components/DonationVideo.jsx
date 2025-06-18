import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function DonationVideo({ videos, openDonationModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    if (donateRef && donateRef.current) {
      const offset = 80; // Offset to account for fixed nav or other headers
      const y = donateRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Single video mode
  if (videos.length === 1) {
    const { title, description, url } = videos[0];
    return (
      <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-b from-teal-100 to-white text-center">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-2 sm:mb-4">
            {title}
          </h2>
          <div className="border-t-4 border-teal-800 w-16 sm:w-20 md:w-24 mx-auto mb-2 sm:mb-6"></div>
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <video
              controls
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-4"
            >
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6">
              {description}
            </p>
            <div className="bg-teal-800 text-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Support Our Mission</h3>
              <p className="text-sm sm:text-base mb-4">Your donation can make a difference in uplifting communities. Every contribution helps provide essential support.</p>
              <button
                onClick={openDonationModal}
                className="inline-block bg-white text-teal-800 font-bold py-2 px-4 rounded hover:bg-teal-100 transition-colors"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Carousel mode for multiple videos
  const currentVideo = videos[currentIndex];
  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-b from-teal-100 to-white text-center">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-2 sm:mb-4">
          Video Gallery
        </h2>
        <div className="border-t-4 border-teal-800 w-16 sm:w-20 md:w-24 mx-auto mb-2 sm:mb-6"></div>
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <video
                controls
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-4"
              >
                <source src={currentVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-800 mb-2">
                {currentVideo.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6">
                {currentVideo.description}
              </p>
            </motion.div>
          </AnimatePresence>
          {videos.length > 1 && (
            <div className="flex justify-between mt-4">
              <button
                onClick={prevVideo}
                className="bg-teal-800 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextVideo}
                className="bg-teal-800 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                →
              </button>
            </div>
          )}
          <div className="bg-teal-800 text-white p-4 sm:p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Support Our Mission</h3>
            <p className="text-sm sm:text-base mb-4">Your donation can make a difference in uplifting communities. Every contribution helps provide essential support.</p>
            <button
              onClick={openDonationModal}
              className="inline-block bg-white text-teal-800 font-bold py-2 px-4 rounded hover:bg-teal-100 transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationVideo;