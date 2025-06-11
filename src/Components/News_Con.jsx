function News_Con({ featuredNews, news, openModal, updateFeaturedNews }) {
  // Function to truncate description to a specified number of words
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  // Function to split description into paragraphs
  const splitDescription = (text) => {
    return text.split('. ').map((para, index) => (
      <p key={index} className="text-[0.5rem] md:text-sm mb-1">
        {para.trim()}.
      </p>
    ));
  };

  const renderFeaturedMedia = (mediaItem) => {
    if (mediaItem.type === "image") {
      return (
        <img
          src={mediaItem.src}
          alt={mediaItem.alt}
          className="w-full h-[500px] object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75"
        />
      );
    } else if (mediaItem.type === "video") {
      return (
        <video
          src={mediaItem.src}
          className="w-full h-[500px] object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75"
          muted
          autoPlay
          loop
        />
      );
    }
    return null;
  };


//   const renderFeaturedMedia = (mediaItem) => {
//   if (mediaItem.type === "image") {
//     return (
//       <img
//         src={mediaItem.src}
//         alt={mediaItem.alt}
//         className="w-full h-[500px] object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75"
//         onError={(e) => {
//           e.target.src = "https://via.placeholder.com/500"; // Fallback image if loading fails
//           console.error("Image failed to load:", mediaItem.src);
//         }}
//       />
//     );
//   } else if (mediaItem.type === "video") {
//     return (
//       <video
//         src={mediaItem.src}
//         className="w-full h-[500px] object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75"
//         muted
//         autoPlay
//         loop
//         onError={(e) => console.error("Video failed to load:", mediaItem.src)}
//       />
//     );
//   } else if (mediaItem.type === "facebook-video") {
//     return (
//       <iframe
//         src={mediaItem.src}
//         width="560"
//         height="314"
//         frameBorder="0"
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//         className="w-full h-[500px] object-cover"
//         title={mediaItem.alt}
//       />
//     );
//   } else if (mediaItem.type === "album") {
//     // For albums, render the first image as a placeholder
//     return (
//       <img
//         src={mediaItem.src}
//         alt={mediaItem.alt}
//         className="w-full h-[500px] object-cover object-top transition duration-300 group-hover:scale-105 group-hover:brightness-75"
//         onError={(e) => {
//           e.target.src = "https://via.placeholder.com/500";
//           console.error("Album image failed to load:", mediaItem.src);
//         }}
//       />
//     );
//   }
//   return null;
// };

  return (
    <div id="news" className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Latest News</h2>
      <p className="text-center text-gray-700 mb-6">Stay updated with our recent activities and impact.</p>
      <div className="grid md:grid-cols-3 gap-6 h-[500px]">
        {featuredNews && (
          <div className="md:col-span-2 relative bg-gray-100 rounded-lg overflow-hidden shadow-md group">
            {renderFeaturedMedia(featuredNews.media[0])}

            <p className="md:hidden absolute top-0 text-[.6rem] sm:text-sm bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-2 z-50">
              {featuredNews.category}
            </p>

            <div className="absolute h-[40%] bottom-0 bg-black bg-opacity-70 text-white  px-3 w-full transition duration-300 group-hover:-translate-y-2">
              <div>
                <p className="hidden text-[.6rem] sm:text-sm bg-teal-200 md:inline-block px-2 py-1 text-teal-800 font-bold mb-2 w-auto">
                  {featuredNews.category}
                </p>
              </div>
              <p className="text-[.6rem] sm:text-xs mb-1">{featuredNews.date}</p>
              {/* Truncate title on md and below to 9 words, on md and above to 10 words */}
              <div className="block md:hidden">
                <h3 className="text-[.7rem] sm:text-[1rem] font-bold">
                  {featuredNews.title.split(' ').length > 9
                    ? truncateDescription(featuredNews.title, 9)
                    : featuredNews.title}
                </h3>
              </div>
              <div className="hidden md:block">
                <h3 className="text-[.7rem] sm:text-[.8rem] lg:text-lg font-bold">
                  {featuredNews.title.split(' ').length > 10
                    ? truncateDescription(featuredNews.title, 10)
                    : featuredNews.title}
                </h3>
              </div>

              {/* Truncate to 9 words on md and below, 20 words on md and above */}
              <div className="block md:hidden">
                {featuredNews.description.split(' ').length > 9 ? (
                  splitDescription(truncateDescription(featuredNews.description, 9))
                ) : (
                  <p className="mt-2 text-[0.6rem]">{featuredNews.description}</p>
                )}
              </div>
              <div className="hidden md:block">
                {featuredNews.description.split(' ').length > 20 ? (
                  splitDescription(truncateDescription(featuredNews.description, 20))
                ) : (
                  <p className="mt-2 text-sm">{featuredNews.description}</p>
                )}
              </div>
              <button
                onClick={() => openModal(featuredNews)}
                className="mt-0 text-[.7rem] lg:text-lg lg:mt-4 text-teal-600 font-semibold hover:text-teal-500"
              >
                → Read More
              </button>
            </div>
          </div>
        )}
        {news.length > 1 && (
          <div className="space-y-4 max-h-[100%] overflow-y-auto pr-2">
            {news.map((item, index) =>
              item !== featuredNews && (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:bg-teal-50 transition animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-xs bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-1">{item.category}</p>
                  <p className="text-xs mb-1">{item.date}</p>
                  <h4 className="text-sm font-bold text-teal-800">{item.title}</h4>
                  <button
                    onClick={() => updateFeaturedNews(item)}
                    className="mt-2 text-teal-600 font-semibold text-sm hover:text-teal-500"
                  >
                    → Read now
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default News_Con;