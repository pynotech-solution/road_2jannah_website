import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function About_Con() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 640px)").matches);
  const modalRef = useRef(null); // Ref for the modal content

  const fullText = [
    "Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities across the globe. Established with a vision to provide hope and support, we focus on initiatives that address poverty, education, and healthcare, ensuring that every individual has the opportunity to thrive. Our work is rooted in the principles of compassion, generosity, and faith, inspired by the teachings of Islam.",
    "Through programs like Ramadan Community Outreach, Medwuma Pa Empowerment, and Shave or Braid the Orphan, we have reached thousands of families with essential resources, skills training, and acts of kindness. Our team collaborates with local leaders and volunteers to create sustainable solutions, fostering self-reliance and community strength. Every donation and effort helps us build a brighter future for those in need.",
    "We believe that small acts of charity can create a ripple effect of positive change. Whether it’s providing iftar meals during Ramadan or empowering women with vocational skills, our mission is to serve humanity and reflect the values of unity and care. Join us on this journey to make a difference and support the path to Jannah for all."
  ];

  // Dynamically set preview text based on screen size
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

  // Auto-scroll logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds for a smooth feel

    return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
  }, []);

  // Handle screen size changes
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

  // Handle click outside to close modal
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
              src="https://i.ibb.co/Rk8XfyCy/image.png"
              alt="Community Support"
              className="w-full h-40 sm:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Our Mission & Vision</h4>
          <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
              <img
                src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494152552_9504517902918057_5715987183796554615_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFuihgAcgcZrI8AOKDSPcBVuTgCgCQps_q5OAKAJCmz-uoexvlpJ1Hk7TUoVrz6ef_CzPswE8i0Ji7obYL9rt3j&_nc_ohc=xjfNmfMmCUcQ7kNvwEhqBbj&_nc_oc=AdmHoZu8ze2rMe_KBZw5X0kBcPlOIc0V3nbAiaeijoH6ri5zaaL0wxhViUMEUKx_zJE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=dowWGy-xWCg29b1Mdn8y-g&oh=00_AfKqMDqJQ7DOPwe7z-CYXRznhz367NBjRTtkIALK0aYH1w&oe=68464A37"
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
                src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494218817_9489761007727080_5164433794427945810_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=536f4a&_nc_eui2=AeHWgBj_ScLPZtAkKgXgS2I3u1t0bWHnKMS7W3RtYecoxKhy8B7NdHswEjMMyNSnW3QVU9PavISHGDd9rMWnza4B&_nc_ohc=PTgVcLdEKssQ7kNvwGqfwf2&_nc_oc=AdlDp9Bt_R3sUI8fdq88AlHH6vWuuEVe8Tvf_uI0-czlRnE2uZDtx8Z3S3x42m61hLg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=t5-iizum22jx2vJcDWN_lA&oh=00_AfK59DMvisB6cS5mc2X7As_fXGDwxaa0yQQlznm-tU_AMQ&oe=684656BC"
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
      </section>


      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[90vw] sm:max-w-3xl mx-4 p-6 sm:p-8 md:p-10 relative max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
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
            <div className="prose prose-base sm:prose-lg text-gray-800">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-teal-800 mb-4 sm:mb-6 text-center tracking-tight">
                About Road2Jannah Foundation
              </h3>
              <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
              <div className="mb-4 sm:mb-6">
                <img
                  src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/472206263_8807425239293997_4094478365450783416_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFgYvaMkYwsdtWa3NtNCa2UEYhCQPwVae0RiEJA_BVp7W2KnehFDQ-xDrdjeeJYwmeTeIUkk1kh6XXtX6kQj77A&_nc_ohc=YIIHG1fnkR8Q7kNvwE3kmqa&_nc_oc=Adn5505DgHbOcAaf1sX04cpTOqnTjJTdBjK6cFJKxIebQfJpdJdXJgalLUQBvnM6Pmc&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=UM72uAG9yYsDzDFNmH7F-w&oh=00_AfK_va7R-6J6C92vlUS80PixzwcDFVQWyxHX_E6uljpIjQ&oe=68465979"
                  alt="Community Hope"
                  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-md shadow-md float-right ml-3 sm:ml-4 mt-1"
                />
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-teal-800 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
                  {fullText[0]}
                </p>
                <div className="clear-both sm:clear-none"></div>
              </div>
              <div className="my-6 sm:my-8">
                <img
                  src="https://external.facc6-1.fna.fbcdn.net/emg1/v/t13/7758932051959835263?url=https%3A%2F%2Fcitinewsroom.com%2Fwp-content%2Fuploads%2F2024%2F06%2FWhatsApp-Image-2024-06-09-at-9.52.33-PM.jpeg&fb_obo=1&utld=citinewsroom.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&_nc_gid=dowWGy-xWCg29b1Mdn8y-g&_nc_eui2=AeHbVpz2BCZEtxDgSxiylu0qGxky6_77L2kbGTLr_vsvaX6asx_L0npTnX3BSwJDrXjWrFqA068tQWaog3RXpxr1&_nc_oc=AdmF4omSZ4skxKm77y90tdwBBpnzvgZaZ6j6x5IynVfLkTW5ILZ2_g5FMRKVScwIZOo&ccb=13-1&oh=06_Q3-zAfq5T4UVXEVRPTtFGmj8Dcw8Y3oFuwUev4QHE3y2QphV&oe=68424A7B&_nc_sid=085657"
                  alt="Community Outreach"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md mx-auto"
                />
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 italic">
                  Empowering through outreach and kindness
                </p>
              </div>
              <div className="mb-4 sm:mb-6">
                <p className="leading-relaxed text-justify mb-4 sm:mb-0">{fullText[1]}</p>
                <img
                  src="https://ibb.co/kVb9JjRQ"
                  alt="Community Unity"
                  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-md shadow-md float-left mr-3 sm:mr-4 mt-1"
                />
                <p className="leading-relaxed text-justify first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-teal-800 first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3">
                  {fullText[2]}
                </p>
                <div className="clear-both sm:clear-none"></div>
              </div>
              {/* Mission, Vision, and Core Values in Modal */}
              <div className="mt-8">
  <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Our Mission & Vision</h4>
  <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
    <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
      <img
        src="https://i.ibb.co/kVt7Ksw6/image.png"
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
        src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494218817_9489761007727080_5164433794427945810_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=536f4a&_nc_eui2=AeHWgBj_ScLPZtAkKgXgS2I3u1t0bWHnKMS7W3RtYecoxKhy8B7NdHswEjMMyNSnW3QVU9PavISHGDd9rMWnza4B&_nc_ohc=PTgVcLdEKssQ7kNvwGqfwf2&_nc_oc=AdlDp9Bt_R3sUI8fdq88AlHH6vWuuEVe8Tvf_uI0-czlRnE2uZDtx8Z3S3x42m61hLg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=t5-iizum22jx2vJcDWN_lA&oh=00_AfK59DMvisB6cS5mc2X7As_fXGDwxaa0yQQlznm-tU_AMQ&oe=684656BC"
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
</div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default About_Con;