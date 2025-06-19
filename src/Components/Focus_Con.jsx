function Focus_Con() {
  return (
    <div id="focus" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Our Focus</h2>
      <p className="text-center text-gray-700 mb-8">At Road2Jannah Foundation, we channel our efforts into key areas...</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036911/496940432_9621165381253308_5638857211374510766_n_eyfmqt.jpg" alt="Education for Rural Youth" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Education for Rural Youth</h3>
            <p className="text-gray-700 text-sm">We provide learning materials and tutoring to rural youth...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750039598/4_epuoto.jpg" alt="Community Help" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Community Help</h3>
            <p className="text-gray-700 text-sm">We support community initiatives with resources and volunteer efforts...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750365166/484514523_9203388059697711_3924887768207712997_n_ykizhe.jpg" alt="Economic Empowerment" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Economic Empowerment</h3>
            <p className="text-gray-700 text-sm">Through programs like Medwuma Pa, we provide grants and training...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus_Con