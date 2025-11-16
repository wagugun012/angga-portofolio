import { FiCode } from 'react-icons/fi';
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine } from 'react-icons/ri';

const Footer = () => {
  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Sertifikat', href: '#sertifikat' },
    { name: 'Kontak', href: '#kontak' }
  ];

  const socialLinks = [
    { href: '#', icon: <RiGithubFill size={24} /> },
    { href: '#', icon: <RiLinkedinBoxFill size={24} /> },
    { href: '#', icon: <RiInstagramLine size={24} /> },
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 px-6 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-600 flex items-center justify-center shadow-md">
              <FiCode className="text-white text-lg" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Angga Cipta T.
            </h1>
          </a>

          {/* Navigation Links */}
          <div className="flex gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-zinc-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="text-zinc-400 hover:text-teal-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Angga Cipta Triyana. Dibuat dengan semangat & secangkir kopi.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;