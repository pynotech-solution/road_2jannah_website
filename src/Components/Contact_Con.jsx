import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function Contact_Con({ openContactModal }) {
  return (
    <div id="contact" className="py-12">
      <div className="container mx-auto sm:px-4 px-0">
        <div className="relative bg-cover bg-center h-64 mb-8 mx-auto" style={{ backgroundImage: 'https://i.ibb.co/Rk8XfyCy/image.png' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mx-auto">
          <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Get in Touch</h2>
          <p className="text-gray-700 text-lg mb-6 text-center">We’d love to hear from you! Reach out to us directly to share your thoughts, inquiries, or feedback.</p>
          <button
            onClick={openContactModal}
            className="bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300 block mx-auto mb-8"
          >
            Send Direct Message
          </button>
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-teal-800 mr-3 mt-1" />
              <p className="text-gray-700 text-lg">
                Email: <a href="mailto:info@road2jannah.org" className="text-teal-800 hover:text-teal-600 transition duration-300">info@road2jannah.org</a>
              </p>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-teal-800 mr-3 mt-1" />
              <p className="text-gray-700 text-lg">
                Phone: <a href="tel:+233242524634" className="text-teal-800 hover:text-teal-600 transition duration-300">+233 242 524 634</a>
              </p>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-teal-800 mr-3 mt-1" />
              <p className="text-gray-700 text-lg">
                Phone: <a href="tel:+233243457868" className="text-teal-800 hover:text-teal-600 transition duration-300">+233 243 457 868</a>
              </p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-teal-800 mr-3 mt-1" />
              <p className="text-gray-700 text-lg">Address: Accra, Ghana</p>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://web.facebook.com/share/g/1AfLiVRSXB/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-teal-800 hover:text-teal-600 transition duration-300 hover:scale-110 flex items-center"
              >
                <Facebook className="w-6 h-6 mr-2 group-hover:text-[#1877F2] transition duration-300" />
                Facebook
              </a>
              <a
                href="https://twitter.com/road2jannah"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-teal-800 hover:text-teal-600 transition duration-300 hover:scale-110 flex items-center"
              >
                <Twitter className="w-6 h-6 mr-2 group-hover:text-[#1DA1F2] transition duration-300" />
                Twitter
              </a>
              <a
                href="https://www.instagram.com/r2joutreach22?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group text-teal-800 hover:text-teal-600 transition duration-300 hover:scale-110 flex items-center"
              >
                <Instagram className="w-6 h-6 mr-2 group-hover:text-[#E1306C] transition duration-300" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Con