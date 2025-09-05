import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-bubbler">
      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

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
          <a
            href="/contact"
            className="mt-8 px-6 py-3 border border-white hover:bg-white hover:text-black transition"
          >
            CONTACT US
          </a>
        </div>

        {/* Social Icons */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-2xl z-10">
          <a
            href="https://www.instagram.com/camerachee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-6 z-10">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 mx-auto"></div>
        </div>
      </section>

      {/* NAVBAR SECTION */}
      <header className="bg-white border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Left CTA */}
          <a
            href="/contact"
            className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            PRICING & AVAILABILITY
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="/" className="hover:text-gray-500">Home</a>
            <a href="/gallery" className="hover:text-gray-500">Gallery</a>
            <a href="/about" className="hover:text-gray-500">About Us</a>
            <a href="/faq" className="hover:text-gray-500">FAQ</a>
            <a href="/service" className="hover:text-gray-500">Service</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FiX
                size={28}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <FiMenu
                size={28}
                onClick={() => setIsMobileMenuOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
            <nav className="flex flex-col items-center gap-4 py-6 text-sm uppercase">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href="/service" onClick={() => setIsMobileMenuOpen(false)}>Service</a>
            </nav>
          </div>
        )}
      </header>

      {/* FEATURED WORK SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl mb-2">Featured Work</h2>
              <p className="text-gray-600">Some of our favourite love stories</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1">
              <img src="/feature1.jpg" alt="Wedding couple" className="w-full h-[350px] object-cover" />
            </div>
            <div className="md:col-span-2">
              <img src="/feature2.jpg" alt="Wedding dinner setup" className="w-full h-[500px] object-cover" />
            </div>
            <div className="md:col-span-1">
              <img src="/feature3.jpg" alt="Wedding details" className="w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        className="relative bg-cover bg-center text-white text-center py-24 px-6"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">ABOUT US</h2>
          <div className="w-12 h-[2px] bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            We’re storytellers who believe love is best captured naturally. 
            Our passion is turning life’s most important moments into timeless 
            memories filled with laughter, emotion, and elegance.
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
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

{/* MINI PHOTO ALBUM GIFT SECTION */}
<section className="bg-white py-20 px-6 text-center">
  <div className="max-w-2xl mx-auto flex flex-col items-center">

    {/* Album Image */}
    <img
      src="/album.jpg"  // 🔄 Replace with your album image
      alt="Mini Photo Album Gift"
      className="rounded-md shadow-md object-cover w-full max-w-sm mb-10"
    />

    {/* Subtitle */}
    <p className="uppercase tracking-[0.2em] text-gray-500 text-xs mb-3">
      A Gift For Our Couples
    </p>

    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
      The Memory Album
    </h2>

    {/* Description */}
    <p className="text-lg text-gray-700 font-serif leading-relaxed mb-10">
      Your wedding is one of the most special and amazing days of your life...  
      you finally get to celebrate spending forever ever after with your best friend,  
      surrounded by your loving family and amazing friends!
    </p>

    {/* Button */}
    <a
      href="/contact"
      className="inline-block px-8 py-3 border border-black text-black tracking-wide uppercase text-sm font-medium hover:bg-black hover:text-white transition"
    >
      Explore The Memory Album
    </a>
  </div>
</section>


   


     {/* INSTAGRAM SECTION */}
<section className="bg-white py-10 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl mb-6">Follow Us on Instagram</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <a href="https://www.instagram.com/p/DBk3qCxuw3e/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/insta1.jpeg" 
          alt="Instagram 1" 
          className="w-full h-[120px] object-cover rounded-md hover:opacity-80 transition" 
        />
      </a>
      <a href="https://www.instagram.com/p/C673m-tOyRh/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/insta2.jpeg" 
          alt="Instagram 2" 
          className="w-full h-[120px] object-cover rounded-md hover:opacity-80 transition" 
        />
      </a>
      <a href="https://www.instagram.com/p/C5UBO8Fu-1p/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/insta3.jpeg" 
          alt="Instagram 3" 
          className="w-full h-[120px] object-cover rounded-md hover:opacity-80 transition" 
        />
      </a>
      <a href="https://www.instagram.com/p/C7GJ4KSOUD2/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/insta4.jpeg" 
          alt="Instagram 4" 
          className="w-full h-[120px] object-cover rounded-md hover:opacity-80 transition" 
        />
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
