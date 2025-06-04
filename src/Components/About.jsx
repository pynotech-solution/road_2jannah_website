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
    <article id="about" className="container mx-auto py-12 px-4 max-w-5xl">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-teal-800 mb-4">About Us</h2>
        <div className="border-t-4 border-teal-800 w-20 mx-auto"></div>
      </header>
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="prose prose-lg text-gray-700 flex flex-col justify-between h-80">
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
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 p-10 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg
                className="w-8 h-8"
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
            <div className="prose prose-lg text-gray-800">
              <h3 className="text-3xl font-serif font-bold text-teal-800 mb-6 text-center tracking-tight">
                About Road2Jannah Foundation
              </h3>
              <div className="border-t-2 border-teal-800 w-24 mx-auto mb-8"></div>
              <p className="leading-relaxed text-justify mb-6">
                {fullText[0]}
              </p>
              <div className="my-8">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Community Support"
                  className="w-full h-64 object-cover rounded-lg shadow-md mx-auto"
                />
                <p className="text-sm text-gray-500 text-center mt-2 italic">
                  Supporting communities with compassion and care
                </p>
              </div>
              <p className="leading-relaxed text-justify mb-6">
                {fullText[1]}
              </p>
              <p className="leading-relaxed text-justify">
                {fullText[2]}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default About;