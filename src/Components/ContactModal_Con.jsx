import { useState } from 'react';

function ContactModal_Con({ isContactModalOpen, closeContactModal }) {
  if (!isContactModalOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeContactModal();
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeContactModal();
    }, 5000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-lg w-full mx-2 sm:mx-4 relative" onClick={(e) => e.stopPropagation()}>
         <div className="flex justify-end cursor-pointer mb-3">
         <button onClick={closeContactModal} className=" top-2 right-2 text-white bg-red-500 hover:bg-red-700 hover:scale-110 transition duration-300 text-xl">
           <svg
                className="w-6 sm:w-8 h-6 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
        </button>
     </div>
        <h2 className="text-xl sm:text-2xl font-bold text-teal-800 mb-4 sm:mb-6 text-center">Send Us a Message</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold text-sm sm:text-base mb-2">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold text-sm sm:text-base mb-2">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold text-sm sm:text-base mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold text-sm sm:text-base mb-2">Message *</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-800 text-white py-2 sm:py-3 rounded-md hover:bg-teal-700 transition duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-teal-800 font-semibold text-lg sm:text-xl mb-4">Thank you for your message!</p>
            <p className="text-gray-600 text-sm sm:text-base">We will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactModal_Con;