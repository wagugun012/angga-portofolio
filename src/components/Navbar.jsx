import { useState, useEffect } from 'react';
import { FiCode, FiMenu, FiX, FiHome, FiUser, FiAward, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('beranda');

  // Effect to handle scroll and active link detection
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background on scroll
      setScrolled(window.scrollY > 20);

      // Set active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'beranda';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // offset for better accuracy
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const navLinks = [
    { id: 'beranda', name: 'Beranda', href: '#beranda', icon: <FiHome /> },
    { id: 'tentang', name: 'Tentang', href: '#tentang', icon: <FiUser /> },
    { id: 'sertifikat', name: 'Sertifikat', href: '#sertifikat', icon: <FiAward /> },
    { id: 'kontak', name: 'Kontak', href: '#kontak', icon: <FiMail /> }
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-zinc-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2" onClick={() => handleLinkClick('beranda')}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-600 flex items-center justify-center shadow-md">
            <FiCode className="text-white text-lg" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent hidden sm:block">
            Portofolio
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeLink === link.id
                    ? 'text-white bg-white/5 shadow-md shadow-teal-500/20'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                <span className="font-medium text-sm">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl p-2 rounded-lg focus:outline-none hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-base transition-all ${
                  activeLink === link.id
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-teal-600'
                    : 'text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;