import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const ServicesPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Wedding Photography",
      description:
        "Full-day coverage of your wedding with up to 12 hours of service. Every detail, emotion, and celebration captured beautifully.",
      note: "Additional hours can be arranged with custom pricing.",
    },
    {
      title: "Engagement Photography",
      description:
        "A 90-minute photo session designed to capture your love story in a natural, timeless style.",
      note: "Additional time can be added at $300 per extra hour.",
    },
    {
      title: "Model & Fashion Photography",
      description:
        "Tailored shoots for models, portraits, and creative campaigns.",
      note: "Sessions are based on individual requirements and project scope.",
    },
    {
      title: "Real Estate Photography",
      description:
        "High-quality photos showcasing properties for listings and promotions.",
      note: "Pricing based on property size and requirements.",
    },
    {
      title: "Business & Corporate Inquiries",
      description:
        "Professional sessions for branding, team headshots, and corporate events.",
      note: "Please contact us directly for tailored business packages.",
    },
  ];

  return (
    <div className="font-bubbler">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/Lovera (6).png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

        {/* Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <img
            src="/Lovera (5).png"
            alt="Lovera Photography Logo"
            className="h-28 w-auto"
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center leading-snug">
            Our <span className="font-extrabold">Services</span> <br />
            & Photography Packages
          </h1>
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
            <a href="/services" className="hover:text-gray-500">Services</a>
            <a href="/faq" className="hover:text-gray-500">FAQ</a>
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
              <a href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold font-[Philosopher]">Our Packages</h2>
          <p className="text-gray-600 mt-4">
            We provide tailored photography services for weddings, engagements,
            lifestyle, business, and more. Please note: Additional costs may
            apply for travel outside the GTA. For corporate and business
            inquiries, contact us directly for custom pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md text-left">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-3">{service.description}</p>
              <p className="text-sm text-gray-500 italic">{service.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Session</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
          Every story is unique. Let’s create a package that works best for you.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 border border-white hover:bg-white hover:text-black transition font-semibold"
        >
          CONTACT US
        </a>
      </section>

      {/* CONTACT & SOCIAL SECTION */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-[Philosopher]">Get in Touch</h2>

          {/* Email */}
          <p className="mb-4">
            <a
              href="mailto:loveraphotographyenquires@gmail.com"
              className="text-lg font-semibold text-black hover:text-gray-600"
            >
              loveraphotographyenquires@gmail.com
            </a>
          </p>

          {/* Instagram */}
          <p>
            <a
              href="https://www.instagram.com/camerachee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-black hover:text-gray-600"
            >
              Follow us on Instagram @camerachee
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
