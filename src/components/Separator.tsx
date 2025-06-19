"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

interface SeparatorProps {
  backgroundColor?: string;
}

const Separator: React.FC<SeparatorProps> = ({ backgroundColor = '#FFFFFF' }) => {
  return (
    <div className="py-8" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '30%' }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent to-[#8B5E34]"
          ></motion.div>
          
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-4 p-3 rounded-full"
            style={{ backgroundColor: '#2D5A27' }}
          >
            <FaLeaf className="text-white text-xl" />
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '30%' }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-l from-transparent to-[#8B5E34]"
          ></motion.div>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#6A994E' }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separator;
