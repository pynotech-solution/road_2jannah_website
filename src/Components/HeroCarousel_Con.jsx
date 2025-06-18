import { useState, useEffect } from 'react';
import { slides } from '../PageData/data';

function HeroCarousel_Con() {
  const [currentSlide, setCurrentSlide] = useState(0);

 

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
    <div id="home" className="relative w-full h-96 max-w-[1800px] mx-auto overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500  w-full h-full ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
       style={{
  backgroundImage: `url(${slide.image})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
}}
        >
          <div className="flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
            <h2 className="text-[1.3rem] md:text-3xl font-semibold mb-4 text-center">{slide.title}</h2>
            <p className="sm:text-xl font-semibold text-center mb-6">{slide.description}</p>
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
        className="absolute left-4 top-[80%] transform -translate-y-[80%] bg-teal-800 text-white p-2 rounded-full hover:bg-teal-700"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-[80%] transform -translate-y-1/2 bg-teal-800 text-white p-2 rounded-full hover:bg-teal-700"
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

export default HeroCarousel_Con