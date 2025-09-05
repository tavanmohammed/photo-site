import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const GalleryPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Wedding Photos
  const weddingPhotos = [
    { id: 1, src: "/images/wed1.jpg", album: "/albums/wed1" },
    { id: 2, src: "/images/wed2.jpg", album: "/albums/wed2" },
    { id: 3, src: "/images/wed3.jpg", album: "/albums/wed3" },
    { id: 4, src: "/images/wed4.jpg", album: "/albums/wed4" },
    { id: 5, src: "/images/wed5.jpg", album: "/albums/wed5" },
  ];

  // ✅ Business & Corporate Photos
const businessPhotos = [
  { id: 1, src: "/images/real1.jpg", album: "/albums/business1" },
  { id: 2, src: "/images/real2.jpg", album: "/albums/business2" },
  { id: 3, src: "/images/real3.jpg", album: "/albums/business3" },
  { id: 4, src: "/images/real4.jpg", album: "/albums/business4" },


];

  // ✅ Model Photos
  const modelPhotos = [
    { id: 1, src: "/images/model1.jpg", album: "/albums/model1" },
  ];

  // ✅ Helper function
  const renderSection = (title, photos) => (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 font-[Philosopher]">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Link key={photo.id} to={photo.album} className="relative group">
            <img
              src={photo.src}
              alt={`${title} ${photo.id}`}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl">
              <span className="text-white text-xl font-semibold font-[Philosopher]">
                View Album
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="font-bubbler">
      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <img
            src="/Lovera (5).png"
            alt="Lovera Photography Logo"
            className="h-28 w-auto"
          />
          <p className="mt-2 text-white text-xl font-bold bubbler-font -mt-1">
            Lovera Photography
          </p>
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center leading-snug">
            preserving life&apos;s <br />
            <span className="italic font-semibold">most IMPORTANT</span> days,
            one story <br />
            at <span className="font-extrabold">A TIME.</span>
          </h1>

          {/* ✅ Linked Contact Us */}
          <Link
            to="/contact"
            className="mt-8 px-6 py-3 border border-white hover:bg-white hover:text-black transition"
          >
            CONTACT US
          </Link>
        </div>

        {/* Social Icon */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-2xl z-10">
          <a href="https://instagram.com" target="_blank" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-6 z-10">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 mx-auto"></div>
        </div>
      </section>

      {/* ✅ NAVBAR SECTION */}
      <header className="bg-white border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Left CTA */}
          <Link
            to="/contact"
            className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            PRICING & AVAILABILITY
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/gallery" className="hover:text-gray-500">Gallery</Link>
            <Link to="/about" className="hover:text-gray-500">About Us</Link>
            <Link to="/faq" className="hover:text-gray-500">FAQ</Link>
            <Link to="/service" className="hover:text-gray-500">Service</Link>

          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FiX size={28} onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer" />
            ) : (
              <FiMenu size={28} onClick={() => setIsMobileMenuOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
            <nav className="flex flex-col items-center gap-4 py-6 text-sm uppercase">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/service" onClick={() => setIsMobileMenuOpen(false)}>Service</Link>

            </nav>
          </div>
        )}
      </header>

      {/* PORTFOLIO SWIPER SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-sm tracking-widest text-gray-500">
              Signature Work
            </p>
            <h2 className="text-3xl md:text-5xl">Portfolio</h2>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[...Array(9)].map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`/portfolio${i + 1}.jpg`}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ WEDDING GALLERY SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {renderSection("Wedding", weddingPhotos)}
        </div>
      </section>

      {/* ✅ MODEL GALLERY SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {renderSection("Model Photography", modelPhotos)}
        </div>
      </section>

      {/* ✅ BUSINESS & CORPORATE GALLERY SECTION */}
<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {renderSection("Business & Corporate Photography", businessPhotos)}
  </div>
</section>


      {/* INSTAGRAM SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-12">Follow Us on Instagram</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a href="https://www.instagram.com/p/DBk3qCxuw3e/" target="_blank">
              <img src="/insta1.jpeg" alt="Instagram 1" className="w-full h-[300px] object-cover hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/p/C673m-tOyRh/" target="_blank">
              <img src="/insta2.jpeg" alt="Instagram 2" className="w-full h-[300px] object-cover hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/p/C5UBO8Fu-1p/" target="_blank">
              <img src="/insta3.jpeg" alt="Instagram 3" className="w-full h-[300px] object-cover hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/p/C7GJ4KSOUD2/" target="_blank">
              <img src="/insta4.jpeg" alt="Instagram 4" className="w-full h-[300px] object-cover hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
