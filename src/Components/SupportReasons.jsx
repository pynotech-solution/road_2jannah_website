import { motion } from 'framer-motion';

const SupportReasons = () => {
  const supportReasons = [
    "Road 2 Jannah is your local partner in community development",
    "Road 2 Jannah brings you closer to the community",
    "Road 2 Jannah provides you with an exhaustive community outreach in the entire country",
    "Road 2 Jannah Foundation is the best platform for the vulnerable communities",
    "Road 2 Jannah Foundation is a true reflection of the vulnerable communities",
  ];

  return (
    <div id="support-reasons" className="py-12 bg-gradient-to-b from-teal-100 to-white text-center">
      <div className="container mx-auto px-4">
        <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Why Support Road 2 Jannah Foundation</h4>
        <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
        <div className="max-w-3xl mx-auto">
          {supportReasons.map((reason, index) => {
            const isImageRight = index % 2 === 0; // Image on right for even indices (0, 2, 4), left for odd (1, 3)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-90 rounded-lg p-4 sm:p-6 shadow-lg mb-4 last:mb-0 flex items-center justify-between"
              >
                <div className={`w-2/3 ${isImageRight ? 'order-2' : 'order-1'}`}>
                  <p className="text-lg sm:text-xl font-semibold text-teal-800 leading-relaxed">
                    #{index + 1} {reason}
                  </p>
                </div>
                <div className={`w-1/3 ${isImageRight ? 'order-1' : 'order-2'}`}>
                  <img
                    src={`https://i.ibb.co/cWJhXRh/image.png`}
                    alt={`Support Reason ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150";
                      console.error(`Image for Reason ${index + 1} failed to load:`, e.target.src);
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SupportReasons;