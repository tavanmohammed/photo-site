import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const FAQPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const faqs = [
    {
      question: "How many photos do we get?",
      answer: "You’ll receive 600–800+ edited photos from a full wedding day. Engagement sessions include ~90 minutes of coverage.",
    },
    {
      question: "Can we print our own photos?",
      answer: "Yes! All packages include high-resolution images you can print anywhere. We also offer albums and professional printing.",
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes, we require a 30% deposit along with a signed agreement to secure your date.",
    },
    {
      question: "Do you photograph anything else besides weddings?",
      answer: "Yes, we also capture lifestyle, portrait, and model photography sessions.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept e-transfer, cash, and cheque payments.",
    },
  ];

  return (
    <div className="font-bubbler">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/faq.jpg')" }}
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
            Have any questions? <br />
            <span className="font-extrabold">Frequently Asked Questions</span>
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

      {/* FAQ SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
