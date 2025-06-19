"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image d'arrière-plan avec un overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/hero-bg.jpg"
            alt="Paysage aménagé par Laurent SAS MAHIEUX"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: 'rgba(20, 40, 20, 0.7)' }} // Overlay vert foncé plus opaque
          />
        </div>
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl" 
            style={{ color: '#FFFFFF' }}
          >
            Laurent SAS MAHIEUX
          </h1>
          <h2 
            className="mb-8 text-2xl font-medium md:text-3xl" 
            style={{ color: '#F2E8CF' }}
          >
            Paysagiste et entretien d'espaces verts
          </h2>
          <p 
            className="mb-10 text-xl" 
            style={{ color: '#FFFFFF' }}
          >
            Transformez votre extérieur en un espace de vie exceptionnel
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="rounded-lg px-8 py-3 font-medium transition-all"
              style={{ backgroundColor: '#8B5E34', color: '#FFFFFF' }}
            >
              Nous contacter
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#realisations"
              className="rounded-lg border-2 px-8 py-3 font-medium transition-all"
              style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
            >
              Nos réalisations
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 5L12 19M12 19L5 12M12 19L19 12" 
            stroke="#FFFFFF" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
