// components/FigmaFileEmbed.tsx
import React from 'react';

const FigmaFileEmbed: React.FC<{ url: string }> = ({ url }) => {
  // Adiciona parâmetros para arquivos do Figma
  // Assegure-se de que o URL está no formato correto para embed
  const embedUrl = `${url.replace('figma.com/file', 'figma.com/embed?embed_host=notion&chrome=0')}`;

  return (
    <div className="relative" style={{ paddingTop: '100%' }}>
      <iframe
        title="Figma File Embed"
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
};

export default FigmaFileEmbed;
