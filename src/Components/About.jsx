import { useState } from 'react';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = [
    "Road2Jannah Foundation is dedicated to glorifying Allah (SWT) by uplifting vulnerable communities across the globe. Established with a vision to provide hope and support, we focus on initiatives that address poverty, education, and healthcare, ensuring that every individual has the opportunity to thrive. Our work is rooted in the principles of compassion, generosity, and faith, inspired by the teachings of Islam.",
    "Through programs like Ramadan Community Outreach, Medwuma Pa Empowerment, and Shave or Braid the Orphan, we have reached thousands of families with essential resources, skills training, and acts of kindness. Our team collaborates with local leaders and volunteers to create sustainable solutions, fostering self-reliance and community strength. Every donation and effort helps us build a brighter future for those in need.",
    "We believe that small acts of charity can create a ripple effect of positive change. Whether it’s providing iftar meals during Ramadan or empowering women with vocational skills, our mission is to serve humanity and reflect the values of unity and care. Join us on this journey to make a difference and support the path to Jannah for all."
  ];

  const previewText = fullText[0].slice(0, 450) + "..."; // First 150 characters of the first paragraph

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">About Us</h2>
      <div className="border-t border-teal-800 w-16 mx-auto mb-6"></div>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            {isExpanded ? (
              <>
                {fullText.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </>
            ) : (
              previewText
            )}
          </p>
          <button
            onClick={toggleText}
            className="mt-4 text-teal-800 font-semibold hover:text-teal-600 transition-colors"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
            alt="About Us Community Support"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;