import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function Contact({ openContactModal }) {
  return (
    <div id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="relative bg-cover bg-center h-64 mb-8 mx-auto" style={{ backgroundImage: 'url("https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/472206263_8807425239293997_4094478365450783416_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFgYvaMkYwsdtWa3NtNCa2UEYhCQPwVae0RiEJA_BVp7W2KnehFDQ-xDrdjeeJYwmeTeIUkk1kh6XXtX6kQj77A&_nc_ohc=YIIHG1fnkR8Q7kNvwFjn1az&_nc_oc=AdnRXB9S43YGY7OpYAL9jkFSc4SyPyoT7YYdol86kKdhWjYQPn_B499xmUSCKG27w5s&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=fxU3XFUpd-XqW7yN0oDf6Q&oh=00_AfPTBbFkXAPBO0jqhDX2t7_TLPloJDHJVlVYKclQgiFfEQ&oe=6847E339")' }}>
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
                Phone: <a href="tel:+233241814030" className="text-teal-800 hover:text-teal-600 transition duration-300">+233 241 814 030</a>
              </p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-teal-800 mr-3 mt-1" />
              <p className="text-gray-700 text-lg">Address: Accra, Ghana</p>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://facebook.com/road2jannah"
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
                href="https://instagram.com/road2jannah"
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

export default Contact;