// Eugene Afriyie UEB3502023

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Enhanced typewriter hook
function useTypewriterSequence(sequence, speed = 50, pause = 1500) {
  const [index, setIndex] = useState(0);        // current character
  const [textIndex, setTextIndex] = useState(0); // current string
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;

    if (textIndex < sequence.length) {
      const text = sequence[textIndex];
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setDisplayed('');
          setIndex(0);
          setTextIndex((prev) => (prev + 1) % sequence.length);
        }, pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, textIndex, sequence, speed, pause]);

  useEffect(() => {
    setDone(displayed.length === sequence[textIndex].length);
  }, [displayed, textIndex, sequence]);

  return [displayed, textIndex, done];
}

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
        const offset = 80;
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Typewriter Logic
  const [nameText, nameIndex, nameDone] = useTypewriterSequence(['Road2Jannah Foundation'], 70, 2000);
  const [mottoText, ,] = useTypewriterSequence(
    nameDone ? ['Resourcing the Communities Through Outreach'] : [''],
    60,
    2000
  );

  return (
    <nav className="bg-teal-800 text-white sticky top-1 z-50 max-w-[1800px] mx-auto">
      <div className="containe mx-auto px-4 sm:px-4 lg:px-10 py-2 flex justify-between items-center gap-4">

        <div className="flex gap-2 items-start">
          <img 
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036910/472206263_8807425239293997_4094478365450783416_n_xeyctj.jpg"
            alt="road3jannah logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2"
            loading="lazy"
          />

          <div className="whitespace-nowrap flex flex-col justify-center gap-1">
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-[.8rem] md:text-[.9rem] font-bold hover:text-teal-200"
              initial="hidden"
              animate="visible"
              variants={logoVariants}
            >
              {nameText}
            </motion.a>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={logoVariants}
              className="text-[.6rem] md:text-[] lg:text-sm text-teal-100 italic font-light"
            >
              {mottoText}
            </motion.p>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-3 lg:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-teal-800 md:bg-transparent p-4 md:p-0`}
        >
          {[
            'home', 'about', 'programs', 'gallery', 'news', 'donate', 'faq', 'contact'
          ].map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className="block py-2 md:py-0 hover:text-teal-200 capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav_Con;
