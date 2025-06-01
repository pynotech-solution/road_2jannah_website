import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import Program from './components/Program.jsx';
import GalleryItem from './components/GalleryItem.jsx';
import NewsItem from './components/NewsItem.jsx';
import Footer from './components/Footer.jsx';
import HeaderNav from './components/HeaderNav.jsx';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <HeaderNav />
      <HeroCarousel />
      <div id="programs" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Our Programs</h2>
        <Program
          title="Ramadan Community Outreach"
          description="During the holy month of Ramadan, we provide iftar meals, essential grains, and support to 1,000 families, ensuring no one goes hungry. Our efforts focus on widows, orphans, and refugees, reflecting the Quranic call to feed the needy (Quran 76:8-9)."
          donateText="Donate to Ramadan Outreach"
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
          alt="Ramadan Community Outreach"
        />
        <Program
          title='Medwuma Pa "Community Empowerment Outreach"'
          description='Medwuma Pa, meaning "Good Work" in Akan, supports sustainable livelihoods by providing small grants and business training to women in rural communities. We empower them to lead their households and break the cycle of poverty.'
          donateText="Support Community Empowerment"
          image="https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
          alt="Medwuma Pa Empowerment"
        />
        <Program
          title="Shave or Braid the Orphan"
          description="This unique initiative offers free haircuts and braiding services to orphans, fostering dignity and care. By meeting their personal needs, we show love and support, helping them feel valued in their communities."
          donateText="Help an Orphan"
          image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
          alt="Shave or Braid the Orphan"
        />
      </div>
      <div id="gallery" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Our Impact in Photos</h2>
        <p className="text-center text-gray-700 mb-6">See the difference your donations make in the lives of those we serve.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GalleryItem
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Ramadan Iftar Distribution"
            caption="Distributing iftar meals to families during Ramadan."
          />
          <GalleryItem
            src="https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Medwuma Pa Training"
            caption="Empowering women with business skills in Medwuma Pa."
          />
          <GalleryItem
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Shave or Braid the Orphan"
            caption="Bringing smiles to orphans with free haircuts and braiding."
          />
          <GalleryItem
            src="https://images.unsplash.com/photo-1532629345-2e0b60e33f08?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Community Support"
            caption="Delivering essential supplies to rural communities."
          />
        </div>
      </div>
      <div id="news" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Latest News</h2>
        <p className="text-center text-gray-700 mb-6">Stay updated with our recent activities and impact.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsItem
            title="Ramadan 2025 Iftar Campaign Reaches 1,000 Families"
            date="April 15, 2025"
            description="Our Ramadan Community Outreach successfully distributed iftar meals and essential supplies to 1,000 families across rural communities, bringing joy and relief during the holy month."
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Ramadan Iftar Campaign"
          />
          <NewsItem
            title="Medwuma Pa Empowers 50 Women with New Skills"
            date="March 20, 2025"
            description="Through our Medwuma Pa program, 50 women completed business training and received grants to start their own ventures, fostering sustainable livelihoods."
            image="https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Medwuma Pa Training"
          />
          <NewsItem
            title="Shave or Braid Brings Smiles to 100 Orphans"
            date="February 10, 2025"
            description="Our Shave or Braid the Orphan initiative provided free haircuts and braiding to 100 children, spreading love and dignity in local communities."
            image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
            alt="Shave or Braid Event"
          />
        </div>
      </div>
      <div id="about" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">About Us</h2>
        <p className="text-gray-700 text-center">Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities through charity and empowerment. Guided by Islamic values, we focus on orphans, widows, and rural families, providing sustainable support to help them thrive. Our mission aligns with the Hadith: “The best among you are those who bring greatest benefits to others.”</p>
      </div>
      <div id="donate" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Donate Now</h2>
        <p className="text-gray-700 text-center mb-6">Your generous contributions help us provide food, empowerment, and care to those in need. Join us in fulfilling the spirit of Sadaqah and Fidyah, making a lasting impact.</p>
        <div className="text-center">
          <a href="https://www.example.com/donate" className="bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700">Make a Donation</a>
        </div>
      </div>
      <div id="contact" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-700">Email: info@road2jannah.org</p>
        <p className="text-center text-gray-700">Phone: +233 241 814 030</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com/road2jannah" target="_blank" className="text-teal-800 hover:underline">Facebook</a>
          <a href="https://twitter.com/road2jannah" target="_blank" className="text-teal-800 hover:underline">Twitter</a>
          <a href="https://instagram.com/road2jannah" target="_blank" className="text-teal-800 hover:underline">Instagram</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;