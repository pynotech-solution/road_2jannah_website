import { useState } from 'react';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullText = [
    "Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities across the globe. Established with a vision to provide hope and support, we focus on initiatives that address poverty, education, and healthcare, ensuring that every individual has the opportunity to thrive. Our work is rooted in the principles of compassion, generosity, and faith, inspired by the teachings of Islam.",
    "Through programs like Ramadan Community Outreach, Medwuma Pa Empowerment, and Shave or Braid the Orphan, we have reached thousands of families with essential resources, skills training, and acts of kindness. Our team collaborates with local leaders and volunteers to create sustainable solutions, fostering self-reliance and community strength. Every donation and effort helps us build a brighter future for those in need.",
    "We believe that small acts of charity can create a ripple effect of positive change. Whether it’s providing iftar meals during Ramadan or empowering women with vocational skills, our mission is to serve humanity and reflect the values of unity and care. Join us on this journey to make a difference and support the path to Jannah for all."
  ];

  const previewText = fullText[0].slice(0, 150) + "...";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <article id="about" className="container mx-auto py-8 sm:py-12 px-4 max-w-5xl">
      <header className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-800 mb-4">About Us</h2>
        <div className="border-t-4 border-teal-800 w-20 sm:w-24 mx-auto"></div>
      </header>
      <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="prose prose-base sm:prose-lg text-gray-700 flex flex-col justify-between h-64 sm:h-80">
            <p className="leading-relaxed flex-grow">{previewText}</p>
            <button
              onClick={toggleModal}
              className="mt-4 inline-block text-teal-800 font-semibold hover:text-teal-600 transition-colors duration-200 border-b-2 border-teal-800 hover:border-teal-600"
            >
              Read More
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Community Support"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[90vw] sm:max-w-3xl mx-4 p-6 sm:p-8 md:p-10 relative max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
            >
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
            <div className="prose prose-base sm:prose-lg text-gray-800">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-teal-800 mb-4 sm:mb-6 text-center tracking-tight">
                About Road2Jannah Foundation
              </h3>
              <div className="border-t-2 border-teal-800 w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
              <div className="mb-4 sm:mb-6 flex items-start">
                <img
                  src="https://images.unsplash.com/photo-1516321310762-4794370e6a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                  alt="Community Hope"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md shadow-md float-right ml-3 sm:ml-4 mt-1"
                />
                <p className="leading-relaxed text-justify sm:first-letter:text-4xl sm:first-letter:font-bold sm:first-letter:text-teal-800 sm:first-letter:float-left sm:first-letter:mr-2">
                  {fullText[0]}
                </p>
              </div>
              <div className="my-6 sm:my-8">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Community Outreach"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md mx-auto"
                />
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 italic">
                  Empowering through outreach and kindness
                </p>
              </div>
              <p className="leading-relaxed text-justify mb-4 sm:mb-6">
                {fullText[1]}
              </p>
              <div className="mb-4 sm:mb-6 flex items-start">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                  alt="Community Unity"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md shadow-md float-left mr-3 sm:mr-4 mt-1"
                />
                <p className="leading-relaxed text-justify">
                  {fullText[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default About;