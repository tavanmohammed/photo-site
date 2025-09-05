import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const AboutPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-bubbler">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/wed1f.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <img
            src="/Lovera (5).png"
            alt="Lovera Photography Logo"
            className="h-28 w-auto"
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center leading-snug">
            Our Story <br />
            <span className="font-extrabold">About Us</span>
          </h1>
        </div>
      </section>

      {/* NAVBAR SECTION */}
      <header className="bg-white border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Left side */}
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

      {/* ABOUT SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-[Philosopher]">Meet Your Photographer</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With over <span className="font-semibold">10 years of professional experience</span>, 
            our lead photographer has worked extensively in{" "}
            <span className="font-semibold">Dubai</span>,{" "}
            <span className="font-semibold">Toronto</span>, and across the{" "}
            <span className="font-semibold">Middle East</span>. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our approach blends international style with local cultural sensitivity, 
            ensuring that every wedding, engagement, and portrait session is 
            captured with authenticity, artistry, and timeless elegance.
          </p>
        </div>
      </section>

      {/* PHOTOGRAPHER HIGHLIGHT */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/photographer.jpeg"
            alt="Photographer"
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold mb-6 font-[Philosopher]">A Decade Behind the Lens</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              From the luxurious weddings of Dubai to heartfelt celebrations in 
              Toronto, and cultural ceremonies across the Middle East, our 
              photographer has seen it all. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every photo is more than just an image — it’s a timeless memory, 
              crafted with an eye for detail, emotion, and storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-[Philosopher]">Our Philosophy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe photography should be natural, emotional, and everlasting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s a grand wedding, an intimate engagement, or a stylish 
            model shoot, our mission is to preserve your story in its purest form.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Tell Your Story</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
          Ready to capture your memories? We’d love to be part of your journey — 
          whether in Toronto, Dubai, or anywhere across the Middle East.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 border border-white hover:bg-white hover:text-black transition font-semibold"
        >
          CONTACT US
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
