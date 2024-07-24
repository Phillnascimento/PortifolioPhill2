import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroHeader: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {isClient && (
        <>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
            src="/heroVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
            src="/heroVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-20 pb-20 md:pb-24">
        <div className="w-full md:w-4/12 text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            Redução de 37% dos chamados para a equipe de CS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg sm:text-xl lg:text-2xl mb-8"
          >
            Descubra como a aplicação de técnicas de Product Design pode transformar a experiência do usuário, diminuir a carga da sua equipe de CS em 37%, economizar recursos e aumentar a percepção de valor pelos clientes.
          </motion.p>
          <div className="flex flex-col space-y-10">
            <Link href="/blog/reducao-de-37percent-dos-chamados-para-a-equipe-de-cs">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-800 hover:bg-blue-600 text-white font-medium py-3 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-60"
              >
                Saiba Mais
              </motion.a>
            </Link>
            <Link href="#projects">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white font-bold py-3 px-5 rounded-lg transition text-center w-60"
              >
                Ver outros projetos
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;