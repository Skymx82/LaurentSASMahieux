"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Realisations = () => {
  // Catégories de projets
  const categories = ['Tous', 'Jardins', 'Terrasses', 'Piscines', 'Aménagements'];
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Projets
  const projects = [
    {
      id: 1,
      title: "Jardin paysager contemporain",
      category: "Jardins",
      image: "/images/jardin.jpg",
    },
    {
      id: 2,
      title: "Jardin avec allées et massifs",
      category: "Jardins",
      image: "/images/jardin2.jpg",
    },
    {
      id: 3,
      title: "Terrain de pétanque paysagé",
      category: "Aménagements",
      image: "/images/petanque.jpg",
    },
    {
      id: 4,
      title: "Piscine avec plage en bois",
      category: "Piscines",
      image: "/images/piscine.jpg",
    },
    {
      id: 5,
      title: "Piscine avec terrasse et aménagement",
      category: "Piscines",
      image: "/images/ext-piscine.jpg",
    },
    {
      id: 6,
      title: "Espace détente autour de la piscine",
      category: "Aménagements",
      image: "/images/ext-piscine2.jpg",
    }
  ];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="realisations" className="py-20" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div style={{ width: '50px', height: '2px', backgroundColor: '#8B5E34' }}></div>
              <h3 className="mx-4 text-lg font-medium" style={{ color: '#6A994E' }}>Nos réalisations</h3>
              <div style={{ width: '50px', height: '2px', backgroundColor: '#8B5E34' }}></div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#2D5A27' }}>
              Découvrez nos projets
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#222222' }}>
              Explorez notre galerie de réalisations pour vous inspirer et découvrir notre savoir-faire en matière d'aménagement paysager.
            </p>
          </motion.div>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                activeCategory === category 
                  ? 'font-medium shadow-md' 
                  : 'font-normal'
              }`}
              style={{
                backgroundColor: activeCategory === category ? '#2D5A27' : 'transparent',
                color: activeCategory === category ? '#FFFFFF' : '#222222',
                border: activeCategory === category ? 'none' : '1px solid #DDDDDD'
              }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Galerie de projets */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Version desktop - visible au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:flex flex-col justify-end p-6 hidden">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
                
                {/* Version mobile - toujours visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 sm:hidden">
                  <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-white/80">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="mb-6 text-lg" style={{ color: '#222222' }}>
            Vous avez un projet d'aménagement paysager en tête ?
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block rounded-lg px-8 py-3 font-medium transition-all"
            style={{ backgroundColor: '#8B5E34', color: '#FFFFFF' }}
          >
            Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Realisations;
