import React from 'react';
import Image from 'next/image';
import Container from './Container';

type ArticleImageSectionProps = {
  thumbnail: string;
};

const ArticleImageSection: React.FC<ArticleImageSectionProps> = ({ thumbnail }) => {
  return (
    <Container>
      <div className="max-w-5xl px-6 mx-auto my-16 md:px-8">
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            src={thumbnail}
            placeholder="blur"
            blurDataURL={thumbnail}
            layout="fill"
            alt={'article cover'}
            priority
          />
        </div>
      </div>
    </Container>
  );
};

export default ArticleImageSection;