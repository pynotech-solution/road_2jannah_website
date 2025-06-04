import { Mail, Phone, MapPin } from 'lucide-react';

function Contact({ openContactModal }) {
  return (
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
  );
}

export default Contact;