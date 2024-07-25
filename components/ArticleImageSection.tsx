import React from 'react';
import Image from 'next/image';
import Container from './Container';

type ArticleImageSectionProps = {
  thumbnail: string;
};

const ArticleImageSection: React.FC<ArticleImageSectionProps> = ({ thumbnail }) => {
  return (
    <Container>
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-lg mt-8"> {/* Adicionado mt-6 para margem superior */}
        <Image
          className="object-contain w-full h-auto" // Responsivo com 'object-contain' e 'w-full h-auto'
          src={thumbnail}
          placeholder="blur"
          blurDataURL={thumbnail}
          layout="responsive"
          width={1200}
          height={800} // Ajuste a altura conforme necessário para manter a proporção
          alt="article cover"
          priority
        />
      </div>
    </Container>
  );
};

export default ArticleImageSection;
