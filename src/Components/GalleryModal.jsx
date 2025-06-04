function GalleryModal({ selectedGalleryItem, currentIndex, closeGalleryModal, handleOverlayClick, nextItem, prevItem }) {
  if (!selectedGalleryItem) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 relative">
        <button onClick={closeGalleryModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-2xl">×</button>
        {selectedGalleryItem.items ? (
          <>
            <div className="relative">
              {selectedGalleryItem.items[currentIndex].type === "image" ? (
                <img src={selectedGalleryItem.items[currentIndex].src} alt={selectedGalleryItem.items[currentIndex].alt} className="w-full h-auto max-h-[80vh] object-contain" />
              ) : (
                <iframe src={selectedGalleryItem.items[currentIndex].src} title={selectedGalleryItem.items[currentIndex].alt} className="w-full h-[80vh] object-contain" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={prevItem} className="text-teal-800 hover:text-teal-600 text-2xl">←</button>
              <span className="text-teal-800">{currentIndex + 1} / {selectedGalleryItem.items.length}</span>
              <button onClick={nextItem} className="text-teal-800 hover:text-teal-600 text-2xl">→</button>
            </div>
          </>
        ) : selectedGalleryItem.type === "image" ? (
          <img src={selectedGalleryItem.src} alt={selectedGalleryItem.alt} className="w-full h-auto max-h-[80vh] object-contain" />
        ) : (
          <iframe src={selectedGalleryItem.src} title={selectedGalleryItem.alt} className="w-full h-[80vh] object-contain" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        )}
        <p className="mt-4 text-center text-teal-800 text-lg">{selectedGalleryItem.items ? selectedGalleryItem.items[currentIndex].alt : selectedGalleryItem.alt}</p>
      </div>
    </div>
  );
}

export default GalleryModal;