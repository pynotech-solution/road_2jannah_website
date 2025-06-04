import { useEffect } from 'react';

function GalleryModal({ selectedGalleryItem, currentIndex, closeGalleryModal, handleOverlayClick, nextItem, prevItem }) {
  if (!selectedGalleryItem) return null;

  useEffect(() => {
    console.log("GalleryModal mounted with selectedGalleryItem:", selectedGalleryItem, "currentIndex:", currentIndex);
    return () => console.log("GalleryModal unmounted");
  }, [selectedGalleryItem, currentIndex]);

  const currentItem = selectedGalleryItem.items ? selectedGalleryItem.items[currentIndex] : selectedGalleryItem;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeGalleryModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-2xl">×</button>
        {currentItem ? (
          <>
            <div className="relative">
              {currentItem.type === "image" ? (
                <img src={currentItem.src} alt={currentItem.alt} className="w-full h-auto max-h-[80vh] object-contain" />
              ) : (
                <iframe
                  src={currentItem.src}
                  title={currentItem.alt}
                  className="w-full h-[80vh] object-contain"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            {selectedGalleryItem.items && (
              <div className="flex justify-between mt-4">
                <button onClick={prevItem} className="text-teal-800 hover:text-teal-600 text-2xl">←</button>
                <span className="text-teal-800">{currentIndex + 1} / {selectedGalleryItem.items.length}</span>
                <button onClick={nextItem} className="text-teal-800 hover:text-teal-600 text-2xl">→</button>
              </div>
            )}
          </>
        ) : (
          <p className="text-teal-800 text-center">No content available</p>
        )}
        <p className="mt-4 text-center text-teal-800 text-lg">{currentItem?.alt || "No caption"}</p>
      </div>
    </div>
  );
}

export default GalleryModal;