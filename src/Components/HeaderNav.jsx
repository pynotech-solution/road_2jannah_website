import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 sm:py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold">Road2Jannah Foundation</div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex sm:space-x-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-teal-800 sm:bg-transparent p-4 sm:p-0`}>
          <li><a href="#programs" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">Programs</a></li>
          <li><a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">Gallery</a></li>
          <li><a href="#news" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">News</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">About</a></li>
          <li><a href="#focus" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">Focus</a></li>
          <li><a href="#donate" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">Donate</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 sm:py-0 hover:text-teal-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;