import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SupportReasons = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showMotto, setShowMotto] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollY = 0;
    let animationFrame;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollY += 0.5;
        if (scrollY >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollY = 0;
        }
        scrollContainer.scrollTop = scrollY;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Toggle title and motto every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMotto((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const supportReasons = [
    {
      title: "Road 2 Jannah is your local partner in community development",
      description: "As a local partner, Road 2 Jannah works hand-in-hand with community leaders to design and implement development projects that address specific local needs.",
      src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1750116604/90c7a16d-d597-461f-bd5e-d5d6ce037b1a.png",
    },
    {
      title: "Road 2 Jannah brings you closer to the community",
      description: "Through volunteer opportunities and outreach programs, Road 2 Jannah connects supporters directly with the people they help.",
      src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036911/494051333_9489761157727065_7600707138854965521_n_wfs2yf.jpg",
    },
    {
      title: "Road 2 Jannah provides exhaustive outreach nationwide",
      src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1750126469/d1925ff1-b810-437b-9ff2-999ed42890b5.png",
      description: "With a nationwide network, Road 2 Jannah reaches even the most remote areas to deliver aid, education, and healthcare.",
    },
    {
      title: "Road 2 Jannah Foundation supports vulnerable communities",
      src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1750117310/43cb3586-3487-4a6a-b3d6-e026dc202fc5.png",
      description: "Road 2 Jannah offers tailored programs, resources, and advocacy to help vulnerable groups overcome challenges.",
    },
    {
      title: "Road 2 Jannah reflects the voices of communities",
      description: "Rooted in community values, Road 2 Jannah ensures its initiatives are shaped by real experiences and needs.",
      src: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1750037049/3_dlwvub.jpg",
    },
  ];

  return (
    <div
      className="max-w-4xl mx-auto h-[600px] overflow-auto"
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {supportReasons.map((reason, index) => {
        const isImageRight = index % 2 === 0;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="bg-white bg-opacity-90 rounded-lg p-2 sm:p-4 md:p-6 shadow-lg mb-2 sm:mb-4 md:mb-6 last:mb-0 flex flex-col sm:flex-row items-center justify-between"
          >
            <motion.div
              className={`w-full sm:w-2/3 p-2 mt-4 max-w-prose overflow-hidden ${isImageRight ? 'sm:order-2' : 'sm:order-1'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              <div className="mb-2 sm:mb-4 text-center">
                <div className="inline-block bg-gradient-to-r from-teal-500 to-green-400 text-white text-sm sm:text-base font-bold px-4 py-1 rounded-full shadow-md mb-3">
                  #{index + 1}
                </div>

                {/* Animate title and motto */}
                <div className="min-h-[60px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={showMotto ? 'motto' : 'title'}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {!showMotto ? (
                        <p className="text-xl sm:text-2xl font-bold text-teal-900 mt-1 mb-2 leading-snug">
                          {reason.title}
                        </p>
                      ) : (
                        <p className="text-xl sm:text-2xl italic text-teal-700 mt-1 mb-2">
                          Empowering Communities, Changing Lives 🌍
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-1">
                  {reason.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`w-full sm:w-1/3 p-1 sm:p-2 ${isImageRight ? 'sm:order-1' : 'sm:order-2'}`}
              initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              <img
                src={reason.src || "https://via.placeholder.com/200"}
                alt={`Support Reason ${index + 1}`}
                className="w-full h-44 md:h-48 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200";
                  console.error(`Image for Reason ${index + 1} failed to load:`, e.target.src);
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SupportReasons;
