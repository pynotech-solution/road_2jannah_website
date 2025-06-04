import { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import Program from './components/Program.jsx';
import GalleryItem from './components/GalleryItem.jsx';
import NewsItem from './components/NewsItem.jsx';
import Footer from './components/Footer.jsx';
import { Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [featuredNews, setFeaturedNews] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyMoMoSuccess, setCopyMoMoSuccess] = useState(false);

  useEffect(() => {
    const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
    setFeaturedNews(sortedNews[0]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedGalleryItem || !selectedGalleryItem.items) return;
      if (event.key === 'ArrowRight') nextItem();
      else if (event.key === 'ArrowLeft') prevItem();
    };
    if (selectedGalleryItem) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGalleryItem, currentIndex]);

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const openDonationModal = () => setIsDonationModalOpen(true);
  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
    setCopySuccess(false);
    setCopyMoMoSuccess(false);
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const copyToClipboard = () =>
    navigator.clipboard.writeText("123-456-7890").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }).catch(err => console.error("Failed to copy text: ", err));

  const copyMoMoToClipboard = () =>
    navigator.clipboard.writeText("0555-123-456").then(() => {
      setCopyMoMoSuccess(true);
      setTimeout(() => setCopyMoMoSuccess(false), 2000);
    }).catch(err => console.error("Failed to copy text: ", err));

  const updateFeaturedNews = (newsItem) => setFeaturedNews(newsItem);
  const openGalleryModal = (item, index = 0) => {
    setSelectedGalleryItem(item);
    setCurrentIndex(index);
  };
  const closeGalleryModal = () => {
    setSelectedGalleryItem(null);
    setCurrentIndex(0);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) closeGalleryModal();
  };

  const nextItem = () => selectedGalleryItem?.items && setCurrentIndex(prev => (prev + 1) % selectedGalleryItem.items.length);
  const prevItem = () => selectedGalleryItem?.items && setCurrentIndex(prev => (prev - 1 + selectedGalleryItem.items.length) % selectedGalleryItem.items.length);

  const programs = [
    { title: "Ramadan Community Outreach", description: "During the holy month of Ramadan, we provide iftar meals, essential grains, and support to 1,000 families, ensuring no one goes hungry...", donateText: "Donate to Ramadan Outreach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Ramadan Community Outreach" },
    { title: 'Medwuma Pa "Community Empowerment Outreach"', description: 'Medwuma Pa, meaning "Good Work" in Akan, supports sustainable livelihoods by providing small grants...', donateText: "Support Community Empowerment", image: "https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Medwuma Pa Empowerment" },
    { title: "Shave or Braid the Orphan", description: "This unique initiative offers free haircuts and braiding services to orphans...", donateText: "Help an Orphan", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Shave or Braid the Orphan" },
  ];

  const news = [
    { title: "Ramadan 2025 Iftar Campaign Reaches 1,000 Families", date: "April 15, 2025", description: "Our Ramadan Community Outreach successfully distributed...", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Ramadan Iftar Campaign", category: "General News" },
    { title: "Medwuma Pa Empowers 50 Women with New Skills", date: "March 20, 2025", description: "Through our Medwuma Pa program, 50 women completed...", image: "https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Medwuma Pa Training", category: "Events" },
    { title: "Shave or Braid Brings Smiles to 100 Orphans", date: "February 10, 2025", description: "Our Shave or Braid the Orphan initiative provided...", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Shave or Braid Event", category: "General News" },
    { title: "Community Support Initiative Launched", date: "January 5, 2025", description: "A new initiative provides essential supplies...", image: "https://images.unsplash.com/photo-1532629345-2e0b60e33f08?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Community Support Initiative", category: "Events" },
    { title: "Winter Aid Distribution for Refugees", date: "December 15, 2024", description: "We distributed blankets, clothing, and food supplies...", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Winter Aid Distribution", category: "General News" },
    { title: "Educational Workshop for Rural Youth", date: "November 10, 2024", description: "Our educational workshop provided learning materials...", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Educational Workshop", category: "Events" },
    { title: "Healthcare Camp Serves 300 Families", date: "October 5, 2024", description: "A free healthcare camp offered medical checkups...", image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Healthcare Camp", category: "General News" },
  ];

  const gallery = [
    { type: "image", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Ramadan Iftar Distribution", caption: "Distributing iftar meals to families during Ramadan." },
    { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", alt: "Ramadan Iftar Video", caption: "Video of iftar meal distribution." },
    { type: "album", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Medwuma Pa Album", caption: "Photos and videos from Medwuma Pa training.", items: [{ type: "image", src: "https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Medwuma Pa Training Photo 1" }, { type: "video", src: "https://www.youtube.com/embed/xyz123", alt: "Medwuma Pa Training Video" }, { type: "image", src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Medwuma Pa Training Photo 2" }] },
    { type: "image", src: "https://images.unsplash.com/photo-1532629345-2e0b60e33f08?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Community Support", caption: "Delivering essential supplies to rural communities." },
    { type: "album", src: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", alt: "Winter Aid Album", caption: "Photos and videos from winter aid distribution.", items: [{ type: "image", src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Winter Aid Photo 1" }, { type: "video", src: "https://www.youtube.com/embed/abc789", alt: "Winter Aid Video" }] },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderNav />
      <HeroCarousel />
      <div id="programs" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Program key={index} title={program.title} description={program.description} donateText={program.donateText} image={program.image} alt={program.alt} />
          ))}
        </div>
      </div>
      <div id="gallery" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Our Impact in Photos</h2>
        <p className="text-center text-gray-700 mb-6">See the difference your donations make in the lives of those we serve.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <GalleryItem key={index} type={item.type} src={item.src} alt={item.alt} caption={item.caption} items={item.items} onClick={() => openGalleryModal(item, 0)} />
          ))}
        </div>
      </div>
      <div id="news" className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Latest News</h2>
        <p className="text-center text-gray-700 mb-6">Stay updated with our recent activities and impact.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredNews && (
            <div className="md:col-span-2 relative bg-gray-100 rounded-lg overflow-hidden shadow-md group">
              <img src={featuredNews.image} alt={featuredNews.alt} className="w-full h-[500px] object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75" />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-6 w-full transition duration-300 group-hover:-translate-y-2">
                <p className="text-sm bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-2">{featuredNews.category}</p>
                <p className="text-xs mb-1">{featuredNews.date}</p>
                <h3 className="text-xl font-bold">{featuredNews.title}</h3>
                <p className="mt-2 text-sm">{featuredNews.description}</p>
                <button onClick={() => openModal(featuredNews)} className="mt-4 text-teal-600 font-semibold hover:text-teal-500">→ Read now</button>
              </div>
            </div>
          )}
          {news.length > 1 && (
            <div className="space-y-4 max-h-[100%] overflow-y-hidden pr-2">
              {news.map((item, index) => item !== featuredNews && (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:bg-teal-50 transition animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                  <p className="text-xs bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-1">{item.category}</p>
                  <p className="text-xs mb-1">{item.date}</p>
                  <h4 className="text-sm font-bold text-teal-800">{item.title}</h4>
                  <button onClick={() => updateFeaturedNews(item)} className="mt-2 text-teal-600 font-semibold text-sm hover:text-teal-500">→ Read now</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {isModalOpen && selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-xl">×</button>
            <img src={selectedNews.image} alt={selectedNews.alt} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-xs bg-teal-200 inline-block px-2 py-1 text-teal-800 font-bold mb-2">{selectedNews.category}</p>
            <p className="text-xs text-gray-600 mb-2">{selectedNews.date}</p>
            <h3 className="text-xl font-bold text-teal-800 mb-2">{selectedNews.title}</h3>
            <p className="text-gray-700">{selectedNews.description}</p>
          </div>
        </div>
      )}
      {selectedGalleryItem && (
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
      )}
      <div id="about" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">About Us</h2>
        <div className="border-t border-teal-800 w-16 mx-auto mb-6"></div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-gray-700 text-lg leading-relaxed">Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities...</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="About Us Community Support" className="w-full h-96 object-cover rounded-lg" />
          </div>
        </div>
      </div>
      <div id="focus" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Our Focus</h2>
        <p className="text-center text-gray-700 mb-8">At Road2Jannah Foundation, we channel our efforts into key areas...</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Education for Rural Youth" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Education for Rural Youth</h3>
              <p className="text-gray-700 text-sm">We provide learning materials and tutoring to rural youth...</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Healthcare for Underserved Families" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Healthcare for Underserved Families</h3>
              <p className="text-gray-700 text-sm">Our healthcare camps offer medical checkups and medicines...</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Economic Empowerment" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Economic Empowerment</h3>
              <p className="text-gray-700 text-sm">Through programs like Medwuma Pa, we provide grants and training...</p>
            </div>
          </div>
        </div>
      </div>
      <div id="donate" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Donate Now</h2>
        <div className="border-t border-teal-800 w-16 mx-auto mb-6"></div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">Your generous contributions help us provide food, empowerment, and care...</p>
            <div className="text-center">
              <button onClick={openDonationModal} className="bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700">Make a Donation</button>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Donate Now Community Support" className="w-full h-96 object-cover rounded-lg" />
          </div>
        </div>
      </div>
      {isDonationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative">
            <button onClick={closeDonationModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 hover:scale-110 transition duration-300 text-xl">×</button>
            <h3 className="text-2xl font-bold text-teal-800 mb-4 text-center">Donation Details</h3>
            <div className="border-t border-teal-800 w-16 mx-auto mb-4"></div>
            <p className="text-gray-700 text-lg text-center">Please make your donation to the following accounts:</p>
            <div className="bg-teal-50 p-4 rounded-md mt-4 text-center">
              <p className="text-gray-700 text-lg font-semibold">Bank Account Number: 123-456-7890</p>
              <p className="text-gray-700 text-lg">Branch: Accra Main Branch</p>
              <p className="text-gray-700 text-lg">Account Name: Road2Jannah Foundation</p>
              <button onClick={copyToClipboard} className="mt-2 bg-teal-800 text-white py-1 px-3 rounded hover:bg-teal-700 focus:outline-none">{copySuccess ? 'Copied!' : 'Copy to Clipboard'}</button>
            </div>
            <div className="bg-teal-50 p-4 rounded-md mt-4 text-center">
              <p className="text-gray-700 text-lg font-semibold">MoMo Account Number: 0555-123-456</p>
              <p className="text-gray-700 text-lg">Network: MTN</p>
              <p className="text-gray-700 text-lg">Account Name: Road2Jannah Foundation</p>
              <button onClick={copyMoMoToClipboard} className="mt-2 bg-teal-800 text-white py-1 px-3 rounded hover:bg-teal-700 focus:outline-none">{copyMoMoSuccess ? 'Copied!' : 'Copy to Clipboard'}</button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-lg">Bank: EcoBank Ghana</p>
              <p className="text-gray-700 text-lg">SWIFT Code: ECOCGHAC</p>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">Thank you for your support! Your contribution will help us continue our mission.</p>
          </div>
        </div>
      )}
      <div id="contact" className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="relative bg-cover bg-center h-64 mb-8" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Get in Touch</h2>
              <p className="text-gray-700 text-lg mb-6">We’d love to hear from you! Reach out to us directly to share your thoughts, inquiries, or feedback.</p>
              <button onClick={openContactModal} className="bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300">Send Direct Message</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-teal-800 mr-3 mt-1" />
                  <p className="text-gray-700 text-lg">Email: <a href="mailto:info@road2jannah.org" className="text-teal-800 hover:text-teal-600 transition duration-300">info@road2jannah.org</a></p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-teal-800 mr-3 mt-1" />
                  <p className="text-gray-700 text-lg">Phone: <a href="tel:+233241814030" className="text-teal-800 hover:text-teal-600 transition duration-300">+233 241 814 030</a></p>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-teal-800 mr-3 mt-1" />
                  <p className="text-gray-700 text-lg">Address: Accra, Ghana</p>
                </div>
                <div className="flex justify-start space-x-6">
                  <a href="https://facebook.com/road2jannah" target="_blank" rel="noopener noreferrer" className="text-teal-800 hover:scale-105 hover:text-teal-600 transition duration-300">Facebook</a>
                  <a href="https://twitter.com/road2jannah" target="_blank" rel="noopener noreferrer" className="text-teal-800 hover:scale-105 hover:text-teal-600 transition duration-300">Twitter</a>
                  <a href="https://instagram.com/road2jannah" target="_blank" rel="noopener noreferrer" className="text-teal-800 hover:scale-105 hover:text-teal-600 transition duration-300">Instagram</a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-teal-800 mb-4">Our Location</h3>
                <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center">
                  <p className="text-gray-600">Map Placeholder (Add Google Maps Embed Here)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4 relative">
            <button onClick={closeContactModal} className="absolute top-2 right-2 text-teal-800 hover:text-teal-600 text-xl">×</button>
            <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Your Email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Your Message" required></textarea>
              </div>
              <button className="w-full bg-teal-800 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300">Send Message</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;