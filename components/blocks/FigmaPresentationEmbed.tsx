// components/FigmaPresentationEmbed.tsx

import React from 'react';

const FigmaPresentationEmbed: React.FC<{ url: string }> = ({ url }) => {
  // Adiciona parâmetros para apresentações do Figma
  const embedUrl = `${url}&embed_host=notion&chrome=0`;

  return (
    <div className="relative w-full h-0 pb-[210%] md:pb-[120%]"> {/* Mantém a proporção 16:9 */}
      <iframe
        title="Figma Presentation Embed"
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
};

export default FigmaPresentationEmbed;
