import DataImage, { listSertifikatImage, listProjectImage } from './data';
import { listTools, listSertifikat, listCv, listProject } from './data';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  }, []);

  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen font-sans">
      
      {/* ============================================= */}
      {/* HERO SECTION */}
      {/* ============================================= */}
      <section className="hero grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-10 xl:gap-0 px-6 md:px-12 lg:px-24 mt-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="flex items-center gap-3 mb-8 bg-zinc-800/80 w-fit p-4 rounded-2xl shadow-lg backdrop-blur-sm">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-zinc-100">
            Hi, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Angga Cipta Triyana</span>
          </h1>
          <p className="text-base mb-8 opacity-80 leading-relaxed text-zinc-300 max-w-lg">
            Seorang <span className="text-teal-400 font-semibold">programmer</span> yang 
            passionate dalam membangun antarmuka pengguna yang elegan dan fungsional, 
            serta tertarik dengan pengembangan alat berbasis mikrokontroler.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={listCv[0].gambar}
              download
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 shadow-lg hover:shadow-teal-500/20"
            >
              Download CV <i className="ri-download-cloud-2-line ri-lg"></i>
            </a>
            <a
              href="#sertifikat"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 shadow-lg border border-zinc-700"
            >
              Lihat Sertifikat <i className="ri-arrow-down-line ri-lg"></i>
            </a>
            <a
              href="#projects"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center gap-2 shadow-lg border border-zinc-700"
            >
              Lihat Project <i className="ri-folder-line ri-lg"></i>
            </a>
          </div>
          
          <div className="mt-10 flex gap-4">
            <a href="https://github.com/anggacipta" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/angga.ct" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-instagram-line ri-2x"></i>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-500/20 rounded-3xl blur-xl"></div>
            <img
              src={DataImage.HeadImage}
              alt="Hero"
              className="relative w-[280px] md:w-[380px] rounded-2xl shadow-2xl border-2 border-teal-500/30"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/380x380'; }}
            />
          </div>
        </div>
      </section>
      
      {/* ============================================= */}
      {/* SKILLS MARQUEE SECTION */}
      {/* ============================================= */}
      <section className="py-12">
        <Marquee
          gradient={false}
          speed={100}
          pauseOnHover={true}
          className="text-lg md:text-xl font-semibold"
        >
          <span className="mx-12 text-teal-300">Frontend Developer</span>
          <span className="mx-12 text-teal-300">UI Designer</span>
          <span className="mx-12 text-teal-300">Fullstack Developer</span>
          <span className="mx-12 text-teal-300">Microcontroller Developer</span>
          <span className="mx-12 text-teal-300">Backend Developer</span>
        </Marquee>
      </section>

      {/* ============================================= */}
      {/* CURRICULUM VITAE SECTION */}
      {/* ============================================= */}
      <section id="tentang" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div 
          className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-zinc-800/50 rounded-2xl md:rounded-3xl shadow-xl backdrop-blur-sm border border-zinc-700/50" 
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-teal-400">CURRICULUM VITAE</h1>
          
          {/* Personal Information */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-zinc-700 pb-3 flex items-center gap-3">
              <i className="ri-user-3-line text-teal-400"></i>
              Informasi Pribadi
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-md"></div>
                  <img
                    src={DataImage.HeroImage}
                    alt="Profile"
                    className="relative w-32 h-32 rounded-full object-cover border-2 border-teal-500/30"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/128'; }}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">Angga Cipta Triyana</h3>
                  <p className="text-zinc-300 mt-1">Programmer</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">React & Vite</span>
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">PHP (Codeigniter)</span>
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">UI Design</span>
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">Microcontroller</span>
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">Jaringan</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-zinc-300">
                <p className="flex items-center gap-3"><i className="ri-mail-line text-teal-400"></i>anggacipta32@gmail.com</p>
                <p className="flex items-center gap-3"><i className="ri-phone-line text-teal-400"></i>+62 877 0853 8381</p>
                <p className="flex items-center gap-3"><i className="ri-map-pin-line text-teal-400"></i>Bandung, Jawa Barat</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-zinc-700 pb-3 flex items-center gap-3">
              <i className="ri-graduation-cap-line text-teal-400"></i>
              Pendidikan
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Manajemen Informatika</h3>
                    <p className="text-zinc-300 mt-1">Politeknik LP3I Bandung | IPK: 3.45</p>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">2022 - 2025</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm">Mempelajari pengembangan website, aplikasi Android, dan jaringan komputer.</p>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Teknik Komputer Jaringan</h3>
                    <p className="text-zinc-300 mt-1">SMK Merdeka Bandung</p>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">2019 - 2022</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm">Aktif dalam ekstrakurikuler IOT (Internet of Things) dan jaringan komputer.</p>
              </div>
            </div>
          </div>
          
          {/* Work Experience - shortened */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-zinc-700 pb-3 flex items-center gap-3">
              <i className="ri-briefcase-line text-teal-400"></i>
              Pengalaman Kerja
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <h3 className="text-lg font-bold text-teal-400">Kecamatan Mandalajati</h3>
                <p className="text-zinc-400 text-sm">Magang IT - Jan 2021 s/d Feb 2021</p>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <h3 className="text-lg font-bold text-teal-400">Dinas Perhubungan Kota Bandung</h3>
                <p className="text-zinc-400 text-sm">Magang IT - Sep 2021 s/d Okt 2021</p>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <h3 className="text-lg font-bold text-teal-400">CV. Firman Jaya</h3>
                <p className="text-zinc-400 text-sm">Staf Administrasi Gudang - Feb 2025 s/d Juni 2025</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-zinc-700 pb-3 flex items-center gap-3">
              <i className="ri-tools-line text-teal-400"></i>
              Keahlian
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/70 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-teal-400 mb-4">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Tailwind CSS', 'JavaScript', 'PHP', 'Flutter', 'CodeIgniter'].map(skill => (
                    <span key={skill} className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-teal-400 mb-4">Lainnya</h3>
                <div className="flex flex-wrap gap-2">
                  {['Arduino', 'Microsoft Office', 'Figma', 'GitHub'].map(skill => (
                    <span key={skill} className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-zinc-800/70 p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-teal-400">6+</h3>
              <p className="text-zinc-300 text-sm">Proyek Selesai</p>
            </div>
            <div className="bg-zinc-800/70 p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-teal-400">8+</h3>
              <p className="text-zinc-300 text-sm">Sertifikat</p>
            </div>
            <div className="bg-zinc-800/70 p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-teal-400">3+</h3>
              <p className="text-zinc-300 text-sm">Pengalaman</p>
            </div>
            <div className="bg-zinc-800/70 p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-teal-400">4+</h3>
              <p className="text-zinc-300 text-sm">Tahun Belajar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
{/* PROJECTS SECTION */}
{/* ============================================= */}
<section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-800/20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4 text-zinc-100" data-aos="fade-up">
        Project Portfolio
      </h1>
      <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        Berikut adalah berbagai project yang telah saya kerjakan, mulai dari pengembangan web, mobile, hingga IoT.
      </p>
    </div>
    
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {listProject.map((project, index) => (
        <div
          key={project.id}
          className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer" 
          data-aos="fade-up"
          data-aos-delay={index * 100}
          onClick={() => openModal(project)}
        >
          {/* Gambar Project */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-700 to-zinc-800">
            <img
              src={listProjectImage[index]?.gambar}
              alt={project.nama}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
              onError={(e) => { 
                e.target.src = 'https://img.icons8.com/color/240/document.png';
              }}
            />
            <div className="absolute top-3 right-3">
              <span className="bg-red-500/90 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                📄 PDF
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-teal-400 mb-2 line-clamp-1">{project.nama}</h3>
            <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.deskripsi}</p>
            
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="bg-zinc-700/50 text-zinc-300 text-xs px-2 py-0.5 rounded-full">
                📅 {project.tanggal}
              </span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                openModal(project);
              }}
              className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-all font-medium"
            >
              Lihat Detail Project
              <i className="ri-external-link-line ml-2"></i>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="relative bg-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-zinc-900/80 hover:bg-zinc-700 text-white p-2 rounded-full transition-all"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="p-6 md:p-8">
              <div className="mb-6 rounded-xl overflow-hidden bg-zinc-700/30">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.nama}
                  className="w-full max-h-[400px] object-contain bg-zinc-900/50"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400?text=Project+Preview'; }}
                />
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-400">{selectedProject.nama}</h2>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30">
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
                      <span key={i} className="bg-zinc-700/70 text-teal-300 px-3 py-1 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-700">
                <a
                  href={selectedProject.gambar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <i className="ri-file-pdf-line"></i> Baca PDF Project
                </a>
                <a
                  href={selectedProject.gambar}
                  download
                  className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <i className="ri-download-line"></i> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================= */}
      {/* TOOLS SECTION */}
      {/* ============================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-zinc-100">Tools yang Saya Gunakan</h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">Berbagai teknologi dan alat yang biasa saya gunakan.</p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listTools.map((tool) => (
              <div key={tool.id} className="flex items-center gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-10 h-10 object-contain"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=' + tool.nama.charAt(0); }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100">{tool.nama}</h4>
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
      <section id="sertifikat" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-zinc-100" data-aos="fade-up">
              Sertifikat & Penghargaan
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Berbagai sertifikat dan penghargaan yang telah saya dapatkan selama belajar dan bekerja.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {listSertifikat.map((sertifikat, index) => (
              <div
                key={sertifikat.id}
                className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 overflow-hidden" 
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white p-8 flex items-center justify-center h-48">
                  <img
                    src={listSertifikatImage[index]?.gambar}
                    alt="PDF Icon"
                    className="w-32 h-auto object-contain"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/128x128?text=PDF'; }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-2 truncate">{sertifikat.nama}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">{sertifikat.tanggal}</span>
                    <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-medium">PDF</span>
                  </div>
                  <a
                    href={sertifikat.gambar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-all font-medium"
                  >
                    Lihat Sertifikat
                    <i className="ri-external-link-line ml-2"></i>
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
      <section id="kontak" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-800/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-zinc-100" data-aos="fade-up">
              Hubungi Saya
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Tertarik bekerja sama atau memiliki pertanyaan? Silakan kirim pesan melalui formulir berikut.
            </p>
          </div>
          
          <form
            action="https://formsubmit.co/anggacipta32@gmail.com"
            method="POST"
            className="bg-zinc-800/50 p-8 md:p-10 rounded-2xl border border-zinc-700/50 shadow-xl" 
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input type="hidden" name="_subject" value="Pesan baru dari Portfolio Website!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nama" className="block text-zinc-300 mb-2 font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Nama Anda"
                  className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-zinc-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@contoh.com"
                  className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="pesan" className="block text-zinc-300 mb-2 font-medium">Pesan</label>
              <textarea
                id="pesan"
                name="pesan"
                rows="5"
                placeholder="Tulis pesan Anda..."
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Kirim Pesan <i className="ri-send-plane-line"></i>
            </button>
          </form>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER SECTION */}
      {/* ============================================= */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center text-zinc-400">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/anggacipta" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/angga.ct" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-instagram-line ri-2x"></i>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Angga Cipta Triyana. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App;