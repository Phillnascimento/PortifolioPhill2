import React from 'react';
import Image from 'next/image';
import Container from './Container';

type ArticleImageSectionProps = {
  thumbnail: string;
};

const ArticleImageSection: React.FC<ArticleImageSectionProps> = ({ thumbnail }) => {
  return (
    <Container>
      <div className="relative w-[1200px] mx-auto overflow-hidden rounded-lg"> {/* Definido a largura fixa e arredondamento */}
        <Image
          className="object-contain w-full h-full" // Mantido 'object-contain' e removido 'absolute inset-0'
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
