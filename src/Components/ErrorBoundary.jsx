// Eugene Afriyie UEB3502023
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ErrorBoundary from './ErrorBoundary';

const SupportReasons = () => {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-50% 0px -50% 0px" });

  const originalSupportReasons = [
    {
      title: "Road 2 Jannah is your local partner in community development",
      description: "As a local partner, Road 2 Jannah works hand-in-hand with community leaders to design and implement development projects that address specific local needs, fostering sustainable growth and empowerment at the grassroots level.",
    },
    {
      title: "Road 2 Jannah brings you closer to the community",
      description: "Through volunteer opportunities and outreach programs, Road 2 Jannah connects supporters directly with the people they help, building bridges of understanding and shared purpose within the community.",
    },
    {
      title: "Road 2 Jannah provides you with an exhaustive community outreach in the entire country",
      description: "With a nationwide network, Road 2 Jannah ensures comprehensive support, reaching even the most remote areas to deliver aid, education, and healthcare to those in need across the country.",
    },
    {
      title: "Road 2 Jannah Foundation is the best platform for the vulnerable communities",
      description: "Road 2 Jannah offers tailored programs that uplift vulnerable groups, providing resources, skills training, and advocacy to help them overcome challenges and thrive in a supportive environment.",
    },
    {
      title: "Road 2 Jannah Foundation is a true reflection of the vulnerable communities",
      description: "Rooted in the values and voices of the communities it serves, Road 2 Jannah ensures its initiatives are shaped by the real experiences and needs of those it aims to support.",
    },
  ];

  const supportReasons = [...originalSupportReasons, ...originalSupportReasons];

  const cardHeight = 320; // 3 cards per 960px height
  const totalHeight = supportReasons.length * cardHeight;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = containerRef.current;
        const maxScroll = totalHeight - containerRef.current.clientHeight;
        const threshold = cardHeight * originalSupportReasons.length;

        if (scrollTop >= maxScroll - threshold) {
          setTranslateY((prev) => prev - threshold);
          containerRef.current.scrollTop = scrollTop - threshold;
        } else if (scrollTop <= threshold) {
          setTranslateY((prev) => prev + threshold);
          containerRef.current.scrollTop = scrollTop + threshold;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [totalHeight]);

  return (
    <ErrorBoundary>
      <div
        id="support-reasons"
        className="py-12 bg-gradient-to-b from-teal-100 to-white text-center h-[960px] overflow-auto w-[80%] m-auto relative"
        ref={containerRef}
      >
        <div className="container mx-auto px-4">
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">
            Why Support Road 2 Jannah Foundation
          </h4>
          <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>

          <motion.div
            className="max-w-4xl mx-auto"
            style={{ transform: `translateY(${translateY}px)` }}
            initial={{ y: 0 }}
            animate={{ y: translateY }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.6 }}
          >
            {supportReasons.map((reason, index) => {
              const relativeIndex = index % originalSupportReasons.length;

              // Detect current center item
              const scrollTop = containerRef.current?.scrollTop || 0;
              const currentTopIndex = Math.floor(scrollTop / cardHeight);
              const visibleCards = 3;
              const middleVisibleIndex = Math.floor(visibleCards / 2); // 1
              const middleIndex = (currentTopIndex + middleVisibleIndex) % originalSupportReasons.length;

              const isMiddle = relativeIndex === middleIndex;
              const isImageRight = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-90 rounded-lg p-6 sm:p-8 shadow-lg mb-6 last:mb-0 flex items-center justify-between transition-transform duration-500"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 50,
                    scale: isMiddle ? 1.1 : 0.95,
                  }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  whileHover={{ scale: isMiddle ? 1.15 : 1.05, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className={`w-2/3 p-4 ${isImageRight ? 'order-2' : 'order-1'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-xl sm:text-2xl font-semibold text-teal-800 leading-relaxed mb-2">
                      #{relativeIndex + 1} {reason.title}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className={`w-1/3 p-2 ${isImageRight ? 'order-1' : 'order-2'}`}
                    initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
                    animate={{ opacity: isInView ? 1 : 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <img
                      src={`https://i.ibb.co/cWJhXRh/image.png`}
                      alt={`Support Reason ${relativeIndex + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/200";
                        console.error(`Image for Reason ${relativeIndex + 1} failed to load:`, e.target.src);
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default SupportReasons;
