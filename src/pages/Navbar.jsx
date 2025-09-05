import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-y border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left side */}
        <div className="flex items-center gap-6">
          <a
            href="/contact"
            className="border border-black px-4 py-2 font-philosopher hover:bg-black hover:text-white transition"
          >
            PRICING & AVAILABILITY
          </a>
        </div>

        {/* Center Nav (desktop only) */}
        <nav className="hidden md:flex gap-8 font-philosopher text-sm uppercase">
          <a href="/" className="hover:text-gray-500">Home</a>
          <a href="/gallery" className="hover:text-gray-500">Gallery</a>
          <a href="/about" className="hover:text-gray-500">About Us</a>
          <a href="/faq" className="hover:text-gray-500">FAQ</a>
          <a href="/service" className="hover:text-gray-500">Service</a>

        </nav>

        {/* Mobile menu icon (only shows on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <FiX size={32} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center justify-center flex-grow gap-6 font-philosopher text-xl">
            <a href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Home</a>
            <a href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Gallery</a>
            <a href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500">About Us</a>
            <a href="/faq" onClick={() => setIsOpen(false)} className="hover:text-gray-500">FAQ</a>
            <a href="/service" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Service</a>

            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
            >
              Pricing & Availability
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pb-8 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📷</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
