function NewsModal({ isModalOpen, selectedNews, closeModal }) {
  if (!isModalOpen || !selectedNews) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-xl">×</button>
        <img src={selectedNews.image} alt={selectedNews.alt} className="w-full h-48 object-cover rounded-lg mb-4" />
        <p className="text-xs bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-2">{selectedNews.category}</p>
        <p className="text-xs text-gray-600 mb-2">{selectedNews.date}</p>
        <h3 className="text-xl font-bold text-teal-800 mb-2">{selectedNews.title}</h3>
        <p className="text-gray-700">{selectedNews.description}</p>
      </div>
    </div>
  );
}

export default NewsModal;