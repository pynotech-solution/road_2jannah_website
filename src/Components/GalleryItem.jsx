function GalleryItem({ type, src, alt, caption, items, onClick }) {
  return (
    <div
      className="cursor-pointer relative"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover rounded-lg transition duration-300 hover:brightness-90"
      />
      <p className="text-center text-gray-700 mt-2">{caption}</p>
      {type === "album" && items && (
        <span className="absolute top-2 right-2 bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-sm">
          Album ({items.length})
        </span>
      )}
      {type === "video" && (
        <span className="absolute top-2 right-2 bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-sm">
          Video
        </span>
      )}
    </div>
  );
}

export default GalleryItem;