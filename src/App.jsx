import { useState, useEffect } from 'react';
import Nav_Con from './components/Nav_Con';
import HeroCarousel_Con from './components/HeroCarousel_Con';
import About_Con from './components/About_Con';
import Focus_Con from './components/Focus_Con';
import Programs_Con from './components/Programs_Con';
import Gallery_Con from './components/Gallery_Con';
import News_Con from './components/News_Con';
import NewsModal_Con from './components/NewsModal_Con';
import GalleryModal_Con from './components/GalleryModal_Con';
import QuoteSection_Con from './components/QuoteSection_Con';
import Donate_Con from './components/Donate_Con';
import DonationModal_Con from './components/DonationModal_Con';
import Contact_Con from './components/Contact_Con';
import ContactModal_Con from './components/ContactModal_Con';
import FAQ_Con from './components/FAQ_Con';
import Footer_Con from './components/Footer_Con';
import MissionVision from './components/MissionVision';
import SupportReasons from './components/SupportReasons';
import { gallery, news, programs, quotes } from './PageData/data';




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
  
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  // In the return statement:
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav_Con />

      <HeroCarousel_Con />

      <About_Con />

      <Focus_Con />

      <Programs_Con programs={programs} />

      {/* <MissionVision /> */}

      <Gallery_Con gallery={gallery} openGalleryModal={openGalleryModal} />

      <News_Con featuredNews={featuredNews} news={news} openModal={openModal} updateFeaturedNews={updateFeaturedNews} />

      <NewsModal_Con isModalOpen={isModalOpen} selectedNews={selectedNews} closeModal={closeModal} />

      <GalleryModal_Con
        selectedGalleryItem={selectedGalleryItem}
        currentIndex={currentIndex}
        closeGalleryModal={closeGalleryModal}
        handleOverlayClick={handleOverlayClick}
        nextItem={nextItem}
        prevItem={prevItem}
      />
        
    <QuoteSection_Con quote={quotes[currentQuoteIndex].quote} attribution={quotes[currentQuoteIndex].attribution} />



      <SupportReasons />

      <Donate_Con openDonationModal={openDonationModal} />
        
      <DonationModal_Con
        isDonationModalOpen={isDonationModalOpen}
        closeDonationModal={closeDonationModal}
        copyToClipboard={copyToClipboard}
        copyMoMoToClipboard={copyMoMoToClipboard}
        copySuccess={copySuccess}
        copyMoMoSuccess={copyMoMoSuccess}
      />

      <Contact_Con openContactModal={openContactModal} />

      <ContactModal_Con isContactModalOpen={isContactModalOpen} closeContactModal={closeContactModal} />

      <FAQ_Con />

      <Footer_Con />
    </div>
  );
}

export default App;