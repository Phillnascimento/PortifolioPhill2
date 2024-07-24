import React from 'react';
import { motion } from 'framer-motion';

const SkillsContent = () => {
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
        <strong>Desenvolvimento de Produtos:</strong> Criação e otimização de soluções web e mobile.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Testes de Usabilidade:</strong> Condução de pesquisas e testes para garantir a eficiência e a usabilidade dos produtos.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Design Systems:</strong> Desenvolvimento e manutenção de sistemas de design consistentes e escaláveis.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Mapeamento da Jornada do Usuário:</strong> Análise e otimização das interações do usuário com o produto.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Design Thinking e Design Sprint:</strong> Aplicação de metodologias para inovação e solução de problemas complexos.
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="mb-4" // Adicionei espaçamento entre os itens
      >
        <strong>Desenvolvimento de MVP:</strong> Criação de produtos mínimos viáveis para validação rápida de ideias.
      </motion.li>
    </motion.ul>
  );
};

export default SkillsContent;
