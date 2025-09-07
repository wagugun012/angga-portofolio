import DataImage, { listSertifikatImage } from './data';
import { listTools, listSertifikat, listCv } from './data';
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen font-sans">
      
      {/* ============================================= */}
      {/* HERO SECTION */}
      {/* ============================================= */}
      <section className="hero grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-10 xl:gap-0 px-6 md:px-12 lg:px-24">
        {/* Left Side: Text Content */}
        <div className="animate__animated animate__fadeInUpBig animate__delay-3s">
          <div className="flex items-center gap-3 mb-8 bg-zinc-800/80 w-fit p-4 rounded-2xl shadow-lg backdrop-blur-sm">
            <img
              src={DataImage.HeroImage}
              alt="Avatar"
              className="w-12 rounded-md"
              loading="lazy"
            />
            <q className="text-zinc-200 italic">
              Saya seorang mahasiswa akhir Manajemen Informatika
            </q>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-zinc-100">
            Hi, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Angga Cipta Triyana</span>
          </h1>
          <p className="text-base mb-8 opacity-80 leading-relaxed text-zinc-300 max-w-lg">
            Seorang <span className="text-teal-400 font-semibold">Frontend Developer</span> yang 
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
          </div>
          
          {/* Social Links */}
          <div className="mt-10 flex gap-4">
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <i className="ri-instagram-line ri-2x"></i>
            </a>
          </div>
        </div>
        
        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-500/20 rounded-3xl blur-xl"></div>
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="relative w-[280px] md:w-[380px] rounded-2xl shadow-2xl animate__animated animate__fadeInUpBig animate__delay-4s border-2 border-teal-500/30"
              loading="lazy"
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
          <span className="mx-12 text-teal-300">UI/UX Designer</span>
          <span className="mx-12 text-teal-300">Fullstack Developer</span>
          <span className="mx-12 text-teal-300">Microcontroller Developer</span>
          <span className="mx-12 text-teal-300">Backend Developer</span>
        </Marquee>
      </section>

      {/* ============================================= */}
      {/* CURRICULUM VITAE (ABOUT) SECTION */}
      {/* ============================================= */}
      <section id="tentang" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div 
          className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-zinc-800/50 rounded-2xl md:rounded-3xl shadow-xl backdrop-blur-sm border border-zinc-700/50" 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
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
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-teal-500/30"
                    loading="lazy"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">Angga Cipta Triyana</h3>
                  <p className="text-zinc-300 mt-1">Frontend Developer</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">React</span>
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">Next.js</span>
                    <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">UI Design</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-zinc-300">
                <p className="flex items-center gap-3 text-sm sm:text-base"><i className="ri-mail-line text-teal-400"></i>anggacipta32@gmail.com</p>
                <p className="flex items-center gap-3 text-sm sm:text-base"><i className="ri-phone-line text-teal-400"></i>+62 812 3456 7890</p>
                <p className="flex items-center gap-3 text-sm sm:text-base"><i className="ri-map-pin-line text-teal-400"></i>Bandung, Indonesia</p>
                <p className="flex items-center gap-3 text-sm sm:text-base"><i className="ri-github-line text-teal-400"></i>github.com/angga</p>
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
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Manajemen Informatika</h3>
                    <p className="text-zinc-300 mt-1">Politeknik LP3I, Bandung</p>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">2022 - Sekarang</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm">Mahasiswa tingkat akhir dengan fokus pada pengembangan web dan sistem informasi.</p>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Teknik Komputer Jaringan</h3>
                    <p className="text-zinc-300 mt-1">SMK Merdeka Bandung</p>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">2019 - 2022</span>
                </div>
                <p className="text-zinc-400 mt-3 text-sm">Memperoleh sertifikasi jaringan komputer dan dasar-dasar pemrograman.</p>
              </div>
            </div>
          </div>
          
          {/* Work Experience */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-zinc-100 border-b border-zinc-700 pb-3 flex items-center gap-3">
              <i className="ri-briefcase-line text-teal-400"></i>
              Pengalaman Kerja Lapangan
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Kecamatan Mandalajati</h3>
                    <p className="text-zinc-300 mt-1">Magang</p>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Jan 2021 - Feb 2021</span>
                </div>
                <ul className="mt-4 space-y-2 text-zinc-300 pl-5 text-sm">
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mencatat Berkas Penduduk</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Merakit Komputer untuk Pelayanan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mengikuti acara yang diselenggarakan pihak kecamatan</li>
                </ul>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-teal-400">Dinas Perhubungan Kota Bandung</h3>
                    <p className="text-zinc-300 mt-1">Magang</p>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Sep 2021 - Okt 2021</span>
                </div>
                <ul className="mt-4 space-y-2 text-zinc-300 pl-5 text-sm">
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Memperbaiki Jaringan internet</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Mengikuti acara kegiatan lapangan</li>
                  <li className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-400">Memperbaiki komputer dan mengganti komponen yang rusak</li>
                </ul>
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
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2"><i className="ri-code-line"></i>Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML/CSS', 'JavaScript', 'React.js', 'Next.js', 'Vite', 'Vue', 'Tailwind CSS', 'Bootstrap', 'Git & GitHub'].map(skill => (
                    <span key={skill} className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-800/70 p-6 rounded-xl border border-zinc-700/50">
                <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2"><i className="ri-cpu-line"></i>Lainnya</h3>
                <div className="flex flex-wrap gap-2">
                  {['Mikrokontroler', 'Figma', 'UI Design', 'Microsoft Office', 'Kerja Tim', 'Komunikasi'].map(skill => (
                    <span key={skill} className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-zinc-800/70 p-4 rounded-xl border border-zinc-700/50 text-center hover:border-teal-500/30 transition-all">
              <h3 className="text-3xl font-bold text-teal-400">10+</h3>
              <p className="text-zinc-300 mt-2 text-sm">Proyek Selesai</p>
            </div>
            <div className="bg-zinc-800/70 p-4 rounded-xl border border-zinc-700/50 text-center hover:border-teal-500/30 transition-all">
              <h3 className="text-3xl font-bold text-teal-400">8+</h3>
              <p className="text-zinc-300 mt-2 text-sm">Sertifikat</p>
            </div>
            <div className="bg-zinc-800/70 p-4 rounded-xl border border-zinc-700/50 text-center hover:border-teal-500/30 transition-all">
              <h3 className="text-3xl font-bold text-teal-400">2+</h3>
              <p className="text-zinc-300 mt-2 text-sm">Pengalaman Kerja</p>
            </div>
            <div className="bg-zinc-800/70 p-4 rounded-xl border border-zinc-700/50 text-center hover:border-teal-500/30 transition-all">
              <h3 className="text-3xl font-bold text-teal-400">4+</h3>
              <p className="text-zinc-300 mt-2 text-sm">Tahun Belajar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* TOOLS SECTION */}
      {/* ============================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-zinc-100">Tools yang Saya Gunakan</h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">Berbagai teknologi dan alat yang biasa saya gunakan untuk membangun website dan aplikasi yang menarik.</p>
          </div>
          
          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listTools.map((tool, index) => (
              <div
                className="flex items-center gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 transition-all"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                style={{ animationDelay: `${index * 100}ms` }}
                key={tool.id}
              >
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-10 h-10 object-contain"
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
      <section id="sertifikat" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-zinc-100" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Sertifikat & Penghargaan
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Berbagai sertifikat dan penghargaan yang telah saya dapatkan selama belajar dan bekerja.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {listSertifikat.map((sertifikat, index) => (
              <div
                key={sertifikat.id}
                className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-teal-500/30 overflow-hidden" 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={sertifikat.dad}
                data-aos-once="true"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {sertifikat.tipe === 'pdf' ? (
                  <div className="bg-white p-8 flex items-center justify-center h-48">
                    <img
                      src={listSertifikatImage[index]?.gambar}
                      alt="PDF Icon"
                      className="w-40 h-auto object-contain"
                      loading='lazy'
                    />
                  </div>
                ) : (
                  <img
                    src={listSertifikatImage[index]?.gambar || '/assets/placeholder.png'}
                    alt={sertifikat.nama}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-2 truncate">{sertifikat.nama}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">{sertifikat.tanggal}</span>
                    {sertifikat.tipe === 'pdf' && (
                      <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-medium">PDF</span>
                    )}
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
      <section id="kontak" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-zinc-100" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Hubungi Saya
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Tertarik bekerja sama atau memiliki pertanyaan? Silakan kirim pesan melalui formulir berikut.
            </p>
          </div>
          
          <form
            action="https://formsubmit.co/sumardiujang65@gmail.com"
            method="POST"
            className="bg-zinc-800/50 p-8 md:p-10 rounded-2xl border border-zinc-700/50 shadow-xl" 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nama" className="block text-zinc-300 mb-2 font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Nama Anda"
                  className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
                  className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors"><i className="ri-github-fill ri-2x"></i></a>
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors"><i className="ri-linkedin-box-fill ri-2x"></i></a>
            <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors"><i className="ri-instagram-line ri-2x"></i></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Angga Cipta Triyana. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App;