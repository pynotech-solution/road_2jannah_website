function GalleryItem({ src, alt, caption }) {
  return (
    <div className="text-center">
      <img src={src} alt={alt} className="w-full rounded-lg shadow-md" />
      <p className="mt-2 text-teal-800">{caption}</p>
    </div>
  );
}

export default GalleryItem;