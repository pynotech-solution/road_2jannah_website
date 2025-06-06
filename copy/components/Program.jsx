function Program({ title, description, donateText, image, alt }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <img src={image} alt={alt} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-teal-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a href="#donate" className="bg-teal-800 text-white py-2 px-4 rounded-lg mt-4 inline-block hover:bg-teal-700">{donateText}</a>
    </div>
  );
}

export default Program;