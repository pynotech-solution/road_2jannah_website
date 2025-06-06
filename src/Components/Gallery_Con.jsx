import GalleryItem_Con from './GalleryItem_Con.jsx';

function Gallery_Con({ gallery, openGalleryModal }) {
  return (
    <div id="gallery" className="container mx-auto py-8 px-2">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Our Impact in Photos</h2>
      <p className="text-center text-gray-700 mb-6">See the difference your donations make in the lives of those we serve.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.map((item, index) => (
          <GalleryItem_Con key={index} type={item.type} src={item.src} alt={item.alt} caption={item.caption} items={item.items} onClick={() => openGalleryModal(item, 0)} />
        ))}
      </div>
    </div>
  );
}

export default Gallery_Con