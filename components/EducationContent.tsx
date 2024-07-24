import React from 'react';
import { motion } from 'framer-motion';

const EducationContent = () => {
  return (
    <motion.ul
      className="list-disc pl-4" // Aumentei o padding-left para ajustar o espaçamento
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Graduação em Marketing:</strong> Faculdade Pitagoras
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Curso de especialização:</strong> UX Unicórnio
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }} // Ajustei o delay para garantir a sequência
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Curso de especialização:</strong> Design Circuit - em andamento
      </motion.li>
    </motion.ul>
  );
};

export default EducationContent;
