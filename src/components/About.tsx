"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Partie gauche - Images */}
          <motion.div 
            className="lg:w-1/2 w-full mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image principale */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl mx-auto" 
                   style={{ height: '400px', maxWidth: '100%', width: '100%' }}
              >
                <Image
                  src="/images/jardin.jpg"
                  alt="Laurent SAS MAHIEUX au travail"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              
              {/* Image secondaire - visible uniquement sur desktop et tablettes */}
              <div 
                className="absolute -bottom-10 -right-10 z-20 rounded-lg overflow-hidden shadow-xl border-4 hidden sm:block" 
                style={{ height: '250px', width: '250px', borderColor: '#8B5E34' }}
              >
                <Image
                  src="/images/piscine.jpg"
                  alt="Réalisation de jardin"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              {/* Image secondaire - version mobile (plus petite et repositionnée) */}
              <div 
                className="absolute -bottom-5 -right-5 z-20 rounded-lg overflow-hidden shadow-xl border-4 sm:hidden" 
                style={{ height: '150px', width: '150px', borderColor: '#8B5E34' }}
              >
                <Image
                  src="/images/piscine.jpg"
                  alt="Réalisation de jardin"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              {/* Élément décoratif */}
              <div 
                className="absolute -top-8 -left-8 z-0 rounded-lg hidden sm:block" 
                style={{ height: '100px', width: '100px', backgroundColor: '#6A994E', opacity: 0.8 }}
              ></div>
              
              {/* Élément décoratif - version mobile (plus petit) */}
              <div 
                className="absolute -top-4 -left-4 z-0 rounded-lg sm:hidden" 
                style={{ height: '60px', width: '60px', backgroundColor: '#6A994E', opacity: 0.8 }}
              ></div>
            </div>
          </motion.div>

          {/* Partie droite - Texte */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div style={{ width: '50px', height: '2px', backgroundColor: '#8B5E34' }}></div>
              <h3 className="ml-4 text-lg font-medium" style={{ color: '#6A994E' }}>À propos de nous</h3>
            </div>
            
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#2D5A27' }}>
              Votre paysagiste de confiance depuis plus de 15 ans
            </h2>
            
            <p className="mb-6 text-lg" style={{ color: '#cccccc' }}>
              Laurent SAS MAHIEUX est une entreprise de paysagisme située à Réalville, spécialisée dans la création et l'entretien d'espaces verts pour particuliers et professionnels.
            </p>
            
            <p className="mb-8 text-lg" style={{ color: '#cccccc' }}>
              Notre équipe de professionnels qualifiés met son expertise à votre service pour transformer votre extérieur en un espace de vie harmonieux et fonctionnel, adapté à vos besoins et à vos envies.
            </p>
            
            {/* Points forts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Expertise et savoir-faire",
                "Matériaux de qualité",
                "Service personnalisé",
                "Respect des délais",
                "Devis gratuit",
                "Satisfaction garantie"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="flex items-center justify-center rounded-full mr-3"
                    style={{ width: '24px', height: '24px', backgroundColor: '#8B5E34' }}
                  >
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M5 12L10 17L20 7" 
                        stroke="#FFFFFF" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span style={{ color: '#cccccc', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block rounded-lg px-8 py-3 font-medium transition-all"
              style={{ backgroundColor: '#8B5E34', color: '#FFFFFF' }}
            >
              Contactez-nous
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
