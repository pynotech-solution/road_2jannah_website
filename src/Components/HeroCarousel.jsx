import { useState, useEffect } from 'react';

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400',
      title: 'Ramadan Community Outreach',
      description: 'Providing iftar meals and support to 1,000 families during Ramadan.',
      buttonText: 'Support Ramadan',
    },
    {
      image: 'https://images.unsplash.com/photo-1529390079861-0edd4c12bf9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400',
      title: 'Medwuma Pa Empowerment',
      description: 'Empowering women with grants and training for sustainable livelihoods.',
      buttonText: 'Empower Communities',
    },
    {
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400',
      title: 'Shave or Braid the Orphan',
      description: 'Bringing dignity to orphans with free haircuts and braiding.',
      buttonText: 'Help Orphans',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id="home" className="relative w-full h-96">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
            <h2 className="text-3xl font-semibold mb-4">{slide.title}</h2>
            <p className="text-xl mb-6">{slide.description}</p>
            <a
              href="#donate"
              className="bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-800 text-white p-2 rounded-full hover:bg-teal-700"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-800 text-white p-2 rounded-full hover:bg-teal-700"
      >
        →
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-teal-600' : 'bg-teal-400'
            } hover:bg-teal-500`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;