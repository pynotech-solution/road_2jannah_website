import { useState } from 'react';
import { motion } from 'framer-motion';
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
        const offset = 80; // Adjust based on navbar height (~64px for py-2 + padding)
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // const mottoVariants = {
  //   hidden: { opacity: 0, width: 0 },
  //   visible: { opacity: 1, width: 'auto', transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
  // };

  return (
    <nav className="bg-teal-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
        <div className="flex flex-col items-start">

          <img src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036910/472206263_8807425239293997_4094478365450783416_n_xeyctj.jpg" alt="" />
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl md:text-2xl font-bold hover:text-teal-200"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            Road2Jannah Foundation
          </motion.a>
          {/* <motion.p
            className="text-sm md:text-base text-teal-100 italic font-light"
            initial="hidden"
            animate="visible"
            variants={mottoVariants}
          >
            Resourcing the Communities Through Outreach
          </motion.p> */}
        </div>
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