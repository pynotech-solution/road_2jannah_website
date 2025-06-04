import { useState } from 'react';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = [
    "Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities across the globe. Established with a vision to provide hope and support, we focus on initiatives that address poverty, education, and healthcare, ensuring that every individual has the opportunity to thrive. Our work is rooted in the principles of compassion, generosity, and faith, inspired by the teachings of Islam.",
    "Through programs like Ramadan Community Outreach, Medwuma Pa Empowerment, and Shave or Braid the Orphan, we have reached thousands of families with essential resources, skills training, and acts of kindness. Our team collaborates with local leaders and volunteers to create sustainable solutions, fostering self-reliance and community strength. Every donation and effort helps us build a brighter future for those in need.",
    "We believe that small acts of charity can create a ripple effect of positive change. Whether it’s providing iftar meals during Ramadan or empowering women with vocational skills, our mission is to serve humanity and reflect the values of unity and care. Join us on this journey to make a difference and support the path to Jannah for all."
  ];

  const previewText = fullText[0].slice(0, 150) + "...";

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article id="about" className="container mx-auto py-12 px-4 max-w-4xl">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-teal-800 mb-4">About Us</h2>
        <div className="border-t-4 border-teal-800 w-20 mx-auto"></div>
      </header>
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="prose prose-lg text-gray-700 mx-auto">
          <p className="leading-relaxed">
            {isExpanded ? fullText[0] : previewText}
          </p>
          {isExpanded && (
            <>
              <div className="my-8">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Community Support"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="leading-relaxed mt-6">
                {fullText[1]}
              </p>
              <p className="leading-relaxed mt-6">
                {fullText[2]}
              </p>
            </>
          )}
          <button
            onClick={toggleText}
            className="mt-6 inline-block text-teal-800 font-semibold hover:text-teal-600 transition-colors duration-200 border-b-2 border-teal-800 hover:border-teal-600"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
    </article>
  );
}

export default About;