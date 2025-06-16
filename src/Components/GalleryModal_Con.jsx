import { useEffect } from 'react';

function GalleryModal_Con({ selectedGalleryItem, currentIndex, closeGalleryModal, handleOverlayClick, nextItem, prevItem }) {
  if (!selectedGalleryItem) return null;

  useEffect(() => {
    console.log("GalleryModal mounted with selectedGalleryItem:", selectedGalleryItem, "currentIndex:", currentIndex);
    return () => console.log("GalleryModal unmounted");
  }, [selectedGalleryItem, currentIndex]);

  const currentItem = selectedGalleryItem.media ? selectedGalleryItem.media[currentIndex] : selectedGalleryItem;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div
        className="bg-white rounded-lg p-4 sm:p-6 max-w-[90vw] sm:max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeGalleryModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-xl sm:text-2xl">×</button>
        {currentItem ? (
          <>
            <div className="relative flex-shrink-0 min-h-0">
              {currentItem.type === "image" ? (
                <img src={currentItem.src} alt={currentItem.title} className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain" />
              ) : (
                <>
                  <iframe
                    src={currentItem.src}
                    title={currentItem.title || "Video"}
                    className="w-full h-[40vh] sm:h-[50vh] object-contain"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  
                
                 
                </>
              )}
            </div>
            {selectedGalleryItem.media && (
              <div className="flex justify-between mt-4 flex-shrink-0">
                <button onClick={prevItem} className="text-teal-800 hover:text-teal-600 text-xl sm:text-2xl">←</button>
                <span className="text-teal-800">{currentIndex + 1} / {selectedGalleryItem.media.length}</span>
                <button onClick={nextItem} className="text-teal-800 hover:text-teal-600 text-xl sm:text-2xl">→</button>
              </div>
            )}
            <div className="mt-4 flex-shrink-0 text-center">
              <p className="text-teal-800 text-base sm:text-lg px-2">
                {selectedGalleryItem?.title || "No caption"}
              </p>
            </div>
          </>
        ) : (
          <p className="text-teal-800 text-center">No content available</p>
        )}
      </div>
    </div>
  );
}

export default GalleryModal_Con