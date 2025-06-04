import { useEffect, useState } from 'react';

function GalleryModal({ selectedGalleryItem, currentIndex, closeGalleryModal, handleOverlayClick, nextItem, prevItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const captionLimit = 100;

  if (!selectedGalleryItem) return null;

  useEffect(() => {
    console.log("GalleryModal mounted with selectedGalleryItem:", selectedGalleryItem, "currentIndex:", currentIndex);
    return () => console.log("GalleryModal unmounted");
  }, [selectedGalleryItem, currentIndex]);

  const currentItem = selectedGalleryItem.items ? selectedGalleryItem.items[currentIndex] : selectedGalleryItem;
  const caption = currentItem?.alt || "No caption";
  const isLongCaption = caption.length > captionLimit;
  const displayedCaption = isExpanded || !isLongCaption ? caption : `${caption.slice(0, captionLimit)}...`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-4 sm:p-6 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeGalleryModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-xl sm:text-2xl">×</button>
        <div className="max-h-[90vh] overflow-y-auto">
          {currentItem ? (
            <>
              <div className="relative mb-4">
                {currentItem.type === "image" ? (
                  <img src={currentItem.src} alt={currentItem.alt} className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain" />
                ) : (
                  <iframe
                    src={currentItem.src}
                    title={currentItem.alt}
                    className="w-full h-[50vh] sm:h-[60vh] object-contain"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              {selectedGalleryItem.items && (
                <div className="flex justify-between mt-4 mb-4">
                  <button onClick={prevItem} className="text-teal-800 hover:text-teal-600 text-xl sm:text-2xl">←</button>
                  <span className="text-teal-800 text-sm sm:text-base">{currentIndex + 1} / {selectedGalleryItem.items.length}</span>
                  <button onClick={nextItem} className="text-teal-800 hover:text-teal-600 text-xl sm:text-2xl">→</button>
                </div>
              )}
            </>
          ) : (
            <p className="text-teal-800 text-center text-sm sm:text-base py-4">No content available</p>
          )}
          <div className="mt-4 text-center">
            <p className="text-teal-800 text-sm sm:text-lg leading-relaxed transition-all duration-300">{displayedCaption}</p>
            {isLongCaption && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-teal-800 hover:text-teal-600 text-sm sm:text-base font-medium mt-2 focus:outline-none"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;