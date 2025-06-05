import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function NewsModal({ isModalOpen, selectedNews, closeModal }) {
  if (!isModalOpen || !selectedNews) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullImageModalOpen, setIsFullImageModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedNews.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedNews.images.length) % selectedNews.images.length);
  };

  const openFullImageModal = () => {
    setIsFullImageModalOpen(true);
  };

  const closeFullImageModal = () => {
    setIsFullImageModalOpen(false);
  };

  // Split description into paragraphs (simple split on periods)
  const paragraphs = selectedNews.description.split('. ').map((para, index) => (
    <p key={index} className="text-gray-700 mb-2">
      {para.trim()}.
    </p>
  ));

  return (
    <>
      {/* Main News Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative max-h-[90vh] overflow-y-auto">
          <button onClick={closeModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-xl">
            ×
          </button>
          <div className="relative">
            <img
              src={selectedNews.images[currentImageIndex]}
              alt={selectedNews.alts[currentImageIndex]}
              className="w-full h-48 rounded-lg mb-4 object-cover cursor-pointer"
              onClick={openFullImageModal}
            />
            {selectedNews.images.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2">
                <button
                  onClick={prevImage}
                  className="text-white hover:text-teal-200 text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="text-white hover:text-teal-200 text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <ChevronRight />
                </button>
              </div>
            )}
            {selectedNews.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                {currentImageIndex + 1} / {selectedNews.images.length}
              </div>
            )}
          </div>
          <p className="text-xs bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-2">{selectedNews.category}</p>
          <p className="text-xs text-gray-600 mb-2">{selectedNews.date}</p>
          <h3 className="text-xl font-bold text-teal-800 mb-2">{selectedNews.title}</h3>
          {paragraphs}
        </div>
      </div>

      {/* Full-Image Modal */}
      {isFullImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4">
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <button
              onClick={closeFullImageModal}
              className="absolute top-4 right-4 text-white hover:text-teal-200 text-2xl"
            >
              <X />
            </button>
            <img
              src={selectedNews.images[currentImageIndex]}
              alt={selectedNews.alts[currentImageIndex]}
              className="w-full h-full object-contain"
            />
            {selectedNews.images.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
                <button
                  onClick={prevImage}
                  className="text-white hover:text-teal-200 text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="text-white hover:text-teal-200 text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  <ChevronRight />
                </button>
              </div>
            )}
            {selectedNews.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                {currentImageIndex + 1} / {selectedNews.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NewsModal;