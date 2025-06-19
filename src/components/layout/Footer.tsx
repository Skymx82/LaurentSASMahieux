import React from 'react';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#2D5A27' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coordonnées */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: '#F2E8CF' }}
            >
              Laurent SAS MAHIEUX
            </h3>
            <div className="space-y-3">
              <p 
                className="flex items-center space-x-3"
                style={{ color: '#FFFFFF' }}
              >
                <FaMapMarkerAlt />
                <span>18 Chem. d'Alba, 82440 Réalville</span>
              </p>
              <p 
                className="flex items-center space-x-3"
                style={{ color: '#FFFFFF' }}
              >
                <FaPhone />
                <a href="tel:0630744863">06 30 74 48 63</a>
              </p>
              <p 
                className="flex items-center space-x-3"
                style={{ color: '#FFFFFF' }}
              >
                <FaEnvelope />
                <a href="mailto:contact@laurent-mahieux.fr">contact@laurent-mahieux.fr</a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl transition-transform hover:scale-110"
                style={{ color: '#F2E8CF' }}
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl transition-transform hover:scale-110"
                style={{ color: '#F2E8CF' }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: '#F2E8CF' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  href="#about"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  href="#services"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#realisations"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: '#F2E8CF' }}
            >
              Horaires d'ouverture
            </h3>
            <div className="space-y-2" style={{ color: '#FFFFFF' }}>
              <p>Lundi - Vendredi: 8h00 - 18h00</p>
              <p>Samedi: 9h00 - 16h00</p>
              <p>Dimanche: Fermé</p>
            </div>
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(139, 94, 52, 0.3)' }}>
              <p 
                className="text-sm"
                style={{ color: '#F2E8CF' }}
              >
                Devis gratuit pour tous vos projets d'aménagement paysager et d'entretien d'espaces verts.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="pt-8 mt-8 border-t text-center"
          style={{ borderColor: 'rgba(242, 232, 207, 0.2)', color: '#FFFFFF' }}
        >
          <p>© {currentYear} Laurent SAS MAHIEUX - Tous droits réservés</p>
          <p className="text-sm mt-2" style={{ color: '#F2E8CF' }}>
            Paysagiste et entretien d'espaces verts à Réalville et ses environs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
