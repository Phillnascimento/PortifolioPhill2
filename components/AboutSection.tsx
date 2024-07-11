import React, { useState, useTransition } from 'react';
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
  {
    title: 'Certificado',
    id: 'certifications',
    content: <CertificationsContent />,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white bg-gray-800 py-16 px-4 sm:px-8 md:px-12 lg:px-16"
      id="about"
    >
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
            className="text-base lg:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meu nome é Phill Nascimento, um Designer de UI/UX dedicado e apaixonado pela
            criação de interfaces incríveis e funcionais. Minha paixão é unir estética
            visual elegante com a usabilidade eficaz, resultando em experiências que não
            apenas encantam os olhos, mas também facilitam a vida dos usuários e melhoram
            o desempenho do negócio.
          </motion.p>
          <div className="flex flex-wrap justify-start mt-8 gap-4">
            {TAB_DATA.map((tab) => (
              <TabButton
                key={tab.id}
                selectTab={() => handleTabChange(tab.id)}
                active={tab.id === tab}
              >
                {tab.title}
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
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;