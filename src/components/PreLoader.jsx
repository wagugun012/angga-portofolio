import { useState, useEffect } from 'react';
import { FiCode } from 'react-icons/fi';

const PreLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Timer untuk memulai animasi fade-out
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Mulai fade-out setelah 2.5 detik

    // Timer untuk menghapus komponen dari DOM setelah animasi selesai
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hilang sepenuhnya setelah 3 detik

    // Cleanup timers saat komponen unmount
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null; // Komponen tidak dirender sama sekali setelah selesai
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-zinc-900 z-[9999] transition-opacity duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Efek denyut (pulse) di latar belakang ikon */}
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-600/20 animate-pulse"></div>
        
        {/* Ikon Logo */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
          <FiCode className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;