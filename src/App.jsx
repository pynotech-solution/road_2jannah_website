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
import QuoteSection from './components/QuoteSection.jsx';

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
  const quotes = [
  { quote: "The best among you are those who bring the most benefit to the rest of mankind.", attribution: "Prophet Muhammad (Peace Be Upon Him)" },
  { quote: "Give charity without delay, for it stands in the way of calamity.", attribution: "Prophet Muhammad (Peace Be Upon Him)" },
  { quote: "Kindness is a mark of faith, and whoever is not kind has no faith.", attribution: "Prophet Muhammad (Peace Be Upon Him)" },
  { quote: "The best charity is that given in Ramadan.", attribution: "Prophet Muhammad (Peace Be Upon Him)" },
  { quote: "A good word is a charity.", attribution: "Prophet Muhammad (Peace Be Upon Him)" },
];

const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }, 5000); // Change quote every 5 seconds
  return () => clearInterval(interval);
}, [quotes.length]);

// In the return statement:

  const programs = [
    { title: "Ramadan Community Outreach", description: "During the holy month of Ramadan, we provide iftar meals, essential grains, and support to 1,000 families, ensuring no one goes hungry...", donateText: "Donate to Ramadan Outreach", image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494152552_9504517902918057_5715987183796554615_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFuihgAcgcZrI8AOKDSPcBVuTgCgCQps_q5OAKAJCmz-uoexvlpJ1Hk7TUoVrz6ef_CzPswE8i0Ji7obYL9rt3j&_nc_ohc=xjfNmfMmCUcQ7kNvwEhqBbj&_nc_oc=AdmHoZu8ze2rMe_KBZw5X0kBcPlOIc0V3nbAiaeijoH6ri5zaaL0wxhViUMEUKx_zJE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=dowWGy-xWCg29b1Mdn8y-g&oh=00_AfKqMDqJQ7DOPwe7z-CYXRznhz367NBjRTtkIALK0aYH1w&oe=68464A37", alt: "Ramadan Community Outreach" },
    { title: 'Medwuma Pa "Community Empowerment Outreach"', description: 'Medwuma Pa, meaning "Good Work" in Akan, supports sustainable livelihoods by providing small grants...', donateText: "Support Community Empowerment", image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495856015_9593036517399528_7973012033177796404_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF9s2HMXtQ5tqrvQFcoHW3tzhbswQxN6qPOFuzBDE3qoyzUY_d6775ztpyZHxx0f8LCKFBx9Aunq93tnfCDHEpP&_nc_ohc=GOHE0ny2qbUQ7kNvwF5nuqp&_nc_oc=AdleZXBoE8iZ8UU0LU6ym8wnT7Hcly8wG310mA86Vq50rkrT0u5W9Vgcb6d52HoI0Ls&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ApZEiMgQ-ac8joqUvaPypg&oh=00_AfJWZQXr-nVobre8cp72Vkv4-OTjOkYbX6I14KZ387ghWQ&oe=68466C17", alt: "Medwuma Pa Empowerment" },
    { title: "Shave or Braid the Orphan", description: "This unique initiative offers free haircuts and braiding services to orphans...", donateText: "Help an Orphan", image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/496940432_9621165381253308_5638857211374510766_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHoD6FckslT8lnzbi9AlpdBjpzEvfjxzXiOnMS9-PHNeMh4K_3HXwUiu7SNAf2XaDR_-ElfTLd6ffp_xc6OGC-u&_nc_ohc=v6mAellPu4oQ7kNvwEWUC50&_nc_oc=AdlYDHKJpvdvgQgvbaXiD5FLqy0D6KCKAWAwRc9rG5cjcWBQITkgi7yFmFYVZ7Qx6kk&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=wFid_3-U3Cs8IUV9XcBCQw&oh=00_AfKM96Z0s_tvuUY0ubBn5ifew1dnVLoIlbGKiGVkLRXbnQ&oe=684669C4", alt: "Shave or Braid the Orphan" },
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
    { type: "image",
       src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        alt: "Ramadan Iftar Distribution", caption: "Distributing iftar meals to families during Ramadan." },

    { type: "video",
       src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        alt: "Ramadan Iftar Video",
         caption: "Video of iftar meal distribution." },

    { type: "album",
       src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        alt: "Medwuma Pa Album",
         caption: "Photos and videos from Medwuma Pa training.",
          items:
           [
            { type: "image", src: "https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
             alt: "Medwuma Pa Training Photo 1" 
            },
            { type: "video", 
                src: "https://www.youtube.com/embed/xyz123",
                 alt: "Medwuma Pa Training Video"
              }, 

              { type: "image",
                 src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  alt: "Medwuma Pa Training Photo 2" }
                ]
               },

    { type: "image",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494151275_9504517752918072_820146410886278808_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE1rCVTlFTq_YXdWhbXF7gzifpQWrOOiQaJ-lBas46JBhX5jOT4PtEewwT0WD0IfiNS_ZIqpwN0T7GloMnSo7qk&_nc_ohc=mKJAMeRr_wIQ7kNvwG9aAkb&_nc_oc=Adk9izQ3J-JB1ODgFQpi0TFLdjJXq9pW06F-wrb5dPSpt-0RnkP01PzazJgq3yrLHWc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=dowWGy-xWCg29b1Mdn8y-g&oh=00_AfL7kVh2udav217hQrnAptpZuiWrbh7Ch3sDZ8lgPEb6Rw&oe=68466226",
        alt: "The annual Ramadan Community Outreach PHASE 1 Project was a success courtesy your support, PHASE 2 Project hits us again with special request from the list of locations on the flyer.Help us in our quest to feed, support and maintain some selected Communities in Ghana.Send your donations to Account Name : Road 2 Jannah Foundation  Momo No: 0242524634 Merchant No : 0598555082  Cheques & Bank Transactions : Road 2 Jannah Foundation LBG Account No : 600024209865  Branch : SG Ghana, Lapaz Contact for further details 0242524634 / 0243457868 You And I Can Make A Change 🙇🏾‍♂️ Thank you", 
        caption: "The annual Ramadan Community Outreach PHASE 1 Project was a success courtesy your support" },

    { type: "album", 
      src: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
       alt: "Winter Aid Album", 
       caption: "Photos and videos from winter aid distribution.",
        items: [
          {
             type: "image",
              src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
               alt: "Winter Aid Photo 1"
               }, 
            { 
              type: "video", 
              src: "https://www.youtube.com/embed/abc789",
               alt: "Winter Aid Video" 
            }
          ] 
        },
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
<QuoteSection quote={quotes[currentQuoteIndex].quote} attribution={quotes[currentQuoteIndex].attribution} />
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