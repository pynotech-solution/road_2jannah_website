import { useState } from 'react';

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-teal-800 text-white">
      <div className="container mx-auto flex flex-row items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="text-2xl font-bold">
            {/* Placeholder logo; replace with actual image */}
            <span>R2J Foundation</span>
            {/* Uncomment and update with actual logo image when available */}
            {/* <img src="/images/logo.png" alt="Road2Jannah Logo" className="h-10" /> */}
          </a>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">Home</a>
          <a href="#programs" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">Programs</a>
          <a href="#gallery" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">Gallery</a>
          <a href="#news" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">News</a>
          <a href="#about" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">About Us</a>
          <a href="#donate" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">Donate</a>
          <a href="#contact" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200">Contact</a>
        </nav>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-teal-700 py-4">
          <div className="container mx-auto flex flex-col items-center space-y-4">
            <a href="#home" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>Home</a>
            <a href="#programs" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>Programs</a>
            <a href="#gallery" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>Gallery</a>
            <a href="#news" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>News</a>
            <a href="#about" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>About Us</a>
            <a href="#donate" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>Donate</a>
            <a href="#contact" className="text-lg hover:bg-teal-600 hover:rounded px-2 py-1 transition duration-200" onClick={toggleMenu}>Contact</a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default HeaderNav;