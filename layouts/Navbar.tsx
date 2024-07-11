import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from 'components/Container';
import siteData from 'siteData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Socials from 'components/Socials';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = router.pathname === '/';

  return (
    <div className="fixed z-50 w-full bg-white border-b shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/" passHref>
            <div className="text-xl font-bold cursor-pointer">{siteData?.author}</div>
          </Link>
          <nav className="hidden sm:flex sm:items-center sm:justify-center space-x-8">
            <Link href="/#about">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 cursor-pointer ${
                  router.asPath === '/#about' ? 'text-primary-500' : ''
                }`}
              >
                <span>Quem sou</span>
              </motion.div>
            </Link>
            <Link href="/#projects">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 cursor-pointer ${
                  router.asPath === '/#projects' ? 'text-primary-500' : ''
                }`}
              >
                <span>Projetos</span>
              </motion.div>
            </Link>
            <Link href="/#contact">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 cursor-pointer ${
                  router.asPath === '/#contact' ? 'text-primary-500' : ''
                }`}
              >
                <span>Contato</span>
              </motion.div>
            </Link>
            <Socials />
          </nav>
          <div className="sm:hidden">
            <button
              className="block px-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:text-primary-500"
              onClick={toggleMenu}
            >
              <motion.span
                className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Menu
              </motion.span>
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-16 left-0 w-full bg-white border-b py-4 px-4 space-y-2 shadow-md"
              >
                <Link href="/#about">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 cursor-pointer ${
                      router.asPath === '/#about' ? 'text-primary-500' : ''
                    }`}
                  >
                    <span>Quem sou</span>
                  </motion.div>
                </Link>
                <Link href="/#projects">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 cursor-pointer ${
                      router.asPath === '/#projects' ? 'text-primary-500' : ''
                    }`}
                  >
                    <span>Projetos</span>
                  </motion.div>
                </Link>
                <Link href="/#contact">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 cursor-pointer ${
                      router.asPath === '/#contact' ? 'text-primary-500' : ''
                    }`}
                  >
                    <span>Contato</span>
                  </motion.div>
                </Link>
                <div className="flex items-center justify-center">
                  <Socials />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;