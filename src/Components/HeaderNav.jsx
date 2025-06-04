function HeaderNav() {
  return (
    <nav className="bg-teal-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Road2Jannah Foundation</div>
        <ul className="flex space-x-6">
          <li><a href="#programs" className="hover:text-teal-200">Programs</a></li>
          <li><a href="#gallery" className="hover:text-teal-200">Gallery</a></li>
          <li><a href="#news" className="hover:text-teal-200">News</a></li>
          <li><a href="#about" className="hover:text-teal-200">About</a></li>
          <li><a href="#focus" className="hover:text-teal-200">Focus</a></li>
          <li><a href="#donate" className="hover:text-teal-200">Donate</a></li>
          <li><a href="#contact" className="hover:text-teal-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;