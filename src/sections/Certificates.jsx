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
        <div className="relative w-full max-h-[85vh] overflow-auto">
          <img
            src={certificate.img}
            alt={`Sertifikat: ${certificate.title}`}
            className="object-contain w-full h-auto rounded-lg"
          />
        </div>
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
        "relative w-72 sm:w-80 cursor-pointer overflow-hidden rounded-xl border p-2 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm hover:from-royal hover:to-royal/80 hover-animation flex-shrink-0 transition-all duration-300 shadow-lg hover:shadow-xl"
      )}
    >
      <div className="relative w-full aspect-[3/4] bg-storm rounded-lg overflow-hidden">
        <img
          className="object-contain w-full h-full rounded-lg"
          alt={`Certificate for ${title}`}
          src={img}
          loading="lazy"
        />
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-xs sm:text-sm font-medium text-center text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm rounded-b-lg">
        <span className="line-clamp-2">{title}</span>
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
    <div className="items-start mt-25 md:mt-35 c-space" id="certificate">
      <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Sertifikat & Pelatihan</span>
      </h2>
      <p className="text-center text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
        Certifications and training that strengthen my expertise.
      </p>
      <div className="section-divider mb-8" />
      
      {/* Container dengan scroll horizontal manual */}
      <div className="relative w-full mt-12">
        {/* Scrollable container untuk row pertama */}
        <div className="relative mb-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4 sm:gap-5 md:gap-6 px-4 md:px-0" style={{ width: 'max-content' }}>
            {firstRow.map((cert) => (
              <div key={cert.title} className="flex-shrink-0">
                <CertificateCard
                  {...cert}
                  onClick={() => handleCardClick(cert)}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Scrollable container untuk row kedua */}
        <div className="relative overflow-x-auto overflow-y-hidden pb-4 scroll-smooth scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4 sm:gap-5 md:gap-6 px-4 md:px-0" style={{ width: 'max-content' }}>
            {secondRow.map((cert) => (
              <div key={cert.title} className="flex-shrink-0">
                <CertificateCard
                  {...cert}
                  onClick={() => handleCardClick(cert)}
                />
              </div>
            ))}
          </div>

        </div>
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