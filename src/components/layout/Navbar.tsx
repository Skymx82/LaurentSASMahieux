"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 shadow-md' 
          : 'py-4'
      }`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(45, 90, 39, 0.95)' : 'transparent'
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span 
            className="text-xl font-bold"
            style={{ color: '#FFFFFF' }}
          >
            Laurent SAS MAHIEUX
          </span>
        </Link>

        {/* Espace vide pour équilibrer la navigation */}
        <div className="hidden md:block"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative group"
            >
              <span 
                className="font-medium transition-colors duration-300"
                style={{ color: '#FFFFFF' }}
              >
                {link.name}
              </span>
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#8B5E34' }}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span 
              className="block w-8 h-0.5 transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}
            ></span>
            <span 
              className="block w-8 h-0.5 transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                opacity: mobileMenuOpen ? 0 : 1
              }}
            ></span>
            <span 
              className="block w-8 h-0.5 transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
              }}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ 
          backgroundColor: 'rgba(45, 90, 39, 0.95)',
          overflow: 'hidden'
        }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="py-2 px-4 hover:bg-opacity-20 rounded-md transition-colors duration-300"
              style={{ color: '#FFFFFF' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Espace supplémentaire en bas du menu mobile */}
          <div className="pt-4"></div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
