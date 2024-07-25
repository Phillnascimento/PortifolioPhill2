// components/blocks/ImageWithModal.tsx
import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithModal: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="relative cursor-pointer" onClick={openModal}>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={1200}
          height={800} // Ajuste conforme necessário
          className="object-contain rounded-lg"
        />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative bg-white p-4 rounded-lg">
            <Image
              src={src}
              alt={alt}
              layout="intrinsic"
              width={1200}
              height={800} // Ajuste conforme necessário
              className="object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithModal;
