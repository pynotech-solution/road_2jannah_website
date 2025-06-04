function QuoteSection() {
  return (
    <div id="quote" className="py-12 bg-gradient-to-b from-teal-100 to-white text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg p-6 sm:p-8 shadow-lg">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-teal-800 italic leading-relaxed">
            "The best among you are those who bring the most benefit to the rest of mankind."
          </blockquote>
          <cite className="block mt-4 text-teal-600 text-sm sm:text-base font-medium">- Prophet Muhammad (Peace Be Upon Him)</cite>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;