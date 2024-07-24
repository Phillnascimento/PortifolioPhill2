import React, { useState, useTransition, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TabButton from './TabButton';
import SkillsContent from './SkillsContent';
import EducationContent from './EducationContent';
import CertificationsContent from './CertificationsContent';

const TAB_DATA = [
  {
    title: 'Habilidades',
    id: 'skills',
    content: <SkillsContent />,
  },
  {
    title: 'Educação',
    id: 'education',
    content: <EducationContent />,
  },

];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = useCallback((id: string) => {
    startTransition(() => {
      setTab(id);
    });
  }, []);

  return (
    <section className="text-white bg-gray-800 py-16 px-4 sm:px-8 md:px-12 lg:px-6" id="about">
      <div className="max-w-[1200px] mx-auto"> {/* Container Centralizado com largura máxima */}
        <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
          <motion.div
            className="rounded-image overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/image/phill.jpg"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
              alt="Homem negro usando óculos escuros, cabelo curto bem cortado, pele lisa e maxilar geométrica, vestindo uma camiseta branca com um sobretudo preto. O fundo da imagem está desfocado."
            />
          </motion.div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Quem Sou
            </motion.h2>
            <motion.p
              className="text-base lg:text-lg mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Olá! Sou Phill Nascimento, um Product Designer apaixonado por criar soluções que transformam a experiência do usuário e negócios.
            </motion.p>
            <motion.p
              className="text-base lg:text-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Atualmente, trabalho na Pris Software, uma startup que oferece soluções inovadoras para remuneração variável de curto e longo prazo para multinacionais. Na Pris, lidero squads de desenvolvimento focados na melhoria contínua do sistema SaaS web e mobile, sempre com o objetivo de proporcionar a melhor experiência para os nossos usuários.
            </motion.p>
            <div className="flex flex-wrap justify-start mt-8 gap-4">
              {TAB_DATA.map((tabData) => (
                <TabButton
                  key={tabData.id}
                  selectTab={() => handleTabChange(tabData.id)}
                  active={tabData.id === tab}
                >
                  {tabData.title}
                </TabButton>
              ))}
            </div>
            <AnimatePresence>
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
