import React, { useState } from "react";
import { useParams } from "react-router-dom";

const albums = {
  // ---------------- Wedding Albums ----------------
  wed1: {
    title: "Elegant Wedding Celebration",
    description:
      "A timeless wedding album capturing the elegance, romance, and joy of the special day. From candid laughter to heartfelt vows, every detail reflects love at its finest.",
    images: [
      "/images/wed1.jpg",
      "/images/wed1a.jpg",
      "/images/wed1b.jpg",
      "/images/wed1c.jpg",
      "/images/wed1d.jpg",
      "/images/wed1e.jpg",
      "/images/wed1f.jpg",
      "/images/wed1g.jpg",
      "/images/wed1h.jpg",
      "/images/wed1i.jpg",
      "/images/wed1j.jpg",
      "/images/wed1k.jpg",
      "/images/wed1l.jpg",
      "/images/wed1m.jpg",
      "/images/wed1n.jpg",
      "/images/wed1o.jpg",
    ],
  },
  wed2: {
    title: "Garden Wedding Bliss",
    description:
      "Set in a stunning outdoor garden, this wedding album highlights natural beauty, intimate moments, and the vibrant colors of love blossoming in nature.",
    images: [
      "/images/wed2.jpg",
      "/images/wed2b.jpg",
      "/images/wed2c.jpg",
      "/images/wed2d.jpg",
      "/images/wed2e.jpg",
      "/images/wed2f.jpg",
      "/images/wed2g.jpg",
      "/images/wed2h.jpg",
      "/images/wed2i.jpg",
      "/images/wed2j.jpg",
      "/images/wed2k.jpg",
      "/images/wed2l.jpg",
      "/images/wed2m.jpg",
    ],
  },
  wed3: {
    title: "Classic Wedding Moments",
    description:
      "This collection features timeless portraits and cherished traditions, creating a beautiful keepsake for a truly unforgettable wedding day.",
    images: [
      "/images/wed3.jpg",
      "/images/wed3a.jpg",
      "/images/wed3b.jpg",
      "/images/wed3c.jpg",
      "/images/wed3d.jpg",
      "/images/wed3e.jpg",
      "/images/wed3f.jpg",
      "/images/wed3g.jpg",
      "/images/wed3h.jpg",
      "/images/wed3i.jpg",
      "/images/wed3j.jpg",
      "/images/wed3k.jpg",
      "/images/wed3l.jpg",
      "/images/wed3m.jpg",
      "/images/wed3n.jpg",
      "/images/wed3o.jpg",
      "/images/wed3p.jpg",
    ],
  },
  wed4: {
    title: "Intimate Wedding Portraits",
    description:
      "A close look at tender moments and emotional connections, celebrating the beauty of simplicity and the intimacy of love.",
    images: [
      "/images/wed4.jpg",
      "/images/wed4a.jpg",
      "/images/wed4b.jpg",
      "/images/wed4c.jpg",
      "/images/wed4d.jpg",
    ],
  },
  wed5: {
    title: "Modern Wedding Elegance",
    description:
      "Contemporary wedding photography showcasing style, charm, and vibrant energy — a perfect reflection of modern love stories.",
    images: ["/images/wed5.jpg", "/images/wed5a.jpg", "/images/wed5b.jpg"],
  },

  // ---------------- Model Photography ----------------
  model1: {
    title: "Fashion & Lifestyle Shoot",
    description:
      "A creative portfolio featuring bold fashion looks and lifestyle portraits, combining artistry with elegance for models and branding campaigns.",
    images: [
      "/images/model1.jpg",
      "/images/model1a.jpg",
      "/images/model1b.jpg",
      "/images/model1c.jpg",
      "/images/model1d.jpg",
      "/images/model1e.jpg",
      "/images/model1f.jpg",
      "/images/model1g.jpg",
      "/images/model1h.jpg",
      "/images/model1i.jpg",
      "/images/model1j.jpg",
    ],
  },

  // ---------------- Real Estate ----------------
  business1: {
    title: "Luxury House Showcase",
    description:
      "High-end photography of a luxury house, highlighting its architecture, interiors, and outdoor spaces with elegance and detail.",
    images: [
      "/images/real1.jpg",
      "/images/real1a.jpg",
      "/images/real1b.jpg",
      "/images/real1c.jpg",
      "/images/real1d.jpg",
      "/images/real1e.jpg",
    ],
  },
  business2: {
    title: "Modern Condo Living",
    description:
      "Bright, sharp, and inviting condo photography that showcases the clean design, open layouts, and modern lifestyle of urban living.",
    images: [
      "/images/real2.jpg",
      "/images/real2a.jpg",
      "/images/real2b.jpg",
      "/images/real2c.jpg",
      "/images/real2d.jpg",
    ],
  },
  business3: {
    title: "Stylish Condo Interiors",
    description:
      "Professional condo photography focusing on chic interiors, maximizing natural light, and capturing the essence of modern elegance.",
    images: [
      "/images/real3.jpg",
      "/images/real3a.jpg",
      "/images/real3b.jpg",
      "/images/real3c.jpg",
    ],
  },
  business4: {
    title: "Contemporary Condo Showcase",
    description:
      "A collection of images from contemporary condos, highlighting beautiful architecture, cozy living spaces, and premium finishes.",
    images: [
      "/images/real4.jpg",
      "/images/real4a.jpg",
      "/images/real4b.jpg",
      "/images/real4c.jpg",
      "/images/real4d.jpg",
    ],
  },
};

const AlbumPage = () => {
  const { albumId } = useParams();
  const album = albums[albumId];
  const [currentIndex, setCurrentIndex] = useState(null);

  if (!album) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Album not found</h2>
      </div>
    );
  }

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? album.images.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === album.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Album Header */}
      <h2 className="text-3xl font-bold text-center mb-4 font-[Philosopher]">
        {album.title}
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-8">
        {album.description}
      </p>

      {/* Album Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {album.images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`${album.title} ${index + 1}`}
              className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition rounded-xl">
              <span className="text-white font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={showPrev}
          >
            ‹
          </button>
          <img
            src={album.images[currentIndex]}
            alt="Selected"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default AlbumPage;
