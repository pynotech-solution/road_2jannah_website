import { motion } from 'framer-motion';

const SupportReasons = () => {
 

  return (
    <div id="support-reasons" className="py-12 bg-gradient-to-b  from-teal-100 to-white text-center  mx-auto md:w-[80%] sm:w-[90%] w-full">
      <div className="container px-2 sm:px-4 md:px-6">
        <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-teal-800 mb-2 sm:mb-4">Why Support Road 2 Jannah Foundation</h4>
        <div className="border-t-2 border-teal-800 w-16 sm:w-20 md:w-24 mx-auto mb-2 sm:mb-6"></div>
        <div className="max-w-4xl mx-auto h-[600px] overflow-auto">
          {supportReasons.map((reason, index) => {
            const isImageRight = index % 2 === 0; // Image on right for even indices (0, 2, 4), left for odd (1, 3)
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
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white bg-opacity-90 rounded-lg p-2 sm:p-4 md:p-6 shadow-lg mb-2 sm:mb-4 md:mb-6 last:mb-0 flex flex-col sm:flex-row items-center justify-between "
              >
                <motion.div 
                  className={`w-full sm:w-2/3 p-2 mt-4 max-w-prose overflow-hidden ${isImageRight ? 'sm:order-2' : 'sm:order-1'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-teal-800 leading-relaxed mb-1 sm:mb-2 truncate">
                    #{index + 1} {reason.title}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
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
      </div>
    </div>
  );
};

export default SupportReasons;