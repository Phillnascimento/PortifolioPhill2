import React from 'react';
import { motion } from 'framer-motion';

const CertificationsContent = () => {
  return (
    <motion.ul
      className="list-disc pl-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        AWS Cloud Practitioner
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Google Professional Cloud Developer
      </motion.li>
    </motion.ul>
  );
};

export default CertificationsContent;