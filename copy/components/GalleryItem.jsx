import { Folder, Play } from 'lucide-react';

function GalleryItem({ type, src, alt, caption, items, onClick }) {
  const wordLimit = 10;
  const truncatedCaption = caption
    ? caption.split(/\s+/).length > wordLimit
      ? caption.split(/\s+/).slice(0, wordLimit).join(' ') + '...'
      : caption
    : '';

  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover rounded-lg transition duration-300 hover:brightness-90"
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-800 to-transparent text-white p-4 transition duration-300 hover:from-teal-900">
          <p className="text-sm font-semibold">{truncatedCaption}</p>
        </div>
      )}
      {type === "album" && items && (
        <span className="absolute top-2 right-2 bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-sm flex items-center">
          <Folder size={16} /> 
        </span>
      )}
      {type === "video" && (
        <span className="absolute top-2 right-2 bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-sm flex items-center">
          <Play size={16} />
        </span>
      )}
    </div>
  );
}

export default GalleryItem;