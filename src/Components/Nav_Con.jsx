import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Nav_Con() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80; // Adjust based on navbar height (~64px for py-4 + padding)
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-teal-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl md:text-2xl font-bold hover:text-teal-200"
        >
          Road2Jannah Foundation
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-teal-800 md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#programs"
              onClick={(e) => handleNavClick(e, 'programs')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, 'gallery')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#news"
              onClick={(e) => handleNavClick(e, 'news')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#donate"
              onClick={(e) => handleNavClick(e, 'donate')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              Donate
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block py-2 md:py-0 hover:text-teal-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav_Con;