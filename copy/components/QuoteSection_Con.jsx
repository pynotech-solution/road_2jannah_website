import { motion, AnimatePresence } from 'framer-motion';

function QuoteSection_Con({ quote, attribution }) {
  return (
    <div id="quote" className="py-12 bg-gradient-to-b from-teal-100 to-white text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg p-6 sm:p-8 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={quote} // Key ensures re-render for animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl sm:text-3xl font-semibold text-teal-800 italic leading-relaxed"
            >
              "{quote}"
            </motion.blockquote>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.cite
              key={attribution} // Key ensures re-render for animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }} // Staggered delay
              className="block mt-4 text-teal-600 text-sm sm:text-base font-medium"
            >
              - {attribution}
            </motion.cite>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection_Con