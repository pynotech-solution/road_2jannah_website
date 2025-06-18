// Eugene Afriyie UEB3502023

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Typewriter with typing + deleting + infinite loop
function useTypewriterLoop(texts, speed = 100, pause = 1500) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, pause / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayed;
}

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

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Use typewriter loop
  const textList = [
    'Road2Jannah Foundation',
    'Resourcing the Communities Through Outreach',
  ];
  const animatedText = useTypewriterLoop(textList, 80, 2000);

  return (
    <nav className="bg-teal-800 text-white sticky top-1 z-50 max-w-[1800px] mx-auto">
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 1px;
            background-color: white;
            margin-left: 2px;
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to {
              visibility: hidden;
            }
          }
        `}
      </style>

      <div className="containe mx-auto px-4 sm:px-4 lg:px-10 py-2 flex justify-between items-center gap-4">
        <div className="flex gap-2 items-start">
          <img 
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1750036910/472206263_8807425239293997_4094478365450783416_n_xeyctj.jpg"
            alt="road3jannah logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2"
            loading="lazy"
          />

          <div className="whitespace-nowrap flex flex-col justify-center gap-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={logoVariants}
              className="text-[.8rem] md:text-[.9rem] font-bold hover:text-teal-200"
            >
              {animatedText}
              <span className="blinking-cursor">&nbsp;</span>
            </motion.div>
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
