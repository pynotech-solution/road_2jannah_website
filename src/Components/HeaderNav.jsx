function HeaderNav() {
  return (
    <div>
      <header className="bg-teal-800 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Road2Jannah Foundation</h1>
        <p className="text-lg mt-2">Empowering Communities Through Faith and Compassion</p>
      </header>
      <nav className="bg-teal-700 text-white py-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="#home" className="hover:underline text-lg">Home</a>
          <a href="#programs" className="hover:underline text-lg">Programs</a>
          <a href="#gallery" className="hover:underline text-lg">Gallery</a>
          <a href="#news" className="hover:underline text-lg">News</a>
          <a href="#about" className="hover:underline text-lg">About Us</a>
          <a href="#donate" className="hover:underline text-lg">Donate</a>
          <a href="#contact" className="hover:underline text-lg">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;