import HeroImage from '/assets/hero_angga.png'

const Image = {
  HeroImage,
}

export default Image

import Tools1 from '/assets/tools/vscode.png'
import Tools2 from '/assets/tools/reactjs.png'
import Tools3 from '/assets/tools/nextjs.png'
import Tools4 from '/assets/tools/tailwind.png'
import Tools5 from '/assets/tools/bootstrap.png'
import Tools6 from '/assets/tools/js.png'
import Tools7 from '/assets/tools/flutter.png'
import Tools8 from '/assets/tools/pngwing.png'
import Tools9 from '/assets/tools/HTML5.png'
import Tools10 from '/assets/tools/PHP.png'
import Tools11 from '/assets/tools/arduino.png'
import Tools12 from '/assets/tools/nodejs.png'
import Tools13 from '/assets/tools/github.png'
import Tools14 from '/assets/tools/ai.png'
import Tools15 from '/assets/tools/canva.png'
import Tools16 from '/assets/tools/figma.png'

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: 'Visual Studio Code',
    ket: 'Code Editor',
    dad: '100',
  },
  {
    id: 2,
    gambar: Tools2,
    nama: 'React JS',
    ket: 'Framework',
    dad: '200',
  },
  {
    id: 3,
    gambar: Tools3,
    nama: 'Next JS',
    ket: 'Framework',
    dad: '300',
  },
  {
    id: 4,
    gambar: Tools4,
    nama: 'Tailwind CSS',
    ket: 'Framework',
    dad: '400',
  },
  {
    id: 5,
    gambar: Tools5,
    nama: 'Bootstrap',
    ket: 'Framework',
    dad: '500',
  },
  {
    id: 6,
    gambar: Tools6,
    nama: 'Javascript',
    ket: 'Language',
    dad: '600',
  },
  {
    id: 7,
    gambar: Tools7,
    nama: 'Flutter',
    ket: 'Framework',
    dad: '700',
  },
  {
    id: 8,
    gambar: Tools8,
    nama: 'CodeIgniter',
    ket: 'Framework',
    dad: '800',
  },
  {
    id: 9,
    gambar: Tools9,
    nama: 'Html',
    ket: 'Language',
    dad: '900',
  },
  {
    id: 10,
    gambar: Tools10,
    nama: 'PHP',
    ket: 'Language',
    dad: '1000',
  },
  {
    id: 11,
    gambar: Tools11,
    nama: 'Arduino',
    ket: 'Hardware',
    dad: '1100',
  },
  {
    id: 12,
    gambar: Tools12,
    nama: 'Node JS',
    ket: 'Framework',
    dad: '1200',
  },
  {
    id: 13,
    gambar: Tools13,
    nama: 'Github',
    ket: 'Repository',
    dad: '1300',
  },
  {
    id: 14,
    gambar: Tools14,
    nama: 'AI',
    ket: 'Design App',
    dad: '1400',
  },
  {
    id: 15,
    gambar: Tools15,
    nama: 'Canva',
    ket: 'Design App',
    dad: '1500',
  },
  {
    id: 16,
    gambar: Tools16,
    nama: 'Figma',
    ket: 'Design App',
    dad: '1600',
  },
]

// Sertifikat data
import Sertifikat1 from '/assets/proyek/anggact-linux.pdf'
import Sertifikat2 from '/assets/proyek/anggact-dicoding.pdf'
import Sertifikat3 from '/assets/proyek/anggact-kecamatan.pdf'
import Sertifikat4 from '/assets/proyek/anggact-dishub.pdf'
import Sertifikat5 from '/assets/proyek/anggact-cifo.pdf'
import Sertifikat6 from '/assets/proyek/anggact-pisikotes.pdf'

import ser1 from '/assets/proyek/serti1.png'
import ser2 from '/assets/proyek/serti2.png'
import ser3 from '/assets/proyek/serti3.png'
import ser4 from '/assets/proyek/serti4.png'
import ser5 from '/assets/proyek/serti5.png'
import ser6 from '/assets/proyek/serti6.png'
export const listSertifikatImage = [
  { id: 1, gambar: ser1 },
  { id: 2, gambar: ser2 },
  { id: 3, gambar: ser3 },
  { id: 4, gambar: ser4 },
  { id: 5, gambar: ser5 },
  { id: 6, gambar: ser6 },
]
export const listSertifikat = [
  {
    id: 1,
    gambar: Sertifikat1,
    thumbnail: '/assets/proyek/serti1.png',
    nama: 'Sertifikat Linux',
    tanggal: '2024-07-10',
    dad: '200',
    tipe: 'pdf',
  },
  {
    id: 2,
    gambar: Sertifikat2,
    thumbnail: '/assets/proyek/serti2.png',
    nama: 'Sertifikat Dicoding',
    tanggal: '2024-07-11',
    dad: '300',
    tipe: 'pdf',
  },
  {
    id: 3,
    gambar: Sertifikat3,
    thumbnail: '/assets/proyek/serti3.png',
    nama: 'Sertifikat Magang',
    tanggal: '2021-03-31',
    dad: '400',
    tipe: 'pdf',
  },
  {
    id: 4,
    gambar: Sertifikat4,
    thumbnail: '/assets/proyek/serti4.png',
    nama: 'Sertifikat Magang',
    tanggal: '2021-10-31',
    dad: '500',
    tipe: 'pdf',
  },
  {
    id: 5,
    gambar: Sertifikat5,
    thumbnail: '/assets/proyek/serti5.png',
    nama: 'Sertifikat Ujikom',
    tanggal: '2021-04-12',
    dad: '600',
    tipe: 'pdf',
  },
  {
    id: 6,
    gambar: Sertifikat6,
    thumbnail: '/assets/proyek/serti6.png',
    nama: 'Sertifikat Psikotest',
    tanggal: '2027-10-07',
    dad: '700',
    tipe: 'pdf',
  },
]

// Project data
import Proyek1 from '/assets/proyek/cv_angga.pdf'
export const listCv = [
  {
    id: 1,
    gambar: Proyek1,
    nama: 'Curriculum Vitae',
    dad: '100',
    tipe: 'pdf',
  },
]