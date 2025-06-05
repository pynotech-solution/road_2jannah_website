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
import FAQ from './components/FAQ.jsx';

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
  {
    title: "R2J Pays Courtesy Call To RCO'24 Stakeholders",
    date: "July 19, 2024", 
    description:
      "The courtesy call which saw Road 2 Jannah Foundation led by it's Executive Director/Founder, presented Citation to stakeholders of the just ended Ramadan Community Outreach Phase 2 Project. This gesture was to appreciate their support and be enlightened more in the humanitarian sector. The foundation first visited Dawadawa Jollof Delight @Adenta where conversations about empowerment took the center stage. The CEO of Dawadawa Jollof Delight, Rabiatu Atule Akamim observed from her findings on gender equality in the zongo communities that Representation of Muslim women in decision making is almost nonexistent and some Muslim women are very timid at decision making table and has therefore charged the group to facilitate a sensitization program that will see to empower the Moslem Women to be vocal at decision making table. The group then moved to cantonments where they joined a moslem congregation, a prayer led by Imam of National Police Mosque Chief Supt. of Police Imam Hussein Abdul Rahim Hussein in Jumah prayers. Imam Hussein Abdul Rahim Hussein and his deputy Imam Abass Abdul-Karim then engaged the foundation in a close door meeting after prayers where he invoke the blessings of Almighty Allah and spirit of unity in the group. Imam Hussein Abdul Rahim Hussein asked the foundation to take a critical look in and around the communities their membership is based and make an impact of changing lives. On his part, Imam Abass Abdul-Karim mentioned about sustainability of NGO's due to lack of structural absence in their modules of operandi and advice the group to employ the act of sustainability and keep up the good work. A Citation was then presented to Imam Hussein Abdul Rahim Hussein to honour his role in positive change in soceity through his impactful sermons. Baina Tv, the official media partner for the foundation in it's operations also received a citation for supporting the course with it's platforms to reach higher heights. The last to be awarded citation was the proprietor of Rahma Orphanage Home Sheikh Yusif Musah for dedicating his life for the vulnerable kids in society.",

    media: [
      { type: "image", src:"https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495461016_9592896200746893_7163327202326270463_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHhPgraJFCg8gPcLCfc_79ZrYIEbAC8kHatggRsALyQdrnPcqJDMRrGKk6CV_tuAKW0hkuAotkrJ5RUZnHnLIhU&_nc_ohc=5F_L22gegp8Q7kNvwGpsvK6&_nc_oc=Adl_PMFCkWqgtxokbjPss4ruFfDqPQvk10O6L-FC6rhoVfOXW3mdJsZ0rYGAERKY3iI&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=R3dsbXkQxIbz1hXQZ48IoA&oh=00_AfIfIgF8FGUaX-bBijYW_cjW2c8n4FBVkG5eRIA5GoAk8Q&oe=68466B45", alt: "R2J Courtesy Cal"  },

      { type: "image", src:       "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/496254434_9593036554066191_1275625130246270772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEGktLm3r1jLtFraVbgzP0rcx-KM9PLiaxzH4oz08uJrOM9S1GJ_ux7Dn6h8ccySfwVD3J5Lghzp5QEhaU4H70x&_nc_ohc=ElO7RdO7mF8Q7kNvwH-zn6m&_nc_oc=AdnmWuEcS6O54JGcXaz9F0kaA91BAdQUgW-AtaRW9AAiPt0jb39TARGldpYA4YqboCQ&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=6CUUSyXNHJL73tGxpBsFPw&oh=00_AfMmzvU1rY6faYNv73wp98zFpBUFKATCxwBjQFKQUaKAOg&oe=6846BB15"
, alt: "R2J Courtesy Cal" },


      { type: "image", src:       "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495516026_9593036537399526_2092711318723451072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFm9SRO6x2g0KEy1_iHCS7BAJRxJ3Xm5hQAlHEndebmFO5Y4HKTcztQHOBzrMiX23XzVmZNsviqWsHN9Xy8juN8&_nc_ohc=xirM_9n16pYQ7kNvwEkvdNg&_nc_oc=AdkOHEH_3g7_MlZ_3jRyxfItNAXMowxG76d4nQaMmVjjaX2LwnKc-2QklhJk-BqZ5sg&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=umrheDAtnszKRDOTwh5HSQ&oh=00_AfPpXAHtUo0QuQ_RzdR48ehJV7NSAK0JXdKrUqGmV1N5PA&oe=6846A988",alt: "R2J Courtesy Cal " },

      { type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/496006223_9593036527399527_3719181368562995419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFqhAKf_f4ylJKaNE0VxNqmIF5mJ7NbrKggXmYns1usqBYSA2Fklkl93nWYKls2uEaYndzQ7EoH7TFX3IoKlZLr&_nc_ohc=9LpQLiY6n0QQ7kNvwG_47CT&_nc_oc=AdnNSLrHJzdZIRyBkAlivgf13VSn9hw1Sdq9MDXqwnkVU-PXDJWPc19nRF_FQav27IM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=UGIC_Mm0-AxWL-_SqZi7Og&oh=00_AfOschrkU7QD14PQKYfGGllOv8yX4riYyzgSe3aLiUPAig&oe=6846BE26", alt: "R2J Courtesy Cal " },

      { type: "image", src:       "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495805064_9593036577399522_5771634513842279882_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGv55-pnqtp2Wk21L5lIBqr1-OHQuHVO0HX44dC4dU7Qa2Nf0vU_ZIw9_VvwPK0Ik0X5ppZHwbJZIjJBaDQhhRz&_nc_ohc=fO4p5qA7dncQ7kNvwEpZsuC&_nc_oc=Adlwl11F-pl5aZAvoI4wit6s7rUclECnibboDmYriyEl8pVErtg6N45FFT8bZfN3e4g&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=0njx4ntFry5k9LulVmom2A&oh=00_AfOU-70xEBx4hOjtrjUbBsz4MelO_KkjNNbY0CKGUU-3Wg&oe=6846CE01", alt: "R2J Courtesy Cal " },

      { type: "image", src:       "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495856015_9593036517399528_7973012033177796404_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF9s2HMXtQ5tqrvQFcoHW3tzhbswQxN6qPOFuzBDE3qoyzUY_d6775ztpyZHxx0f8LCKFBx9Aunq93tnfCDHEpP&_nc_ohc=GOHE0ny2qbUQ7kNvwF5nuqp&_nc_oc=AdleZXBoE8iZ8UU0LU6ym8wnT7Hcly8wG310mA86Vq50rkrT0u5W9Vgcb6d52HoI0Ls&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ApZEiMgQ-ac8joqUvaPypg&oh=00_AfJWZQXr-nVobre8cp72Vkv4-OTjOkYbX6I14KZ387ghWQ&oe=68466C17", alt: "R2J Courtesy Cal " },

      { type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495804950_9593036547399525_353190617025214346_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGzNj7fH2eA8yjg4CoCaglYUJyq9M3euuxQnKr0zd667Aq3N_G9mzEZkGingsnM54i4Qqj3sdRSp5UP5-xQWWUD&_nc_ohc=X6DveaRZlxIQ7kNvwFkEXPd&_nc_oc=AdmjImEHgTM8FWhOWme_uLw6q_lT4twhvkMaI0XXwyTF_czUB-BrfPOjVMmKiuM5Krw&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=MGE3lzTe-YTg6ugRXvUaYg&oh=00_AfM5CRnyZEUyH7z4REHTW64RJTXoOFk4N8ZQW6lzd6ODcg&oe=6846AFC7", alt: "R2J Courtesy Cal " },

      { type: "image", src:       "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495999213_9593036607399519_5885767734663083777_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG2pw_erM2iZynF8OMrhMOCO99dUChzC6M7311QKHMLo7z0M_D8NUVQMHsZk1U6btO07TGHNxEXRTVEhtJWX3f7&_nc_ohc=EF7HYB1MgCgQ7kNvwGLrtIL&_nc_oc=AdmEekTIscqS04bmTCMfuCuv5RJPAHrHs9zSq3CtZvanMB4HukOGJ31GCWGZN9jvkmA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=NvlbsBJID7WCp89gD75nRg&oh=00_AfOGmXo608yG5pMXX6Aoqc16cuO1HSS8g16lhlmwOBA2xg&oe=6846D1C6",alt: "R2J Courtesy Cal " },

      { type: "image", src:       "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495806469_9593036530732860_6681287673732612863_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8Mxe8zuoTvWCYVq9X5aVc59QOXlfT3Ezn1A5eV9PcTHUqJW8CbbYyKvbQC7dbClwtDE94aC3hp5riPzL-b1Mp&_nc_ohc=b6BfcSFsx_oQ7kNvwFAwVd9&_nc_oc=AdlKwCSr1HKy11gyN1mkHQZV3WUVBCyxPmTBmi-Giopx5CCg2H7qpDcJx5RmbyouZyo&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=LfqMy5wlqifx9hK_umn9JQ&oh=00_AfOnfaXZZy2BuzaUooPK1VaIVtNz3auaeXWIBykUpa2pSw&oe=6846CACD", alt: "R2J Courtesy Cal " },
    ],
    

    
    category: "General News",
  },
  {
    title: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home",
    date: "April 11, 2025",
    description: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home Road 2 Jannah (R2J) Foundation with support from KGL Foundation and Wilmar Ghana has made a significant donation to the orphans at Rahma Orphanage Home in Alajo, a suburb of the Ayawaso Central Constituency in the Greater Accra Region.          The donation forms part of the foundations' annual project marking the end of Ramadan was made in the spirit of love, care and community support. The items donated included rice, oil, sanitary pads, beverages, toilet soaps, detergents, clothes, blueband bread spread, exercise books, and other essential goods.KGL Foundation and Wilmar Ghana, known for their support and commitment to community development over the years, has once again extended their support for this year's project.Speaking on behalf of the Executive Director of Road 2 Jannah Foundation, Mr. Kamaru Abdulai, the Foundation’s Public Relations Officer, Mr Yussif Okai, shared a message of  hope and compassion. He lamented about the outreach not just giving food items but creating a space where people feel seen, heard and supported especially during such a meaningful time of year. He as well thanked KGL Foundation and Wilmar Ghana for their tremendous support and help in making difference in the lives of the less privilege.The Proprietor of Rahma Orphanage Home, Sheikh Yusuf Musah, expressed heartfelt gratitude to Road 2 Jannah Foundation, KGL Foundation and Wilmar Ghana for their unwavering support in bringing joy to the lives of the orphans.He has added his voice to the call for supporting the Foundation's Borehole construction project to the underserved communities this year.",
    media: [
      { type: "image", src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/490214212_9378496518853530_4854603075148089646_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGDUbY-aBEVejvLJb3NfaECx4GbdnFlCyHHgZt2cWULIbGtevV9fBoUw3Jk7QWH9yECOYwks7I7WvTzw8MilHhO&_nc_ohc=DUO-8TEcX-4Q7kNvwG91W23&_nc_oc=Admgq0b0vaqYrbFQeejeVA0GWEze9dN6NcXX-lszb4-u9NJiFp7ZIGkLnKFuLOwHUfw&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9LOnJDHxZdM2-yA9KBcYKw&oh=00_AfMe1Z2TeTVvDGd9Pzj1GTigUzgDcjIMnENCcXa6Zt66rQ&oe=6846BA0E", alt: "Educational Workshop 1" },

      { type: "image", src:       "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/490038229_9378497012186814_3981098848509710900_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGEVlQubOL2VWZHdk9SsYBU8R2j3JIk7hnxHaPckiTuGemEemLecTvdX-Abv0lLGDWh5GKjVr5OQHtsCttA9CPR&_nc_ohc=FcfRTIHRypIQ7kNvwGIu741&_nc_oc=Admv6moWAEmi4YwmYpE8rb09gha0sv1xfEjh7l5hoD4ivVLlAcWR5TdxQGcVqZvhcE8&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=5TjTHq2GmZd0KolWX651bg&oh=00_AfOWqC0MiTZpmwh5e-9JBwvNQTWf_RX5lmFOsMHW2bnitg&oe=6846B922", alt: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home" },

      { type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/490118475_9378497445520104_2630357325209166677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHbl7ipQJlREGELt10oai44TWRRnIZb1x9NZFGchlvXH7ooIyuf9lGV41ZI8hcRqf8PwYRUu2Y74oo0qzy07OPd&_nc_ohc=2O19baqnpDsQ7kNvwFzkwQ0&_nc_oc=Adk6nLayfU2TxiSok0vWMO2RkmO1yQZDp_YRAOQ2Os8Y4RwY_cFC99Py4yx7hVPmZfw&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=VZPEmBPRoyzr3w4zfjqZsQ&oh=00_AfMC6k76dClnAJCDdz6C0pBJe_qT3FkeAO3XmE-1Lq1fIQ&oe=6846CEA5", alt: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home" },

      { type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/490384019_9378497762186739_4414015015563736101_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHWhZQlvJqF2Gv-NHSQorTUOOmFbT2XbP446YVtPZds_oN_e6soIjXiGlsrCgXvbtGAcV-Am-C1gca77LV-fSK8&_nc_ohc=3iSJ4WTAceUQ7kNvwFBhnur&_nc_oc=AdnMuNAWWvr7z_iyd-iq-dL-DBOFdWgp5DA0w9X-t0QarEVtyZosKRIH6J3pv9B-HDI&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=HERZWj8iry6j_qsZejQiBw&oh=00_AfPWjd4-aTicjeiscE1GmbKKfDS2TurpMMUkjpqniJmBSA&oe=6846BE7D",
 alt: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home" },

      { type: "image", src:"https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/490851581_9378498275520021_7630457762757399178_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGCiRHeOdjNyl0h7qAQP8gB_pybc_GtKKT-nJtz8a0opEaR6s_51BZwb3Gv_-IdSKnCTjy60vHkJliiZS5QGnrb&_nc_ohc=9sHxiGxM808Q7kNvwEBl3t6&_nc_oc=Adnhoqbb5mNdMNjYuCavjZ7TzZy1U6m00wfjzVId1gBkt0k4MHPUK4pjM55wn_4WJGE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=6XkiJf6cmIT-QpBGpun-qQ&oh=00_AfPCztuk3OlMGmv1NaGWoRwzCOzzaYtHWZpL8UwxyTZ9UA&oe=6846C28C",
 alt: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home" },


      { type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/490574498_9378498655519983_1774566157506704939_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFnurG7uF02d__WiRYvX4c32YPh4TQsgtPZg-HhNCyC05UxXijWAp9tnj4n5jdpdGzjVNtIurEea8QKpQ5evvDv&_nc_ohc=8qmQP51RZMwQ7kNvwFr7U8N&_nc_oc=AdmMQGdTjSAbf3vN1B5wrgrqM6_WDGPWqrI-EE1HV7FT1RexTlvtQiM171N93MX3S0U&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=SyNCp6lgVSK7m94aFR9pUw&oh=00_AfO-66uX1jweX1kPEVxyTfHGT2V01sxlecMUqMSzws5w2Q&oe=6846AE64",
 alt: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home" },

      { type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/489954963_9378498978853284_2641772793107523829_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG7PafXGiWFUD0pFmt7o33f3cs8SMSCrbzdyzxIxIKtvPbQnC2NFOf-z3-Jxn8PLZLACTdRzYyHmJPRBDySGRs-&_nc_ohc=u5kGtr63VGkQ7kNvwH1o_ET&_nc_oc=AdlDs--njAuecfCIF0_CexsU5MJKu1cAFHUEF1di2aezlgwkzBt_7BTb7rzLYUyLMQ0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=1sdA43SNe-z6lKIjYz8g-g&oh=00_AfPoG87Kd1PMcaA1KwveyIFLn-FdE4rUo0ghYRLs2Uyy4g&oe=6846B7B7", alt: "Road 2 Jannah  Foundation donates to Rahma Orphanage Home" },
    ],
    category: "General News",
  },
  {
    title: "Let's create a conducive environment for teaching and learning for these 2 schools by contributing",
    date: "August 24, 2024",
    description:
      "Let's create a conducive environment for teaching and learning for these 2 schools by contributing any amount or any quantity of plastic chairs you can to support the transformation agenda of our education sector through outreach.These kids deserve sound mind and conducive environment to learn and impact the knowledge to the next generation.No amount is too smal",
  
    media: [
      { type: "image", src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/496940432_9621165381253308_5638857211374510766_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHoD6FckslT8lnzbi9AlpdBjpzEvfjxzXiOnMS9-PHNeMh4K_3HXwUiu7SNAf2XaDR_-ElfTLd6ffp_xc6OGC-u&_nc_ohc=v6mAellPu4oQ7kNvwHE0gu8&_nc_oc=AdlUsKXRiZRrwYE3Hgp3vCz8DUdctxIfEdZIfkCCW1ZClW4QdSjQiuOymalbbCbVW3M&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=1JF6SzqDhrP9YDCTxR_v0w&oh=00_AfONCzW_RwkqVE416CDBm5kVCTdKCz-LiohklOEA-w0SlQ&oe=6846A204", alt: "" },
    ],
    category: "Events",
  },
  {
    title: "The annual Ramadan Community Outreach PHASE 1 Project was a success courtesy your support",
    date: "February 10, 2025",
    description: "The annual Ramadan Community Outreach PHASE 1 Project was a success courtesy your support, PHASE 2 Project hits us again with special request from the list of locations on the flyer.Help us in our quest to feed, support and maintain some selected Communities in Ghana.Send your donations to Account Name : Road 2 Jannah Foundation  Momo No: 0242524634  Merchant No : 0598555082  Cheques & Bank Transactions : Road 2 Jannah Foundation LBG Account No : 600024209865 Branch : SG Ghana, Lapaz Contact for further details 0242524634 / 0243457868 You And I Can Make A Change 🙇🏾‍♂️ Thank you",
    media: [
      {type: "image", src:"https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494152552_9504517902918057_5715987183796554615_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFuihgAcgcZrI8AOKDSPcBVuTgCgCQps_q5OAKAJCmz-uoexvlpJ1Hk7TUoVrz6ef_CzPswE8i0Ji7obYL9rt3j&_nc_ohc=xjfNmfMmCUcQ7kNvwEVGtJa&_nc_oc=AdlQ03tyWeV-Pp6kyWSZ7NsM7xcNcoxvGkmJwF0b5l4FVzCXsVHe5f6ZytdYs9BbnOc&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=P1fovSpVCTg0lAlQsT62vQ&oh=00_AfOvkvrRrliv4ao_l-MHTSrG9C-jWCnsswNMncrvC_D4VA&oe=6846BAB7"},

      {type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494207187_9504517676251413_1910426553169373340_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHtYQrXMmkGigaYSIUpy8Tl6zmbAVFEe6vrOZsBUUR7q-eUQcjq2cJ3KZc9GAru1Bu9_cUVQNz-0Fd1iG06f2cm&_nc_ohc=c0s7ztd8DWUQ7kNvwEquGAt&_nc_oc=Adl8xoRXZC9_yj4s8X0Ij_aQvkgTeXYtw6dsqKS8r_ZtKBIWSJreXTgh2P050rrKTJ8&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=WQrLfpe05bqhakhQNd1krw&oh=00_AfNCfDPYch4nw12uMZM6y7ZD7tO-_EW12TJyC2CsRmTycg&oe=6846AC87"},

      {type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494151275_9504517752918072_820146410886278808_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE1rCVTlFTq_YXdWhbXF7gzifpQWrOOiQaJ-lBas46JBhX5jOT4PtEewwT0WD0IfiNS_ZIqpwN0T7GloMnSo7qk&_nc_ohc=mKJAMeRr_wIQ7kNvwEjMYyh&_nc_oc=AdmFVtuRD7J9YT6VZ9pgmuLJG2pp5jXbc5fqoC4gV6ivwzoU_ojjP7M_LljVPsr7Xi0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=Ld3Opx2AlKk0PojVyDR0Vg&oh=00_AfM5DQqt2Qs5RAlkQQrkfalvGbYD-Nx6gRVuiIFntJwu8w&oe=6846D2A6"},

   {   type: "image", src:"https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494153344_9504517542918093_8368326108722311213_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFv2aPtqSaMJBMAISLRFeaKRHMN1bfh6sdEcw3Vt-Hqx69zzF7lpUjnKFuSDfAOZQ53OYo4H_pWxRWHORlnR7zK&_nc_ohc=L9TpVfXE-FsQ7kNvwFTqdck&_nc_oc=Adk2Uaazy-P_YknFHs9pKWOq0S8S0uVPjXcGDspv8q_jQzDDNuhYigniq2VLWdd3yi0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=_tml48nXHMY3I-iJu1GOIA&oh=00_AfP6Ft0eWVPo5JbWLleFg3sbcRY5hwJ8sXnkLx_MG4NBZw&oe=6846C4C9"},

      {type: "image", src:"https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494682138_9504517709584743_3642770257766948984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGdR9rIRiz7wCNFZ24H4MhP6rjMNI7R1FXquMw0jtHUVaanIdJjup_TbWR7f-IkGtjDempaGoEjU5ewCkwHwWxB&_nc_ohc=Y2LdEtuJTYkQ7kNvwGCmrgs&_nc_oc=AdmgKy6FnfWaGqCaU7iTdLYZCDcme4NuZM8LwSDIKEIEu_Ks_McFHYgcQlJD-Vf-mQc&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=MOdFSZ8ANDGozYUkXq0QmQ&oh=00_AfPF8cbDqOJz-xfAZqoYr1_BFnnAvYwZgHB7r2rNTKBIUw&oe=6846B178"},

      {type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494372307_9504517802918067_2073955733735018555_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEdNPUBfbjY5RR3UQjpvFyf85sSW1pwAH7zmxJbWnAAfvPHke5Ky9kwJlimf7S-Y8zBIEFDkqeNgZ3mIk6uzshw&_nc_ohc=bqFQ3rdOLgsQ7kNvwEMFleT&_nc_oc=AdkxBLZj0sZQZuz6OUBAWAGIwEFKkKbdcfsaWOExz1QYXIwaQs_gTABNeNBQmHDrt4g&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=lKURGCXlMWCMZACtLq3Gyw&oh=00_AfMPZVf25djMHJCsbyH21oWOhDo7FMlBU5krFgtRUPzGqQ&oe=6846A9A9"},

      {type: "image", src:"https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494151055_9504517472918100_4966092305428778640_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEZyLQUzukX9CeYJoAzrihl2vmy0GxvUN3a-bLQbG9Q3VUp2ER1YqOnQ3f27T0sBhx4D3en9ut7cdp7UEdCSsMI&_nc_ohc=DPEM76tMSdgQ7kNvwHNfspQ&_nc_oc=Adk8c45vgI3W5bv0OnJXrPRp63CWMJ4VwNYpAFTaFxliTCqzibDdq-__s1HVN-D2q0s&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=la3Ij_-RkPc9fX0PViuUSg&oh=00_AfNTv8RDowHweZYqdQlKnlrh4PkA5VAIFUBboOo-wa2-SA&oe=6846BCDC"},

      {type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494182312_9504517552918092_4653512446013559411_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFbLzJw1nSI6MfhDHgGeibkvr01ea2T7Sm-vTV5rZPtKQpwFTvn74vO_A7wVsXSQTjwI6QDPo63-SGtrqmisjf2&_nc_ohc=k3sY4lH69YMQ7kNvwEOw9di&_nc_oc=AdlJUgK4KPHotax2_0tdG8Dtxo3gpY8vg6CK38wOlDi_bTvU4eSARJW8ovJzZEF3IXE&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=YQiqEHfJKj6Uj1CuBHuYLQ&oh=00_AfPbjp0HOxm1ykDa9h0dlgwv-GYaSZQSgPkl0HD4NEg_BA&oe=6846A1B2"},

      {type: "image", src:"https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495000103_9504517696251411_4418932899074781686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFnHxc0TOverVSKV0I2XPDjafFyXGybfeNp8XJcbJt941cNnlijAp1ACXQaIXGnpi9TIIIXetcYVjH6iEqtlKMH&_nc_ohc=gQH85Oi9nyoQ7kNvwHQYpRT&_nc_oc=AdmrUH99yZP7V4do5-dpITc8_3FI-FBQK2aplMrfstTeTmEkS8dWBC-rD69Q0xnaSF4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=oK8kzNfD6MTq2V2xJYtWsw&oh=00_AfMTFAAEXJ5wcYdURF8BqEiqISktdmgbESZK8z7yrfplWQ&oe=6846D00F"},
    ],
    alts: ["Community Support Initiative Launched" ],
    category: "General News",
  },

  

 
  {
    title: "Support Let's Complete Ansarul Islam School Building Project The foundation ",
    date: "November 10, 2024",
    description: "Support Let's Complete Ansarul Islam School Building Project The foundation in it's quest to support and empower communities, paid a courtesy call on Ansarul Islam School upon a request by the Proprietor Mallam Abdul Kadir Saeed.The visit was to discuss way forward of how to  complete a 3 floor storey building project that has begun but lack of funds has stall the project.The project if completed will not only provide a conducive environment for teaching and learning but also an avenue that will empower vulnerable kids acquire skills training ( Fashion Design) as empowerment centre.The group had the chance to tour the uncompleted facility with Management of Ansarul Islam School to ascertain the stage at which the project has stalled due to lack of funds.As part of Road 2 Jannah Foundation's commitment to resourcing ommunities through outreach projects, such issues is our main primary objective to know what challenges the communities we reach out to faces and solutions.You can support the project by donating building materials like Cement, Iron rods, Building Bricks, Sand, Woods, Tiles, Paints and Cash Amount.Road 2 Jannah Foundation is therefore calling on Organisations, Benovelent Donors, Individuals, Cooperate Institutions and NGO's to come support for completion of the project.",
media: [
      { type: "image", src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494181434_9504489126254268_2442689685172552270_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHZZNi2xQzoKqQDY0vT_oy2Qg6McvMfHYRCDoxy8x8dhD96ZmApZcO0qyw62AszL-10Gv-WvETYflqpH8_-neW1&_nc_ohc=GXjZUVmo5_8Q7kNvwE69krm&_nc_oc=AdlFmwN63RzIgwHOjgsJyYTFs5DeOVBRq7HQ20xkeH05lcbLfRS-NxHX03KLQPfERVQ&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=FTXMWDqdJPqCOhaVOgNFdQ&oh=00_AfPKTnL4A5d0iw6dEVBFd_rr7n1SuFewygHH_ymCoAPuxA&oe=6846BCC9", alt: "Ansarul Islam School Building Project 1" },

      
      { type: "image", src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494177522_9504489362920911_3865298929099160190_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF9h8BHUCNTRd63klOrBQIPNu5hBxZ051g27mEHFnTnWP6-PHpK8eycMR5ZeNcLmFV7zY5QZols10gnjcjSTm7j&_nc_ohc=0W_tVZ_nKc0Q7kNvwGi00R9&_nc_oc=AdledLGT6qqoBuScXxiLZTxYC7seKLCPmkEHdD7yPFoGvorpXRAp6Wac0EtqnSxJYi0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=FTXMWDqdJPqCOhaVOgNFdQ&oh=00_AfPZE7_RVdz5lL8gcGfsoG82QXS9Yu2km1phGkbPCcd3qA&oe=6846A9BC", alt: "Ansarul Islam School Building Project 1" },

      { type: "image", src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/493999312_9504489376254243_2085019419353406736_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF3iKiG3yPFjrV5nBRBjIM9QYVCvItAinZBhUK8i0CKdtspJly0rWGRedrziatWKt0MepFoddm79I5pHuxMuxNO&_nc_ohc=Jmkq0jcBJ6IQ7kNvwHJbrbY&_nc_oc=AdnRznPpSeD245J7sSbGocnZ_AuyODsDCXbEkWDv5vQpL9lZy2aVSy4wJoLJvMeD_a0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=zgrn1Yh6LD5huxD7OmsDWg&oh=00_AfMiPOFu1Q02ezDq5Kwna4BRnYS_aAWvaKr8r9eKaD5b7A&oe=6846C07C", alt: "Ansarul Islam School Building Project 1" },

      { type: "facebook-video", src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fkamaru.abdulai%2Fvideos%2F1361340251182245%2F%3Fidorvanity%3D546447259795391&show_text=false&width=560&t=0", alt: "Ansarul Islam School Building Project Video" },

      { type: "facebook-video", src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fkamaru.abdulai%2Fvideos%2F784488210441178%2F%3Fidorvanity%3D546447259795391&show_text=false&width=560&t=0", alt: "Ansarul Islam School Building Project Video" },
      { type: "facebook-video", src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fkamaru.abdulai%2Fvideos%2F460003833171642%2F%3Fidorvanity%3D546447259795391&show_text=false&width=560&t=0", alt: "Ansarul Islam School Building Project Video" },
    ],


    

    images: [
      "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494177522_9504489362920911_3865298929099160190_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF9h8BHUCNTRd63klOrBQIPNu5hBxZ051g27mEHFnTnWP6-PHpK8eycMR5ZeNcLmFV7zY5QZols10gnjcjSTm7j&_nc_ohc=0W_tVZ_nKc0Q7kNvwGi00R9&_nc_oc=AdledLGT6qqoBuScXxiLZTxYC7seKLCPmkEHdD7yPFoGvorpXRAp6Wac0EtqnSxJYi0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=RAfqK9dmtdURZ_gVbfhSFA&oh=00_AfPC0WJZBWcD4WkYIHjIlHLPvKzGTt6UCDKLzy4chIfGxA&oe=6846A9BC",
      "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494178444_9504489576254223_4992591757034677897_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEbTJGZamA95dmosLF9JZY832HvRwCrgMrfYe9HAKuAyhEDRNsqVlAwypGKhEgANt2RE2xBFzCdgos8bF95RVKK&_nc_ohc=KZW6IMovJdQQ7kNvwGZLLXs&_nc_oc=Adn_ZTFx9KVJAcyuXlGVHSfhccFNZhwARlQG7SGvO-Zizu5kGEYImrgmdxkd_rp6Tzw&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=jH2V1dLII5RhSU9Qm5aRvw&oh=00_AfOXS0svLIinbPv7swjYblJr2NhvDqz_jDdGaYl0BCj-_w&oe=6846D4EE",
      "https://web.facebook.com/share/v/15UFCHu9tD/",
      "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494199261_9504489379587576_7779029495125618099_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEk9UePhqQCJLW9cUqVCARYdpC3LolWRo92kLcuiVZGj20Scwi-NNFG3oSSxFijWbWMULKLmppa_Ba5Ja5Cyyxv&_nc_ohc=8xegiGeIOEAQ7kNvwHsPXzw&_nc_oc=AdlL3uBTIoQJBPwv4gGBeCNyPpG4vgti-rU9DT7QM98nm93OxIeOWI-G1UT9emaGp1s&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=7HXGLtuzNV2_H2bYIorGyA&oh=00_AfNBnjsPYiuvEoiq0bCP3Jeb-f9k2kazVJ6tp8tMm9zJ2g&oe=6846C034",
      "https://web.facebook.com/share/v/1DZceS1nAN/"
    ],
    alts: ["Educational Support Initiative Launched"],
    category: "Events",
  },
  
];

  const gallery = [
    { type: "image",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/496940432_9621165381253308_5638857211374510766_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHoD6FckslT8lnzbi9AlpdBjpzEvfjxzXiOnMS9-PHNeMh4K_3HXwUiu7SNAf2XaDR_-ElfTLd6ffp_xc6OGC-u&_nc_ohc=v6mAellPu4oQ7kNvwGECHJm&_nc_oc=AdmYrrfDSg88vKwtaP7Nj0Yb2Ej3vKQc_7wU-nb1BjdiCCcHUGSS-h9roBh8Ks--QbA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=ox7ZhqW_IttcmguMQDLHiA&oh=00_AfPUjuOfwBn_75z9uZt6r7mi06jYwyhXNYkgrNwEsel7Mw&oe=6847F384",
        alt: "support the transformation agenda of our education sector through outreach.", caption: "support the transformation agenda of our education sector through outreach." },

    { type: "video",
       src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1407430334023708%2F&show_text=false&width=267&t=0",

      
        alt: "Christian Atsu Education Complex*  orphanage Video",
         caption: "The annual *Phase 2 Community Outreach* is here again." },

    { type: "video",
       src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fhstvlivegh%2Fvideos%2F232057133267234%2F&show_text=false&width=560&t=0",

    
        alt: "",
         caption: "Ramadan altar." },

    { type: "album",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494590239_9497682393601608_5993532363464042678_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFG8JzjyICw8Yt2BJxuiySutbIkGp5DjUm1siQankONSRnRBXl9dHwhckmKXmnQsE29jWe1xzEjWjXVKO6sfYtB&_nc_ohc=zHe-vSZ_mk8Q7kNvwEdxQLT&_nc_oc=AdnSuTYUwUs8OxBdcKxmCWevKR8yO9MA7qEk1YJ3zU6cqr5KTypb1t41jpLGtibwcgs&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=Puj5gcSpNfXpgJHc1R3hlg&oh=00_AfN0XBO563ONKP5tmx-Qmk3IIDfF4tr7njmMGFDwYicnFg&oe=6847CEA3",
        alt: "RNFOCUS ON HEALTHY MORNING LIVE ON HSTV || 21/03/2024",
         caption: "RNFOCUS ON HEALTHY MORNING LIVE ON HSTV || 21/03/2024",
          items:
           [
            
            { type: "video", 
                src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fhstvlivegh%2Fvideos%2F232057133267234%2F&show_text=false&width=560&t=0",
                 alt: ""
              }, 

          
           
                ]
               },
    { type: "album",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494135333_9503102626392918_2278131271513998804_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFV31yFYOSEr4uDC_Nptrq6zSBa5RQEvS3NIFrlFAS9LSHtonfRoxCXQoCKiMxfIF4-kqwlYjp6u792dXl2RbdM&_nc_ohc=NlBf2EUE480Q7kNvwHm5sjI&_nc_oc=Adm32OMzOCSvgTqBKMPzibLKgzGANMkkMShodCIUXc20SWxEynxE12jR9QJYo6QIbv4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=tQ1gRnfb5KdX9Bn7oumyOQ&oh=00_AfNxMzHyz-Ei1gsUQDqI9ZmUlM3KREr4YkD-I9P5gLPcOA&oe=6847E0F1",
        alt: "Medwuma Pa Album",
         caption: "The Road 2 Jannah Foundation from New Bakpa made a stop at *Anyamam* in the Ada West District to donate to the affected tidal waves victims rendered homeless seeking shelter in churches and schools as part of the communities to reach out to.",
          items:
           [
            
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494135333_9503102626392918_2278131271513998804_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFV31yFYOSEr4uDC_Nptrq6zSBa5RQEvS3NIFrlFAS9LSHtonfRoxCXQoCKiMxfIF4-kqwlYjp6u792dXl2RbdM&_nc_ohc=NlBf2EUE480Q7kNvwHm5sjI&_nc_oc=Adm32OMzOCSvgTqBKMPzibLKgzGANMkkMShodCIUXc20SWxEynxE12jR9QJYo6QIbv4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=tQ1gRnfb5KdX9Bn7oumyOQ&oh=00_AfNxMzHyz-Ei1gsUQDqI9ZmUlM3KREr4YkD-I9P5gLPcOA&oe=6847E0F1",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494753965_9503102479726266_7784063683569608253_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHvq9MS_um_5hePj7FocWfXXv9gDSEDNDpe_2ANIQM0Og5Ilc0XWIk1GYg0t-PP6axUM8UL_fyFczetjnecJNY8&_nc_ohc=qNh6YWfZyj4Q7kNvwF7lDny&_nc_oc=Adl710XNV-wBWmdEdgCRTjYctRdtoXJKzViL2u6TfAh5QBZnZYlm_ImvHm--XpdilTY&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=V7zisK85aubh6TqmbCr8MA&oh=00_AfPFjiZCvhraOt6q2ZGheYdm3DqAOz4e9J2w8Nbh2CbUFg&oe=6847F47E",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495016068_9503102423059605_6915978106904892275_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFGVgwMP_Dl1n0HBcK7bftZTCSDmstyEsZMJIOay3ISxjDcac2WXRAZsSugpqVeCvw0xgNYHtujn1uKQ4PdlCi_&_nc_ohc=MkknYNEqg7MQ7kNvwGitWuJ&_nc_oc=AdkNcLTk4wMkO9SV_w8RefyXajOztPD7lY9kdEk0CCpT2oZZnShi05LWCb3eqc_LPJM&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=zM1dQt3-eyRdjybAPTz4Kg&oh=00_AfM4SgRXYC5Kx5XW3tuZ0rEIoHhqFfYYY8q0CK0noP6wOQ&oe=6847F017",
                 alt: ""
              }, 

            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494517444_9503102629726251_5712526822170111483_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHLsxnDmqvXHi6Z73xKaQ4qXLFSKJFwVXJcsVIokXBVcn6EJPBObWzEBAIW1ysHJ_2hgJpceD1j1VJ37gt_s0q0&_nc_ohc=OgcKpFoqYHQQ7kNvwGyOVLV&_nc_oc=AdkZEvHMgIUAaqqLAnd77IZxUHWP9SX9Jwo6tCS8R-4WWKf_-58hoyFFIetphjJxPbc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=9hxJu52d5IEZy-93Nbv3lw&oh=00_AfNlX5J5QqVkKUzKKYpxG28VooIXEC8SVHqh_2g13lOmtw&oe=6847E056",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495009617_9503102596392921_8259024072094532516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEkemfI62AKTtNHPevqvhDQes5uwdCRWGp6zm7B0JFYaqttlm3KI0ZTvnyKUhlkrR47N5kKcgOFqqY143Wt8CBY&_nc_ohc=ONkTmH0os_0Q7kNvwEzKK7j&_nc_oc=AdlVBpy1R6rLH3wXWSpNr_vrtH468GDyfCD_28WR9FK82Xews-Vq6oIzlSATN6S-8PU&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=ocXkqWClJtEtNoV7X0YqtQ&oh=00_AfPaUy3bebeXva5hxT56GlfEKLH5xnpFRI_rjBs1LscXIA&oe=68480442",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494283129_9503102446392936_8118175293162152504_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGFKmbqf9jifL6iYReBYt0zSCDOYFWl6l9IIM5gVaXqX8mW7Vnl-Yq1t1CBrBfW-oIg2e4ug42N8t1i5p6VV1jr&_nc_ohc=lsL78b1zbw4Q7kNvwG31HA1&_nc_oc=AdmW7ndsZSqpsgEZy0KNum6ff7-6i-Xk9GMIa7A_mFUI7Gm_Yz_iEdsdWPaQuE5b4f8&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mIw4ZXitKaJNthnAGETp7w&oh=00_AfMVQ801mYYtv01spknJggXUZWtwJkYpvlG2tDw7YhBOVw&oe=68480505",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494169659_9503102486392932_2462335850931146697_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFwcReRJ0hvlpFuuxH60-TaY5yX2fabPUdjnJfZ9ps9R0kArxdvXV9zfF3aKpKtM2uE4nilCrWekfFILdNZTz6F&_nc_ohc=kF1xrquhjn0Q7kNvwHbiGbg&_nc_oc=AdkA1DdPj2mN-4CdAZ1BMBdsPzj0qAVd9Pzy6FVnZXwkClcjw4LNmS0nQzGYE3TKTlo&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=BBsGW97DtW-INPreSZ5TnQ&oh=00_AfNQpxi4mP_l12p-YKQUEJlY4pkoo7lF0uesxxRXB0keLg&oe=684803D3",
                 alt: ""
              }, 

            
           
                ]
               },





    { type: "album",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494393000_9503124649724049_4257617064385671764_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG1LWE-_rud0uW5tmbZQm18cR2dX2gc4cxxHZ1faBzhzGLmuStPoX6MzT3UnzL1xTJ2RsPpZmqe1jKYOQwzFLAZ&_nc_ohc=qspJ79CzEXQQ7kNvwET18Ci&_nc_oc=AdkLrmvRTzXsUB5c1DeXTdmj6MBoizFyfbf7Bb7SIjcf_Re24U71f-JEmY12w-7j0ws&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=YvqLTxNofLslaaQ1D8QiNg&oh=00_AfMmlDFFUTAyCbiHFwWcpr6dxwfq6orVmUlwzExfXbOWEA&oe=6847FF36",
        alt: "National Chief Imam of Ghana and Executive Director Global of Road 2 Jannah Foundation a Happy Birthday",
         caption: "Road 2 Jannah Foundation is wishing His Eminence the National Chief Imam of Ghana and Executive Director Global of Road 2 Jannah Foundation a Happy Birthday..",
          items:
           [
            
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494393000_9503124649724049_4257617064385671764_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG1LWE-_rud0uW5tmbZQm18cR2dX2gc4cxxHZ1faBzhzGLmuStPoX6MzT3UnzL1xTJ2RsPpZmqe1jKYOQwzFLAZ&_nc_ohc=qspJ79CzEXQQ7kNvwET18Ci&_nc_oc=AdkLrmvRTzXsUB5c1DeXTdmj6MBoizFyfbf7Bb7SIjcf_Re24U71f-JEmY12w-7j0ws&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=YvqLTxNofLslaaQ1D8QiNg&oh=00_AfMmlDFFUTAyCbiHFwWcpr6dxwfq6orVmUlwzExfXbOWEA&oe=6847FF36",
                 alt: ""
              }, 

            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494923658_9503124796390701_1455003858732376690_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFVKCj55XrCGm-CAztFYbB-eJr0dTjV0QB4mvR1ONXRAAczu5bAqe-pzDoKgvEVZhiDOjmKHZ-Tun8aDcKoPEtG&_nc_ohc=kHsPXZBFY2kQ7kNvwHlN9Jl&_nc_oc=Admp3VnH6RzEnEXTTzkLOm-JolNshpYGn5DF63iaPZQojz1FCp0tDo6cOzscFfM2Ob0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=zGOww6ze3F2qnJ-iFoLkKQ&oh=00_AfPCYZuOawDrOrvOtTGlE4EHVT1JLrfyyYwA4MA51ifYxA&oe=6847D7AE",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494343087_9503124803057367_5043718598226346655_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFbClTfdYd8p4PvR03yZxq-b8G8ce9Sjfdvwbxx71KN99Vm2kPpLxjHp1sq5GsGVrDgyDSFEVTxe8FDfUYHh8WW&_nc_ohc=27cjzTFqHakQ7kNvwHfAO4c&_nc_oc=Adlz_QWueJK57geFzUXBtt4co2V3bgs2cwXx3D62etehDjSuF6C5n8uaXM6AZ5DxRLA&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=4ydJuSmtXOaZ5QDlebIGrw&oh=00_AfNxp756L4iON55_9On7-wUjYopiZJgsN1aEtY8dTijvtw&oe=6847E300",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494277390_9503124593057388_8768275341482599845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHya2lf3bqYhlqlYfT2VHwAg9LwzkKiGsCD0vDOQqIawE-4hlmgSuqjcQX9K8XGNS65t8U9LNg3TASZ8Ms_bW53&_nc_ohc=OdAs8qYQRQQQ7kNvwGMBIxQ&_nc_oc=AdmEq8QGys1dtBv7pGP5wXsDpx8ixUHQQgTgSFhvIPylvjzdWJjEoerf1m4fcibiY1s&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=bQge8qIgSxpc2sL1bFMdOQ&oh=00_AfNtsPToz8ja7RuIoP_t8uGPXekzJEgoZ_HK1lka45O00g&oe=6847F14C",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494579419_9503124783057369_1815019043885138402_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGa8z5H_MCRdkY92Nv_IkyuJ8bn4SvNNB4nxufhK800HpHZ1Qygr54ccbvk6G211h3dgVY-iR7A7zxHGj0ecbmK&_nc_ohc=HzevkixXh9wQ7kNvwG4VnYl&_nc_oc=Adk1bC-wIc1SE2mJ-VPqsqN8buihSBCvMcgsulro4Ta7Dgqmbi5B6ge_TMO3Cq_-sEk&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=rXBXEZQlHgwmHTH1gzAF1Q&oh=00_AfNnxIH1HNP7Jz0sQBeThzqUVeUMVfr6sNdaknmDQ-49wQ&oe=6847EBE1",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494574496_9503124919724022_2209823206993986920_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHjvjLrZ8-yR-HscXKr5KzWE9K7HzqB1AQT0rsfOoHUBIT5UWze6DinSuJCW-n2S07-GgIzxzGvof_pupv5lnYi&_nc_ohc=wrofENbLMNYQ7kNvwEvnR_6&_nc_oc=Adl59VNhwVSfRu28DyPEETups7blnH0KVl2cNntczeU1E792ls62tvA34YqjsFBk-0U&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=aUko_-PzxvsPT8cb9SbJYQ&oh=00_AfMdvGivvz9mgqeEGNO3DacypPHklHgpXqxZXBYCx5qc0w&oe=6847D3EB",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495051417_9503124703057377_2138629540715372558_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEwC23J2GpeDJQq741iKwRg4fsdFAAG8xXh-x0UAAbzFfXLOANSZXx6pirwXRQMwMEBPU08mCyPVqp8736Phhuf&_nc_ohc=1e_IyxkaM6cQ7kNvwF6A23k&_nc_oc=Adm0iL2N-wNRLF2Kt5WyH-qNA7zuJGsweCum4c2Zs9FOlFs-0LBZrybbLTqx7WVrsAQ&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=PlzwKG-O2Ku_zkf8KC8EOw&oh=00_AfM-hTMnkRyJox-NciJnctMsMFVxbwjaj8vyVz3GrIi78A&oe=6847F7BA",
                 alt: ""
              }, 
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494446410_9503124599724054_3146919772661986344_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFmKXxtMURUu2Fy414ayYlDtilRJnOUogG2KVEmc5SiAdCLP8tk69b5zgom-6Rh45fNgDuAm44W_QrvpWKart6r&_nc_ohc=-s4dKdf1TDMQ7kNvwEkfPD7&_nc_oc=AdnPd6rxXZnG94nsKuLYkjfeHzz2p-KnlHWLfwsqeUiVtsS6kwr8YKJlfCzz9_WnwJE&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=J3QXGbdGfstVnmWWea51AQ&oh=00_AfOWfi9c4DZKN7Uf7f26XimF1aX36vpFXjWndVxeveZGug&oe=6847F9EB",
                 alt: ""
              }, 

           
                ]
               },

    { type: "album",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494181434_9504489126254268_2442689685172552270_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHZZNi2xQzoKqQDY0vT_oy2Qg6McvMfHYRCDoxy8x8dhD96ZmApZcO0qyw62AszL-10Gv-WvETYflqpH8_-neW1&_nc_ohc=GXjZUVmo5_8Q7kNvwHzTYri&_nc_oc=AdlfL40Wf2QhpMWKJ3tIjbryBwOZhfy6AdBxTzT6aVdirjGHWDgoc6TPeMIWWxlasGg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=RVnuFwyyamL5eWUNLImtuw&oh=00_AfPhwmnFJGZwVLPe9Tc_CJ0494B4oGFZv041_kEHv8UvAA&oe=6847D609",
        alt: "Support Let's Complete Ansarul Islam School Building Project",
         caption: "Support Let's Complete Ansarul Islam School Building Project",
          items:
           [
            
            { type: "image", 
                src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494181434_9504489126254268_2442689685172552270_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHZZNi2xQzoKqQDY0vT_oy2Qg6McvMfHYRCDoxy8x8dhD96ZmApZcO0qyw62AszL-10Gv-WvETYflqpH8_-neW1&_nc_ohc=GXjZUVmo5_8Q7kNvwHzTYri&_nc_oc=AdlfL40Wf2QhpMWKJ3tIjbryBwOZhfy6AdBxTzT6aVdirjGHWDgoc6TPeMIWWxlasGg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=Kr66OPmPgUmYWZrldwDvXQ&oh=00_AfMR8uUrVR6Q9mcN7wJaDRHKWxhE-_4e-ABc5QHYdVltnw&oe=6847D609",
                 alt: ""
              }, 

            { type: "video", 
                src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fkamaru.abdulai%2Fvideos%2F7604774999630027%2F%3Fidorvanity%3D546447259795391&show_text=false&width=560&t=0",
                 alt: ""
              }, 
            { type: "video", 
                src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fkamaru.abdulai%2Fvideos%2F1117871999463009%2F%3Fidorvanity%3D546447259795391&show_text=false&width=560&t=0",
                 alt: "Medwuma Pa Training Video"
              }, 
            { type: "image", 
                src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494199261_9504489379587576_7779029495125618099_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEk9UePhqQCJLW9cUqVCARYdpC3LolWRo92kLcuiVZGj20Scwi-NNFG3oSSxFijWbWMULKLmppa_Ba5Ja5Cyyxv&_nc_ohc=8xegiGeIOEAQ7kNvwEc2BYz&_nc_oc=Adnw_y4-KpxIW_vicg8YdujQWrIU4PjbsruWREawVipddGvIuAym_LC1ke5SEbIrhIg&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=BFz07AW4P13B7x7sh--C_A&oh=00_AfN9BOctQFhLgE17QZiHUhHm00AjG_qb1oHOA-zIIU9ifw&oe=6847D974",
                 alt: ""
              }, 
            { type: "video", 
                src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fkamaru.abdulai%2Fvideos%2F460003833171642%2F%3Fidorvanity%3D546447259795391&show_text=false&width=560&t=0",
                 alt: "Medwuma Pa Training Video"
              }, 
           
                ]
               },

    { type: "album",
       src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494151275_9504517752918072_820146410886278808_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE1rCVTlFTq_YXdWhbXF7gzifpQWrOOiQaJ-lBas46JBhX5jOT4PtEewwT0WD0IfiNS_ZIqpwN0T7GloMnSo7qk&_nc_ohc=mKJAMeRr_wIQ7kNvwG9aAkb&_nc_oc=Adk9izQ3J-JB1ODgFQpi0TFLdjJXq9pW06F-wrb5dPSpt-0RnkP01PzazJgq3yrLHWc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=dowWGy-xWCg29b1Mdn8y-g&oh=00_AfL7kVh2udav217hQrnAptpZuiWrbh7Ch3sDZ8lgPEb6Rw&oe=68466226",
        alt: "The annual Ramadan Community Outreach PHASE 1 Project was a success courtesy your support, PHASE 2 Project hits us again with special request from the list of locations on the flyer.Help us in our quest to feed, support and maintain some selected Communities in Ghana.Send your donations to Account Name : Road 2 Jannah Foundation  Momo No: 0242524634 Merchant No : 0598555082  Cheques & Bank Transactions : Road 2 Jannah Foundation LBG Account No : 600024209865  Branch : SG Ghana, Lapaz Contact for further details 0242524634 / 0243457868 You And I Can Make A Change 🙇🏾‍♂️ Thank you", 
        caption: "The annual Ramadan Community Outreach PHASE 1 Project was a success courtesy your support",
       items: [
          {
             type: "image",
              src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494151275_9504517752918072_820146410886278808_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE1rCVTlFTq_YXdWhbXF7gzifpQWrOOiQaJ-lBas46JBhX5jOT4PtEewwT0WD0IfiNS_ZIqpwN0T7GloMnSo7qk&_nc_ohc=mKJAMeRr_wIQ7kNvwHx6pzm&_nc_oc=AdmnOiCihJ9Dkj_OW8wziUiDYbWXlRfUKFH4bnNza1RXn-xEUwR0bfUiwn1A9dHfi9I&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=3soGMgF9wR7GZ-IEsXVKJQ&oh=00_AfP-rm1b6w2UhI_-j7TQR11TR3gEjV_X6Z5dA8rdGfUxJw&oe=6847EBE6",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494153344_9504517542918093_8368326108722311213_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFv2aPtqSaMJBMAISLRFeaKRHMN1bfh6sdEcw3Vt-Hqx69zzF7lpUjnKFuSDfAOZQ53OYo4H_pWxRWHORlnR7zK&_nc_ohc=L9TpVfXE-FsQ7kNvwG0jvhi&_nc_oc=AdnVE0XvRp4lLbF7fldfBGoCXBjIfVfXlnjbsjULugj1QNrxjFl5gypoVEHl1nzqDAE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=mthSSjMutJKTnwYBMdTn9A&oh=00_AfN77IcddcYc1cdxeqP8G9ntHWk23htTfKsr8xPGd42E4A&oe=6847DE09",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494682138_9504517709584743_3642770257766948984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGdR9rIRiz7wCNFZ24H4MhP6rjMNI7R1FXquMw0jtHUVaanIdJjup_TbWR7f-IkGtjDempaGoEjU5ewCkwHwWxB&_nc_ohc=Y2LdEtuJTYkQ7kNvwHYEOvm&_nc_oc=Adkj1LHIDma1hLBjQJEm4dMScwmE437EgN2z-H_zKXTaA_fV6s-02Ki7WOqfplnelgA&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=BqXNMfEFngwS0dshxyRsdg&oh=00_AfO3jb6641UzKUs_9qrXy3nCc0BFKIy7lN_MDYf7OIHg6g&oe=6847CAB8",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494372307_9504517802918067_2073955733735018555_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEdNPUBfbjY5RR3UQjpvFyf85sSW1pwAH7zmxJbWnAAfvPHke5Ky9kwJlimf7S-Y8zBIEFDkqeNgZ3mIk6uzshw&_nc_ohc=bqFQ3rdOLgsQ7kNvwH4xPdp&_nc_oc=AdkNsJEmjodcp7PRTqSfer7aXWqWMKpOYls2sqXRpJu59CmEkGvAwVZVlp13dP3iCKc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=JPcdtrgu0TYQ8TDUHs6IzQ&oh=00_AfOLH5QeaZQaWskSMIaHeg3AjJdzgnbK-WYwrg-zPjrUeA&oe=6847FB29",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494151055_9504517472918100_4966092305428778640_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEZyLQUzukX9CeYJoAzrihl2vmy0GxvUN3a-bLQbG9Q3VUp2ER1YqOnQ3f27T0sBhx4D3en9ut7cdp7UEdCSsMI&_nc_ohc=DPEM76tMSdgQ7kNvwG1RWAz&_nc_oc=AdkTwpsS4R9TVyPjFHEK7JaNWBPvpQXwRTEVyL9Hux_DBIfsmRP_wUaTDvZmRMxPeJg&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=vGqMQvL9a0_NbkWfgC5sFg&oh=00_AfNIs0l5XA6bk-KQi6n3Ey2VT6vjz2ld8wz5sKWsU4He3w&oe=6847D61C",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494182312_9504517552918092_4653512446013559411_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFbLzJw1nSI6MfhDHgGeibkvr01ea2T7Sm-vTV5rZPtKQpwFTvn74vO_A7wVsXSQTjwI6QDPo63-SGtrqmisjf2&_nc_ohc=4fWoqcUa8KIQ7kNvwHkvQFj&_nc_oc=Admwg0NHgjp3jfDUwaacSFka9t005M1MQKu6r2spM_IDBL5o9D7dAJIh3X6vMD6RsH4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=RHc8xl0g1VN74kXweFgz1Q&oh=00_AfPhWUDg2L940TVwQS_OAK6eoZkCFXqp3Z4sX-10k0XRGg&oe=6847F332",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495000103_9504517696251411_4418932899074781686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFnHxc0TOverVSKV0I2XPDjafFyXGybfeNp8XJcbJt941cNnlijAp1ACXQaIXGnpi9TIIIXetcYVjH6iEqtlKMH&_nc_ohc=czkRzQq0E0gQ7kNvwHkaIP_&_nc_oc=AdkoXpH4TxDcvNiMv5Pgo2fuQpfFOG7IufXZvKQsQDNY3Ln8dEgDzRfpEWH3fi-aq04&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=ILhumfSV5REWUzDMUmBqBw&oh=00_AfOD1TNVW1uZwV0ZA7Kld9YLU6XS9geqgb02dcXDCFPSJg&oe=6847E94F",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494444581_9504517486251432_4470417429204014653_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFGIeWpTKEJmRNBxi3vuzl2xErCyxjl7cDESsLLGOXtwM4d14wQ_WIp2H0gQGb95k6ZHLLm7XC0t-jEBLGNoch0&_nc_ohc=Cr94obzth80Q7kNvwGFR8x5&_nc_oc=AdmU8zy8rKQ5cTyfP_J4mTS5y-uZWsS_gR-macYxSofzAIPx3sQ81gdW1wZTM_3tM98&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=tN_6lPGaloo-6wQyX6i49A&oh=00_AfO07Qnz_FqJNkGR8F7tDOXcNhhCzYHELXwci7yLGxpVUg&oe=6847D9C4",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494425888_9504517689584745_5125167910705400125_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeH54HjcNF3AFD-XwO6PH4kfII4--3eXPccgjj77d5c9x53Kj2xFu2CqZbnuEMdupsgIEGWRlCI3MQR8IpquNW9S&_nc_ohc=Fysqxg0Sh0AQ7kNvwGowLaI&_nc_oc=Adl3ebgiEERzZoqwDpyllStEyCeH3sLguKeFDa9RNJb74ArLbBQ6X1LJR04rDVveCi4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=m88ZF4Q8-j1_I57abocZfw&oh=00_AfNHoBE34p96RFgb6V-_-80NXoGHmgBr9v_cyE1z2l1aBA&oe=6847DBC7",
               alt: ""
               }, 
            
          ]  },

    { type: "album", 
      src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495461016_9592896200746893_7163327202326270463_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHhPgraJFCg8gPcLCfc_79ZrYIEbAC8kHatggRsALyQdrnPcqJDMRrGKk6CV_tuAKW0hkuAotkrJ5RUZnHnLIhU&_nc_ohc=BEbRsoQdpm8Q7kNvwHIq55h&_nc_oc=AdlbVZUD6nhPpJGAnUL4x3dcs-NFrBkPmTINqTtrYq4DDVqPkkOE6u3ebGSh8604Bgw&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ox7ZhqW_IttcmguMQDLHiA&oh=00_AfO81rohruCoM2zcUbjLA9IueJc54CnMZW7QUf2By7mTNA&oe=6847F505",
       alt: "Winter Aid Album", 
       caption: "R2J Pays Courtesy Call To RCO'24 Stakeholders ",
        items: [
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495461016_9592896200746893_7163327202326270463_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHhPgraJFCg8gPcLCfc_79ZrYIEbAC8kHatggRsALyQdrnPcqJDMRrGKk6CV_tuAKW0hkuAotkrJ5RUZnHnLIhU&_nc_ohc=BEbRsoQdpm8Q7kNvwHIq55h&_nc_oc=AdlbVZUD6nhPpJGAnUL4x3dcs-NFrBkPmTINqTtrYq4DDVqPkkOE6u3ebGSh8604Bgw&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ox7ZhqW_IttcmguMQDLHiA&oh=00_AfO81rohruCoM2zcUbjLA9IueJc54CnMZW7QUf2By7mTNA&oe=6847F505",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495856015_9593036517399528_7973012033177796404_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF9s2HMXtQ5tqrvQFcoHW3tzhbswQxN6qPOFuzBDE3qoyzUY_d6775ztpyZHxx0f8LCKFBx9Aunq93tnfCDHEpP&_nc_ohc=EC8M9Zh8TQsQ7kNvwEHjhT5&_nc_oc=AdkxjhnQPihLxeOfuiD7zaB_rEqPpdl38NCwQnPYQ88hGfDILsM_eiYDa4ThKAwNhUo&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ox7ZhqW_IttcmguMQDLHiA&oh=00_AfPoTkmlL3UGlNN0V05UAJdu_UOMy8GupOcKcYE7TQpzVw&oe=6847F5D7",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495806469_9593036530732860_6681287673732612863_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE8Mxe8zuoTvWCYVq9X5aVc59QOXlfT3Ezn1A5eV9PcTHUqJW8CbbYyKvbQC7dbClwtDE94aC3hp5riPzL-b1Mp&_nc_ohc=tJgrP_SOklgQ7kNvwF1xLcO&_nc_oc=AdnbkVln28ET6pN-cRUIgA7Ud4Ph3UjmaWHLbT-Q0bfvV-zXNUC1TrqBH9IazeNa_ds&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=ox7ZhqW_IttcmguMQDLHiA&oh=00_AfOCqMfFE16-0Isbo_yPlI9zh6Bxjo0IPZBAYr7rvyMVuw&oe=6847E40D",
               alt: ""
               }, 
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/495805064_9593036577399522_5771634513842279882_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGv55-pnqtp2Wk21L5lIBqr1-OHQuHVO0HX44dC4dU7Qa2Nf0vU_ZIw9_VvwPK0Ik0X5ppZHwbJZIjJBaDQhhRz&_nc_ohc=fO4p5qA7dncQ7kNvwH5hTOX&_nc_oc=Adl1KLCYGYlfScBDXbJWJhfzlANthzHju78h5LLu9kDpvTUOXfTuV_o5qXC-DIRWJ5w&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=9IneI8tVDebmyoJUrF2y6Q&oh=00_AfMSEOWLbcf7v6LlhrWrFqVNxNTFb__lW0PuJGPBfHgFFA&oe=6847E741",
               alt: ""
               }, 
          
          {
             type: "image",
              src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/496254434_9593036554066191_1275625130246270772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEGktLm3r1jLtFraVbgzP0rcx-KM9PLiaxzH4oz08uJrOM9S1GJ_ux7Dn6h8ccySfwVD3J5Lghzp5QEhaU4H70x&_nc_ohc=ElO7RdO7mF8Q7kNvwEd9tkc&_nc_oc=AdkmEv6p_Qozit5TVTecy2BW_bhtUfBwu6zJg-T_BAmNdx1UaNHvyNMG9c_u0VP7qE0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=O4EVqpgOSYJJBphDEXviaw&oh=00_AfN6LbKSybMpg5NN-sJVvqbibrhU8gUgHEX8cJaJXbGl0A&oe=6847D455",
               alt: ""
               }, 
          
      
          ] 
        },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderNav />
      <HeroCarousel />
        <About />
      <Focus />
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

      <FAQ />
      <Footer />
    </div>
  );
}

export default App;