import { useState } from "react"; // 1. Impor useState
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee.jsx";
import { certificates } from "../constants/Index.js";

const firstRow = certificates.slice(0, certificates.length / 2);
const secondRow = certificates.slice(certificates.length / 2);

// Komponen Modal untuk menampilkan gambar besar
const CertificateModal = ({ certificate, onClose }) => {
  return (
    // Latar belakang overlay semi-transparan
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose} // Menutup modal saat latar belakang diklik
    >
      <div
        className="relative max-w-4xl p-4 bg-storm rounded-xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat konten di dalam modal diklik
      >
        {/* Tombol Close (X) */}
        <button
          onClick={onClose}
          className="absolute z-10 p-2 text-white rounded-full -top-4 -right-4 bg-indigo hover:bg-royal"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Gambar Sertifikat Ukuran Penuh */}
        <img
          src={certificate.img}
          alt={`Sertifikat: ${certificate.title}`}
          className="object-contain w-full h-full max-h-[85vh] rounded-lg"
        />
      </div>
    </div>
  );
};

// Kartu sertifikat sekarang menerima prop 'onClick'
const CertificateCard = ({ img, title, onClick }) => {
  return (
    <figure
      onClick={onClick} // 2. Menambahkan event handler onClick
      className={twMerge(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-2 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <img
        className="object-cover w-full h-auto rounded-lg"
        alt={`Certificate for ${title}`}
        src={img}
      />
      <figcaption className="absolute bottom-0 left-0 w-full p-3 text-sm font-medium text-center text-white bg-black/40 backdrop-blur-sm">
        {title}
      </figcaption>
    </figure>
  );
};

export default function Certificates() {
  // 3. State untuk menyimpan sertifikat yang dipilih
  const [selectedCert, setSelectedCert] = useState(null);

  // Fungsi untuk menangani klik pada kartu
  const handleCardClick = (certificate) => {
    setSelectedCert(certificate);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Sertifikat & Pelatihan</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden gap-y-4">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((cert) => (
            <CertificateCard
              key={cert.title}
              {...cert}
              // Mengirim fungsi handle click ke setiap kartu
              onClick={() => handleCardClick(cert)}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((cert) => (
            <CertificateCard
              key={cert.title}
              {...cert}
              onClick={() => handleCardClick(cert)}
            />
          ))}
        </Marquee>

        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>

      {/* 4. Menampilkan modal jika ada sertifikat yang dipilih */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}