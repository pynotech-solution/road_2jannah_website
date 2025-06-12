import { motion } from 'framer-motion';

const SupportReasons = () => {
  const supportReasons = [
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

  return (
    <div id="support-reasons" className="py-12 bg-gradient-to-b from-teal-100 to-white text-center">
      <div className="container mx-auto px-4">
        <h4 className="text-xl sm:text-2xl font-serif font-bold text-teal-800 mb-4">Why Support Road 2 Jannah Foundation</h4>
        <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6"></div>
        <div className="max-w-4xl mx-auto">
          {supportReasons.map((reason, index) => {
            const isImageRight = index % 2 === 0; // Image on right for even indices (0, 2, 4), left for odd (1, 3)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-90 rounded-lg p-6 sm:p-8 shadow-lg mb-6 last:mb-0 flex items-center justify-between h-64 sm:h-72"
              >
                <div className={`w-2/3 ${isImageRight ? 'order-2' : 'order-1'} p-4`}>
                  <p className="text-xl sm:text-2xl font-semibold text-teal-800 leading-relaxed mb-2">
                    #{index + 1} {reason.title}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                <div className={`w-1/3 ${isImageRight ? 'order-1' : 'order-2'} p-2`}>
                  <img
                    src={`https://i.ibb.co/cWJhXRh/image.png`}
                    alt={`Support Reason ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200";
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