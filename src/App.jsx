import { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import Programs from './components/Programs.jsx';
import Gallery from './components/Gallery.jsx';
import News from './components/News.jsx';
import About from './components/About.jsx';
import Focus from './components/Focus.jsx';
import Donate from './components/Donate.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import DonationModal from './components/DonationModal.jsx';
import GalleryModal from './components/GalleryModal.jsx';
import NewsModal from './components/NewsModal.jsx';

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
      if (event.key === 'ArrowRight') {
        nextItem();
      } else if (event.key === 'ArrowLeft') {
        prevItem();
      }
    };
    if (selectedGalleryItem) {
      console.log("Adding keyboard event listener for gallery navigation");
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      console.log("Removing keyboard event listener for gallery navigation");
      window.removeEventListener('keydown', handleKeyDown);
    };
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
    console.log("Opening gallery modal with item:", item, "and index:", index);
    setSelectedGalleryItem(item);
    setCurrentIndex(index);
  };
  const closeGalleryModal = () => {
    console.log("Closing gallery modal");
    setSelectedGalleryItem(null);
    setCurrentIndex(0);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      console.log("Overlay clicked, closing gallery modal");
      closeGalleryModal();
    }
  };

  const nextItem = () => {
    if (selectedGalleryItem?.items) {
      const newIndex = (currentIndex + 1) % selectedGalleryItem.items.length;
      console.log("Navigating to next item, new index:", newIndex);
      setCurrentIndex(newIndex);
    }
  };

  const prevItem = () => {
    if (selectedGalleryItem?.items) {
      const newIndex = (currentIndex - 1 + selectedGalleryItem.items.length) % selectedGalleryItem.items.length;
      console.log("Navigating to previous item, new index:", newIndex);
      setCurrentIndex(newIndex);
    }
  };

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
      <Programs programs={programs} />
      <Gallery gallery={gallery} openGalleryModal={openGalleryModal} />
      <News featuredNews={featuredNews} news={news} openModal={openModal} updateFeaturedNews={updateFeaturedNews} />
      <NewsModal isModalOpen={isModalOpen} selectedNews={selectedNews} closeModal={closeModal} />
      <GalleryModal
        selectedGalleryItem={selectedGalleryItem}
        currentIndex={currentIndex}
        closeGalleryModal={closeGalleryModal}
        handleOverlayClick={handleOverlayClick}
        nextItem={nextItem}
        prevItem={prevItem}
      />
      <About />
      <Focus />
      <Donate openDonationModal={openDonationModal} />
      <DonationModal
        isDonationModalOpen={isDonationModalOpen}
        closeDonationModal={closeDonationModal}
        copyToClipboard={copyToClipboard}
        copyMoMoToClipboard={copyMoMoToClipboard}
        copySuccess={copySuccess}
        copyMoMoSuccess={copyMoMoSuccess}
      />
      <Contact openContactModal={openContactModal} />
      <ContactModal isContactModalOpen={isContactModalOpen} closeContactModal={closeContactModal} />
      <Footer />
    </div>
  );
}

export default App;