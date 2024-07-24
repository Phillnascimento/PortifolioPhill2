import React from 'react';
import Image from 'next/image';
import Container from './Container';

type ArticleImageSectionProps = {
  thumbnail: string;
};

const ArticleImageSection: React.FC<ArticleImageSectionProps> = ({ thumbnail }) => {
  return (
    <Container>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={thumbnail}
          placeholder="blur"
          blurDataURL={thumbnail}
          layout="fill"
          alt="article cover"
          priority
        />
      </div>
    </Container>
  );
};

export default ArticleImageSection;
