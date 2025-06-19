"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTree, FaWater, FaHome } from 'react-icons/fa';
import BeforeAfterSlider from './BeforeAfterSlider';

const Services = () => {
  const services = [
    {
      icon: <FaLeaf className="text-3xl" style={{ color: '#6A994E' }} />,
      title: "Entretien d'espaces verts",
      description: "Tonte de pelouse, taille de haies, désherbage, débroussaillage et entretien régulier de vos espaces extérieurs."
    },
    {
      icon: <FaTree className="text-3xl" style={{ color: '#6A994E' }} />,
      title: "Aménagement paysager",
      description: "Création de jardins, massifs, rocailles et espaces verts adaptés à votre terrain et à vos envies."
    },
    {
      icon: <FaWater className="text-3xl" style={{ color: '#6A994E' }} />,
      title: "Systèmes d'arrosage",
      description: "Installation et maintenance de systèmes d'arrosage automatiques pour un entretien optimal de vos espaces verts."
    },
    {
      icon: <FaHome className="text-3xl" style={{ color: '#6A994E' }} />,
      title: "Terrasses et allées",
      description: "Création de terrasses, allées et autres aménagements extérieurs pour valoriser votre propriété."
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container mx-auto px-4 text-black">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div style={{ width: '50px', height: '2px', backgroundColor: '#8B5E34' }}></div>
              <h3 className="mx-4 text-lg font-medium" style={{ color: '#6A994E' }}>Nos services</h3>
              <div style={{ width: '50px', height: '2px', backgroundColor: '#8B5E34' }}></div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#2D5A27' }}>
              Des services sur mesure pour votre extérieur
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#222222' }}>
              Laurent SAS MAHIEUX vous propose une gamme complète de services pour l'aménagement et l'entretien de vos espaces verts.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D5A27' }}>{service.title}</h3>
              <p style={{ color: '#222222' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 mb-20">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block rounded-lg px-8 py-3 font-medium transition-all"
            style={{ backgroundColor: '#8B5E34', color: '#FFFFFF' }}
          >
            Demander un devis gratuit
          </motion.a>
        </div>
        
        {/* Avant / Après */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2D5A27' }}>Avant / Après</h3>
            <p className="max-w-2xl mx-auto" style={{ color: '#222222' }}>
              Découvrez la transformation de nos projets. Faites glisser le curseur pour voir la différence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <BeforeAfterSlider 
                beforeImage="/images/avant1.jpg" 
                afterImage="/images/apres1.jpg"
                beforeAlt="Jardin avant aménagement"
                afterAlt="Jardin après aménagement"
              />
              <p className="mt-3 text-center font-medium" style={{ color: '#2D5A27' }}>Aménagement complet d'un jardin</p>
            </div>
            
            <div>
              <BeforeAfterSlider 
                beforeImage="/images/avant2.jpg" 
                afterImage="/images/apres2.jpg"
                beforeAlt="Terrasse avant rénovation"
                afterAlt="Terrasse après rénovation"
              />
              <p className="mt-3 text-center font-medium" style={{ color: '#2D5A27' }}>Création d'une terrasse en bois</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
