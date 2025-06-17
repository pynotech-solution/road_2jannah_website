import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

function Nav_Con() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80;
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <nav className="bg-teal-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo + Typing Motto */}
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-teal-200"
            variants={itemVariants}
          >
            Road2Jannah Foundation
          </motion.a>

          <motion.p
            className="text-sm md:text-base text-teal-100 italic font-light mt-1"
            variants={itemVariants}
          >
            <Typewriter
              words={['Resourcing the Communities Through Outreach']}
              loop={0} // or use loop={Infinity} for infinite
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.p>
        </motion.div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-teal-800 md:bg-transparent p-4 md:p-0`}
        >
          {['home', 'about', 'programs', 'gallery', 'news', 'donate', 'faq', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="block py-2 md:py-0 hover:text-teal-200 capitalize"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav_Con;