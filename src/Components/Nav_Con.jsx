
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function useTwoLineTypewriter(name, mottos, speed = 100, pause = 1500) {
  const [nameText, setNameText] = useState('');
  const [mottoText, setMottoText] = useState('');
  const [phase, setPhase] = useState('typingName');
  const [index, setIndex] = useState(0);
  const [mottoIndex, setMottoIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const currentMotto = mottos[mottoIndex];

  useEffect(() => {
    let timeout;

    switch (phase) {
      case 'typingName':
        if (index < name.length) {
          timeout = setTimeout(() => {
            setNameText((prev) => prev + name[index]);
            setIndex(index + 1);
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIndex(0);
            setPhase('typingMotto');
          }, pause);
        }
        break;

      case 'typingMotto':
        if (index < currentMotto.length) {
          timeout = setTimeout(() => {
            setMottoText((prev) => prev + currentMotto[index]);
            setIndex(index + 1);
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIndex(name.length - 1);
            setPhase('deletingName');
          }, pause);
        }
        break;

      case 'deletingName':
        if (index >= 0) {
          timeout = setTimeout(() => {
            setNameText((prev) => prev.slice(0, -1));
            setIndex(index - 1);
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIndex(currentMotto.length - 1);
            setPhase('deletingMotto');
          }, pause);
        }
        break;

      case 'deletingMotto':
        if (index >= 0) {
          timeout = setTimeout(() => {
            setMottoText((prev) => prev.slice(0, -1));
            setIndex(index - 1);
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setMottoIndex((prev) => (prev + 1) % mottos.length);
            setIndex(0);
            setPhase('typingName');
          }, pause);
        }
        break;

      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, index, name, currentMotto, speed, pause]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return {
    nameLine: nameText + (showCursor && phase.includes('Name') ? '|' : ''),
mottoLine: mottoText + (showCursor && phase.includes('Motto') ? '|' : ''),

  };
}

function Nav_Con() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section) {
      const offset = 80;
      const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const { nameLine, mottoLine } = useTwoLineTypewriter(
    'Road2Jannah Foundation',
    [
      'Resourcing the Communities Through Outreach',
       "Touching Hearts, Changing Lives",    ],
    70,
    1500
  );

  return (
    <nav className="bg-teal-800 text-white sticky top-0 z-50 max-w-[1800px] mx-auto">
      <style>
        {`
          .typewriter-text {
            font-family: monospace;
            white-space: nowrap;
            overflow: hidden;
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

          <div className="whitespace-nowrap flex flex-col justify-center leading-tight">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-[.8rem] md:text-[.9rem] font-bold hover:text-teal-200 typewriter-text min-h-[1.25rem]"
            >
              {nameLine || <span>&nbsp;</span>}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-[.6rem] md:text-sm lg:text-sm text-teal-100 italic font-light typewriter-text min-h-[1.2rem]"
            >
              {mottoLine || <span>&nbsp;</span>}
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
