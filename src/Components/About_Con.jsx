import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MissionVision from './MissionVision';
import MissionVisionDiv from './MissionVisionDiv';
import VideoComponent from './VideoComponent';
import { videos } from '../PageData/data';

function About_Con() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 640px)").matches);
  const modalRef = useRef(null);

  const fullText = [
    "Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities across the globe. Established with a vision to provide hope and support, we focus on initiatives that address poverty, education, and healthcare, ensuring that every individual has the opportunity to thrive. Our work is rooted in the principles of compassion, generosity, and faith, inspired by the teachings of Islam.",
    "Through programs like Ramadan Community Outreach, Medwuma Pa Empowerment, and Shave or Braid the Orphan, we have reached thousands of families with essential resources, skills training, and acts of kindness. Our team collaborates with local leaders and volunteers to create sustainable solutions, fostering self-reliance and community strength. Every donation and effort helps us build a brighter future for those in need.",
    "We believe that small acts of charity can create a ripple effect of positive change. Whether it’s providing iftar meals during Ramadan or empowering women with vocational skills, our mission is to serve humanity and reflect the values of unity and care. Join us on this journey to make a difference and support the path to Jannah for all."
  ];

  const previewText = isSmallScreen ? fullText[0].slice(0, 250) + "..." : fullText[0].slice(0, 950) + "...";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleResize = (e) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const coreValues = [
    { title: "Compassion", description: "We treat communities with sensitivity and empathy." },
    { title: "Accountability", description: "We believe in transparency and promote organisational responsibilities." },
    { title: "Respect", description: "We honour the dignity of our communities and membership." },
    { title: "Empowering", description: "We create an environment for individuals to make confident decisions to help build a better community." },
  ];

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleModal();
    }
  };

  
  return (
    <article id="about" className="container mx-auto py-8 sm:py-12 px-4 max-w-5xl">
      <header className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-800 mb-4">About Us</h2>
        <div className="border-t-4 border-teal-800 w-20 sm:w-24 mx-auto"></div>
      </header>
      <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="prose prose-base sm:prose-lg text-gray-700 flex flex-col justify-between h-64 sm:h-80 max-w-prose mx-auto">
            <p className="leading-relaxed flex-grow">{previewText}</p>
            <button
              onClick={toggleModal}
              className="mt-4 inline-block text-teal-800 font-semibold hover:text-teal-600 transition-colors duration-200 border-b-2 border-teal-800 hover:border-teal-600 w-full sm:w-auto px-2 sm:px-4 py-1 sm:py-2"
            >
              Read More
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036910/472206263_8807425239293997_4094478365450783416_n_xeyctj.jpg"
              alt="Community Support"
              className="w-full h-40 sm:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <MissionVision
          currentIndex={currentIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          coreValues={coreValues}
        />
      </section>

      {/* Video Component with Multiple Videos */}
      <VideoComponent videos={videos} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={handleOverlayClick}>
          <div ref={modalRef} className="bg-white rounded-xl shadow-2xl w-full max-w-[90vw] sm:max-w-3xl mx-4 p-6 sm:p-8 md:p-10 relative max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
            <div className="flex justify-end cursor-pointer mb-3">
              <button
              onClick={toggleModal}
              className=" top-4 right-4  text-white bg-red-500 hover:bg-red-700 hover:scale-110 transition duration-300 "
            >
              <svg
                className="w-6 sm:w-8 h-6 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            </div>
            <div className="prose prose-base sm:prose-lg text-gray-800">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-teal-800 mb-4 sm:mb-6 text-center tracking-tight">
                About Road2Jannah Foundation
              </h3>
              <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
              <div className="mb-4 sm:mb-6">
                <img
                  src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036910/472206263_8807425239293997_4094478365450783416_n_xeyctj.jpg"
                  alt="Community Hope"
                  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-md shadow-md float-right ml-3 sm:ml-4 mt-1"
                />
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-teal-800 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
                  {fullText[0]}
                </p>
                <div className="clear-both sm:clear-none"></div>
              </div>
              <div className="my-6 sm:my-8">
                <div
                  className="w-full h-40 sm:h-60 bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036911/494009957_9489761161060398_7555241959544768369_n_vmi8cs.jpg')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                  }}
                />
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 italic">
                  Empowering through outreach and kindness
                </p>
              </div>
              <div className="mb-4 sm:mb-6">
                <p className="leading-relaxed text-justify mb-4 sm:mb-0">{fullText[1]}</p>
                <img
                  src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036911/496940432_9621165381253308_5638857211374510766_n_eyfmqt.jpg"
                  alt="Community Unity"
                  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-md shadow-md float-left mr-3 sm:mr-4 mt-1"
                />
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-teal-800 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
                  {fullText[2]}
                </p>
                <div className="clear-both sm:clear-none"></div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Our Mission & Vision</h4>
                <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
                <MissionVisionDiv />
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default About_Con;