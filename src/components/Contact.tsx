"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
      
      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
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
              <h3 className="mx-4 text-lg font-medium" style={{ color: '#6A994E' }}>Contact</h3>
              <div style={{ width: '50px', height: '2px', backgroundColor: '#8B5E34' }}></div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#2D5A27' }}>
              Contactez-nous
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#cccccc' }}>
              N'hésitez pas à nous contacter pour toute demande de devis ou d'information. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#2D5A27' }}>Nos coordonnées</h3>
            
            <div className="space-y-6 text-black">
              {/* Téléphone */}
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#F2E8CF' }}>
                  <FaPhone style={{ color: '#8B5E34' }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: '#2D5A27' }}>Téléphone</h4>
                  <p className="text-lg font-semibold">06 30 74 48 63</p>
                  <p className="text-sm" style={{ color: '#777777' }}>Du lundi au vendredi, 8h-18h</p>
                </div>
              </div>
              
              {/* Adresse */}
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#F2E8CF' }}>
                  <FaMapMarkerAlt style={{ color: '#8B5E34' }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: '#2D5A27' }}>Adresse</h4>
                  <p className="text-lg font-semibold">Laurent SAS MAHIEUX</p>
                  <p style={{ color: '#777777' }}>18 Chem. d'Alba</p>
                  <p style={{ color: '#777777' }}>82440 Réalville</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#F2E8CF' }}>
                  <FaEnvelope style={{ color: '#8B5E34' }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: '#2D5A27' }}>Email</h4>
                  <p className="text-lg font-semibold">contact@laurent-mahieux.fr</p>
                  <p className="text-sm" style={{ color: '#777777' }}>Nous répondons sous 24h</p>
                </div>
              </div>
              
              {/* Horaires */}
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#F2E8CF' }}>
                  <FaClock style={{ color: '#8B5E34' }} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: '#2D5A27' }}>Horaires d'ouverture</h4>
                  <p style={{ color: '#777777' }}>Lundi - Vendredi : 8h00 - 18h00</p>
                  <p style={{ color: '#777777' }}>Samedi : 9h00 - 16h00</p>
                  <p style={{ color: '#777777' }}>Dimanche : Fermé</p>
                </div>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-3" style={{ color: '#2D5A27' }}>Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: '#F2E8CF' }}
                >
                  <FaFacebook style={{ color: '#8B5E34' }} />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: '#F2E8CF' }}
                >
                  <FaInstagram style={{ color: '#8B5E34' }} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#2D5A27' }}>Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block mb-1 font-medium" style={{ color: '#2D5A27' }}>Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{ borderColor: '#DDDDDD', color: '#222222' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium" style={{ color: '#2D5A27' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{ borderColor: '#DDDDDD', color: '#222222' }}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="telephone" className="block mb-1 font-medium" style={{ color: '#2D5A27' }}>Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  style={{ borderColor: '#DDDDDD', color: '#222222' }}
                />
              </div>
              
              <div>
                <label htmlFor="sujet" className="block mb-1 font-medium" style={{ color: '#2D5A27' }}>Sujet</label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  style={{ borderColor: '#222222', color: '#222222' }}
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="information">Demande d'information</option>
                  <option value="rendez-vous">Prise de rendez-vous</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium" style={{ color: '#2D5A27' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  style={{ borderColor: '#DDDDDD', color: '#222222' }}
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3 rounded-md font-medium transition-all"
                  style={{ 
                    backgroundColor: formStatus === 'submitting' ? '#AAAAAA' : '#8B5E34',
                    color: '#FFFFFF'
                  }}
                >
                  {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
                
                {formStatus === 'success' && (
                  <p className="mt-4 p-3 rounded-md text-center" style={{ backgroundColor: '#E8F5E9', color: '#2D5A27' }}>
                    Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                  </p>
                )}
                
                {formStatus === 'error' && (
                  <p className="mt-4 p-3 rounded-md text-center" style={{ backgroundColor: '#FFEBEE', color: '#C62828' }}>
                    Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ultérieurement.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
