function NewsItem({ title, date, description, image, alt }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      {image && <img src={image} alt={alt} className="w-full h-48 object-cover rounded-lg mb-4" />}
      <h3 className="text-xl font-semibold text-teal-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700">{description}</p>
      <a href="#donate" className="text-teal-800 hover:underline mt-4 inline-block">Support This Cause</a>
    </div>
  );
}

export default NewsItem;