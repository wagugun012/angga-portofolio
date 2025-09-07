import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('beranda');

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'beranda', name: 'Beranda', href: '#beranda', icon: <FiHome /> },
    { id: 'tentang', name: 'Tentang', href: '#tentang', icon: <FiUser /> },
    { id: 'sertifikat', name: 'Sertifikat', href: '#sertifikat', icon: <FiCode /> },
    { id: 'kontak', name: 'Kontak', href: '#kontak', icon: <FiMail /> }
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    if (isMobile) setMenuOpen(false);
  };

  return (
    <div className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Portofolio
          </h1>
        </a>

        {/* Toggle button (Mobile) */}
        {isMobile ? (
          <button
            className="text-white text-2xl p-2 rounded-full focus:outline-none hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        ) : (
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeLink === link.id
                      ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg py-6 px-6 border-t border-white/10 animate-fadeIn">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg transition-all ${
                    activeLink === link.id
                      ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
