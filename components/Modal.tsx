// components/Modal.tsx
import React from 'react';
import Image from 'next/image';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-screen-lg max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
