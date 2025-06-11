import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mission Statement</h3>
            <p className="text-gray-700">
              Our Mission is to prevent and alleviate the increasing rate of vulnerability in society.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Vision Statement</h3>
            <p className="text-gray-700">
              Our Vision is to make the community a place of hope and transform lives through community outreach programmes.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
          <ul className="text-left max-w-2xl mx-auto space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 text-green-600">•</span>
              <span>
                <strong>Compassion</strong>: We treat communities with sensitivity and empathy.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600">•</span>
              <span>
                <strong>Accountability</strong>: We believe in transparency and promote organisational responsibilities.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600">•</span>
              <span>
                <strong>Respect</strong>: We honour the dignity of our communities and membership.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600">•</span>
              <span>
                <strong>Empowering</strong>: We create an environment for individuals to make confident decisions to help build a better community.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;