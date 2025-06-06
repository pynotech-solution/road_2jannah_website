import { useState, useEffect } from 'react';
import Nav from './Nav';

function HeroCarousel_Con() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/493544405_9489761114393736_4391759523238548369_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=536f4a&_nc_eui2=AeEK70-7WWAUULp7f_7WGpwC4znxrjt9HGHjOfGuO30cYe6ZyEFnQnH0UOSbZE9azt1MDEdp0ZNpGoThqilDQcbt&_nc_ohc=k6h3iwS5zNYQ7kNvwEdvd-Z&_nc_oc=Adl4P17dO4XQo-q5a2JMOS9TF-f8_82ArEhbj1-TOjRlvZrivk3fuz43jd60teCqt6s&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=t5-iizum22jx2vJcDWN_lA&oh=00_AfLHM_e1-DfJVuOzq1oVLJx4sh_ycvAyHHBqzwPAKADNDQ&oe=68466507',
      title: 'Ramadan Community Outreach',
      description: 'Providing iftar meals and support to 1,000 families during Ramadan.',
      buttonText: 'Support Ramadan',
    },
    {
      image: 'https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/495999213_9593036607399519_5885767734663083777_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG2pw_erM2iZynF8OMrhMOCO99dUChzC6M7311QKHMLo7z0M_D8NUVQMHsZk1U6btO07TGHNxEXRTVEhtJWX3f7&_nc_ohc=6P5OAtq1lJkQ7kNvwE_kBPC&_nc_oc=AdmoALmuTb-vmNOFNpB61I7uWFLZ_gQ1_BRHDBAdamb64VEj0bMXUhRjHD0oQ3cipsQ&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=_LSbHI4QFUuyLj-10smrhA&oh=00_AfJHiUcQDv1FBePp5R5ILabveLc16RCVmBqPH0f1QpBWhQ&oe=68466146',
      title: 'Medwuma Pa Empowerment',
      description: 'Empowering women with grants and training for sustainable livelihoods.',
      buttonText: 'Empower Communities',
    },
    {
      image: 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/494171396_9503102649726249_4138975646496756975_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFZeIFloWfkk_CxG9_tICyZA6Ap4iufOYoDoCniK585inM_M_w99qlsoy0DAIHiehqeRtVwaDKJGWdNZ-udbmtf&_nc_ohc=BnSSv-NFyNcQ7kNvwG8stHQ&_nc_oc=AdmqOs7Pr5Z2Yi3ppK6ZbNoWlF4CtYKHK2hDgjF6ZVEzQkJoEA7-JcDV3zdPqOEC8WY&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=o6WGuMWbBgSZE5d3HflBSQ&oh=00_AfKs0lHKBMsLzC8arrTFkEjqOWxmFeleKybm0IoU7gkdFQ&oe=684660CD',
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

export default HeroCarousel_Con