import DataImage, { listSertifikatImage, listProjectImage } from './data';
import { listTools, listSertifikat, listCv, listProject } from './data';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    };
    initAOS();

    // Mouse move effect untuk gradient
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen font-sans relative overflow-x-hidden">
      
      {/* ============================================= */}
      {/* ANIMASI BACKGROUND UNIK */}
      {/* ============================================= */}
      
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px] animate-pulse animation-delay-3000"></div>
        
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-[120px] transition-transform duration-300"
          style={{ 
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        ></div>
      </div>

      {/* ============================================= */}
      {/* HERO SECTION */}
      {/* ============================================= */}
      <section className="relative z-10 hero grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-10 xl:gap-0 px-6 md:px-12 lg:px-24 mt-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="flex items-center gap-3 mb-8 bg-zinc-800/60 w-fit p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10">
            <img
              src={DataImage.HeroImage}
              alt="Avatar"
              className="w-12 rounded-md"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/48'; }}
            />
            <q className="text-zinc-200 italic">
              Siap untuk tantangan digital selanjutnya
            </q>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-teal-300 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Hi, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Angga Cipta Triyana</span>
          </h1>
          <p className="text-base mb-8 text-zinc-300 max-w-lg leading-relaxed">
            Seorang <span className="text-teal-400 font-semibold">programmer</span> yang 
            passionate dalam membangun antarmuka pengguna yang elegan dan fungsional, 
            serta tertarik dengan pengembangan alat berbasis mikrokontroler.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={listCv[0].gambar}
              download
              className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 duration-300"
            >
              Download CV <i className="ri-download-cloud-2-line ri-lg"></i>
            </a>
            <a
              href="#sertifikat"
              className="bg-zinc-800/80 hover:bg-zinc-700/80 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 shadow-lg border border-zinc-700 backdrop-blur-sm hover:scale-105 duration-300"
            >
              Lihat Sertifikat <i className="ri-arrow-down-line ri-lg"></i>
            </a>
            <a
              href="#projects"
              className="bg-zinc-800/80 hover:bg-zinc-700/80 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 shadow-lg border border-zinc-700 backdrop-blur-sm hover:scale-105 duration-300"
            >
              Lihat Project <i className="ri-folder-line ri-lg"></i>
            </a>
          </div>
          
          <div className="mt-10 flex gap-6">
            <a href="https://github.com/anggacipta" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-all hover:scale-110 duration-300">
              <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/angga.ct" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-all hover:scale-110 duration-300">
              <i className="ri-instagram-line ri-2x"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-all hover:scale-110 duration-300">
              <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/40 to-cyan-500/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              src={DataImage.HeadImage}
              alt="Hero"
              className="relative w-[280px] md:w-[380px] rounded-2xl shadow-2xl border-2 border-teal-500/30 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/380x380'; }}
            />
          </div>
        </div>
      </section>
      
      {/* ============================================= */}
      {/* SKILLS MARQUEE SECTION */}
      {/* ============================================= */}
      <section className="relative z-10 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          className="text-lg md:text-xl font-semibold"
        >
          {['Frontend Developer', 'UI Designer', 'Fullstack Developer', 'Microcontroller Developer', 'Backend Developer', 'React Specialist', 'IoT Enthusiast'].map((skill, i) => (
            <span key={i} className="mx-8 text-transparent bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text hover:from-teal-200 hover:to-cyan-300 transition-all duration-300">
              ✦ {skill} ✦
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============================================= */}
      {/* CURRICULUM VITAE SECTION - LENGKAP */}
      {/* ============================================= */}
      <section id="tentang" className="relative z-10 py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div 
          className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-zinc-800/40 rounded-2xl md:rounded-3xl shadow-xl backdrop-blur-md border border-white/10 hover:border-teal-500/30 transition-all duration-500" 
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">CURRICULUM VITAE</span>
          </h1>
          
          {/* Personal Information */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-teal-500/30 pb-3 flex items-center gap-3">
              <i className="ri-user-3-line text-teal-400"></i>
              Informasi Pribadi
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-md group-hover:blur-xl transition-all"></div>
                  <img
                    src={DataImage.HeroImage}
                    alt="Profile"
                    className="relative w-32 h-32 rounded-full object-cover border-2 border-teal-500/30 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/128'; }}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">Angga Cipta Triyana</h3>
                  <p className="text-teal-400 mt-1">Programmer</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    {['React & Vite', 'PHP (Codeigniter)', 'UI Design', 'Microcontroller', 'Jaringan'].map(skill => (
                      <span key={skill} className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-xs font-medium border border-teal-500/30">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-zinc-300">
                <p className="flex items-center gap-3 hover:text-teal-400 transition-colors"><i className="ri-mail-line text-teal-400"></i>anggacipta32@gmail.com</p>
                <p className="flex items-center gap-3 hover:text-teal-400 transition-colors"><i className="ri-phone-line text-teal-400"></i>+62 877 0853 8381</p>
                <p className="flex items-center gap-3 hover:text-teal-400 transition-colors"><i className="ri-map-pin-line text-teal-400"></i>Bandung, Jawa Barat</p>
              </div>
            </div>
          </div>

          {/* Education - LENGKAP */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-teal-500/30 pb-3 flex items-center gap-3">
              <i className="ri-graduation-cap-line text-teal-400"></i>
              Pendidikan
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Manajemen Informatika</h3>
                    <p className="text-zinc-300 mt-1">Politeknik LP3I Bandung | IPK: 3.45</p>
                  </div>
                  <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">2022 - 2025</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">Saya telah menyelesaikan pendidikan Manajemen Informatika di Politeknik LP3I Bandung. Selama masa perkuliahan, saya mempelajari banyak hal baru, seperti pengembangan website dan pengembangan aplikasi Android. Selain itu, saya juga belajar tentang jaringan, termasuk menggunakan tool seperti Nmap, dan IP Scanner untuk mengambil informasi dari perangkat yang terhubung ke jaringan.</p>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Teknik Komputer Jaringan</h3>
                    <p className="text-zinc-300 mt-1">SMK Merdeka Bandung</p>
                  </div>
                  <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">2019 - 2022</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">Selama menempuh pendidikan di SMK Merdeka Bandung jurusan Teknik Komputer Jaringan (TKJ), saya aktif berpartisipasi dalam dua ekstrakurikuler. Pertama, ekstrakurikuler IOT (Internet of Things), di mana saya berfokus pada pengembangan mikrokontroler, seperti membuat prototipe sensor lampu berbasis suara. Kedua, ekstrakurikuler Komputer yang berfokus pada implementasi jaringan, di mana saya belajar cara membangun jaringan Wi-Fi menggunakan konfigurasi perangkat Mikrotik dan Access Point.</p>
              </div>
            </div>
          </div>
          
          {/* Work Experience - LENGKAP */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-teal-500/30 pb-3 flex items-center gap-3">
              <i className="ri-briefcase-line text-teal-400"></i>
              Pengalaman Kerja Lapangan
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Kecamatan Mandalajati</h3>
                    <p className="text-zinc-300 mt-1">Magang | Bagian IT dan Kearsipan</p>
                  </div>
                  <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Jan 2021 - Feb 2021</span>
                </div>
                <ul className="mt-4 space-y-2 text-zinc-300 pl-5 text-sm">
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mencatat Berkas Penduduk</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Merakit Komputer untuk Pelayanan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Memperbaiki Jaringan yang error atau tidak berfungsi</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Melakukan pembaruan atau instalasi ulang sistem operasi pada PC dengan versi yang sudah lama</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mengikuti acara yang diselenggarakan pihak kecamatan</li>
                </ul>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Dinas Perhubungan Kota Bandung</h3>
                    <p className="text-zinc-300 mt-1">Magang | Bagian IT dan Sarana Prasarana</p>
                  </div>
                  <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Sep 2021 - Okt 2021</span>
                </div>
                <ul className="mt-4 space-y-2 text-zinc-300 pl-5 text-sm">
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Memperbaiki Jaringan internet</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Manajemen dan Pemantauan Jaringan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mengikuti acara kegiatan lapangan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Membuat Laporan kerusakan halte atau lampu jalan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Memperbaiki komputer dan mengganti komponen yang rusak</li>
                </ul>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">CV. Firman Jaya</h3>
                    <p className="text-zinc-300 mt-1">Bekerja | Bagian Staf Administrasi Gudang</p>
                  </div>
                  <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Feb 2025 - Juni 2025</span>
                </div>
                <ul className="mt-4 space-y-2 text-zinc-300 pl-5 text-sm">
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Menimbang barang yang masuk sesuai tonase</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Menimbang barang yang akan dikirim ke peleburan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Menyiapkan Surat Jalan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mendata barang yang masuk dan keluar dalam 1 hari</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-teal-500/30 pb-3 flex items-center gap-3">
              <i className="ri-tools-line text-teal-400"></i>
              Keahlian
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/60 p-6 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all">
                <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2"><i className="ri-code-line"></i>Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Tailwind CSS', 'JavaScript', 'PHP', 'Flutter', 'CodeIgniter', 'HTML/CSS', 'UI Design'].map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium border border-teal-500/30">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-800/60 p-6 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all">
                <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2"><i className="ri-cpu-line"></i>Lainnya</h3>
                <div className="flex flex-wrap gap-2">
                  {['Mikrokontroler', 'Microsoft Office', 'Kerja Tim', 'Komunikasi', 'Figma', 'GitHub'].map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium border border-teal-500/30">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats with gradient */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '6+', label: 'Proyek Selesai', color: 'from-teal-500 to-cyan-500' },
              { value: '8+', label: 'Sertifikat', color: 'from-cyan-500 to-blue-500' },
              { value: '3+', label: 'Pengalaman Kerja', color: 'from-teal-500 to-emerald-500' },
              { value: '4+', label: 'Tahun Belajar', color: 'from-cyan-500 to-teal-500' }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-800/60 p-4 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all hover:scale-105 duration-300 group">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>{stat.value}</h3>
                <p className="text-zinc-400 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* PROJECTS SECTION */}
      {/* ============================================= */}
      <section id="projects" className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Project Portfolio</span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Berikut adalah berbagai project yang telah saya kerjakan, mulai dari pengembangan web, mobile, hingga IoT.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {listProject.map((project, index) => (
              <div
                key={project.id}
                className="group bg-zinc-800/40 rounded-xl border border-white/10 hover:border-teal-500/50 overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 cursor-pointer backdrop-blur-sm" 
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => openModal(project)}
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={listProjectImage[index]?.gambar}
                    alt={project.nama}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { 
                      e.target.src = 'https://img.icons8.com/color/240/document.png';
                    }}
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg animate-pulse">
                      📄 PDF
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-black/50 backdrop-blur-sm text-teal-400 text-xs px-2 py-1 rounded-full">
                      Klik untuk detail
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-2 line-clamp-1 group-hover:text-teal-300 transition-colors">{project.nama}</h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.deskripsi}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="bg-zinc-700/50 text-zinc-300 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                      <i className="ri-calendar-line text-teal-400 text-xs"></i> {project.tanggal}
                    </span>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-4 py-3 rounded-lg transition-all font-medium gap-2 group/btn"
                  >
                    <span>Lihat Detail Project</span>
                    <i className="ri-external-link-line group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* PROJECT MODAL */}
      {/* ============================================= */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal-500/30 shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-zinc-900/80 hover:bg-red-500/80 text-white p-2 rounded-full transition-all hover:rotate-90 duration-300"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="p-6 md:p-8">
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-700 to-zinc-800">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.nama}
                  className="w-full max-h-[400px] object-contain"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400?text=Project+Preview'; }}
                />
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{selectedProject.nama}</h2>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30 animate-pulse">
                  📄 PDF Document
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-200 mb-2 flex items-center gap-2">
                  <i className="ri-file-list-line text-teal-400"></i> Deskripsi Project
                </h3>
                <p className="text-zinc-300 leading-relaxed">{selectedProject.deskripsi}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                  <i className="ri-calendar-line text-teal-400"></i> Tahun Pengerjaan
                </h3>
                <p className="text-zinc-300">{selectedProject.tanggal}</p>
              </div>

              {selectedProject.techStack && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                    <i className="ri-stack-line text-teal-400"></i> Teknologi
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-teal-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 pt-4 border-t border-teal-500/30">
                <a
                  href={selectedProject.gambar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 group"
                >
                  <i className="ri-file-pdf-line group-hover:animate-bounce"></i> Baca PDF Project
                </a>
                <a
                  href={selectedProject.gambar}
                  download
                  className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 group"
                >
                  <i className="ri-download-line group-hover:animate-bounce"></i> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================= */}
      {/* TOOLS SECTION */}
      {/* ============================================= */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Tools yang Saya Gunakan</span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">Berbagai teknologi dan alat yang biasa saya gunakan.</p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listTools.map((tool, idx) => (
              <div key={tool.id} className="group flex items-center gap-4 p-5 bg-zinc-800/40 rounded-xl border border-white/10 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-10 h-10 object-contain"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + tool.nama.charAt(0); }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100 group-hover:text-teal-400 transition-colors">{tool.nama}</h4>
                  <p className="text-zinc-400 text-sm mt-1">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SERTIFIKAT SECTION */}
      {/* ============================================= */}
      <section id="sertifikat" className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Sertifikat & Penghargaan</span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Berbagai sertifikat dan penghargaan yang telah saya dapatkan selama belajar dan bekerja.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {listSertifikat.map((sertifikat, index) => (
              <div
                key={sertifikat.id}
                className="group bg-zinc-800/40 rounded-xl border border-white/10 hover:border-teal-500/50 overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-1 backdrop-blur-sm" 
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gradient-to-br from-white to-gray-100 p-8 flex items-center justify-center h-48 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={listSertifikatImage[index]?.gambar}
                    alt="PDF Icon"
                    className="w-32 h-auto object-contain"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/128x128?text=PDF'; }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-2 truncate group-hover:text-teal-300 transition-colors">{sertifikat.nama}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-zinc-700/50 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <i className="ri-calendar-line text-teal-400"></i> {sertifikat.tanggal}
                    </span>
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">PDF</span>
                  </div>
                  <a
                    href={sertifikat.gambar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-4 py-3 rounded-lg transition-all font-medium gap-2 group/btn"
                  >
                    <span>Lihat Sertifikat</span>
                    <i className="ri-external-link-line group-hover/btn:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* KONTAK SECTION */}
      {/* ============================================= */}
      <section id="kontak" className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Hubungi Saya</span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Tertarik bekerja sama atau memiliki pertanyaan? Silakan kirim pesan melalui formulir berikut.
            </p>
          </div>
          
          <form
            action="https://formsubmit.co/anggacipta32@gmail.com"
            method="POST"
            className="bg-zinc-800/40 p-8 md:p-10 rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all shadow-xl backdrop-blur-md" 
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input type="hidden" name="_subject" value="Pesan baru dari Portfolio Website!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label htmlFor="nama" className="block text-zinc-300 mb-2 font-medium group-focus-within:text-teal-400 transition-colors">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Nama Anda"
                  className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-zinc-300 mb-2 font-medium group-focus-within:text-teal-400 transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@contoh.com"
                  className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6 group">
              <label htmlFor="pesan" className="block text-zinc-300 mb-2 font-medium group-focus-within:text-teal-400 transition-colors">Pesan</label>
              <textarea
                id="pesan"
                name="pesan"
                rows="5"
                placeholder="Tulis pesan Anda..."
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Kirim Pesan</span>
              <i className="ri-send-plane-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </button>
          </form>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER SECTION */}
      {/* ============================================= */}
      <footer className="relative z-10 bg-gradient-to-t from-zinc-900 to-transparent border-t border-white/10 py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center text-zinc-400">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/anggacipta" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-all hover:scale-110 duration-300">
              <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/angga.ct" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-all hover:scale-110 duration-300">
              <i className="ri-instagram-line ri-2x"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-all hover:scale-110 duration-300">
              <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Angga Cipta Triyana. All Rights Reserved.</p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>

    </div>
  )
}

export default App;