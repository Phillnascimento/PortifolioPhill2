import React, { Fragment } from 'react';
import ImageWithModal from './ImageWithModal'; // Ajuste o caminho conforme necessário
import Text from 'components/blocks/Text';
import AnchorLink from 'components/blocks/AnchorLink';
import CodeBlock from 'components/blocks/CodeBlock';

export function renderBlocks(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      const hasLink = value.text.some(text => text.type === 'text' && text.text.link);

      if (hasLink) {
        const linkText = value.text.map((text, index) => {
          if (text.type === 'text' && text.text.link) {
            const url = text.text.link.url;
            const isSupported = url.includes('youtube.com') || url.includes('youtu.be') || url.includes('play.google.com');

            return isSupported ? (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                {text.text.content}
              </a>
            ) : (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Acesse aqui
              </a>
            );
          }
          return (
            <span key={index}>
              <Text text={[text]} />
            </span>
          );
        });

        return <p className="leading-[28px] text-lg">{linkText}</p>;
      }

      return (
        <p className="leading-[28px] text-lg">
          <Text text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <div className="pt-16 text-3xl font-semibold">
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      );
    case 'heading_2':
      return (
        <div className="pt-8 text-2xl font-semibold">
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      );
    case 'heading_3':
      return (
        <div className="pt-8 text-xl font-semibold">
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="text-lg">
          <Text text={value.text} />
        </li>
      );
    case 'to_do':
      return (
        <div className="text-lg">
          <label htmlFor={id} className="flex items-center justify-start space-x-3">
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              checked={value?.checked}
              readOnly
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map(block => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption.length >= 1 ? value.caption[0].plain_text : '';
      return (
        <figure className="my-8">
          <ImageWithModal
            src={src}
            alt={caption ? caption : 'A visual depiction of what is being written about'}
          />
          {caption && <figcaption className="text-center mt-2">{caption}</figcaption>}
        </figure>
      );
    case 'code':
      return (
        <CodeBlock
          language={value.language}
          caption={value.caption.length >= 1 && value.caption[0].plain_text}
          code={value.text[0].text.content}
        />
      );
    case 'callout':
      return (
        <div className="flex p-3 space-x-4 bg-gray-100 rounded-lg">
          {value.icon && <span className="text-2xl">{value.icon.emoji}</span>}
          <div className="leading-[28px] text-base">
            <Text text={value.text} />
          </div>
        </div>
      );
    case 'table_of_contents':
      return <div>TOC</div>;
    case 'video':
      const url = value?.external?.url || '';
      const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
      const isGooglePlay = url.includes('play.google.com');

      console.log('Video URL:', url);

      return (
        <div className="relative overflow-hidden">
          {isYouTube ? (
            <iframe
              className="w-full h-96 md:h-[680px]"
              src={url.replace('watch?v=', 'embed/')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          ) : isGooglePlay ? (
            <iframe
              className="w-full h-96 md:h-[680px]"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded Google Play"
            />
          ) : (
            <p className="leading-[28px] text-lg">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Acesse aqui
              </a>
            </p>
          )}
        </div>
      );
    case 'quote':
      return (
        <blockquote className="p-4 rounded-r-lg bg-gray-50">
          <Text text={value.text} />
        </blockquote>
      );
    case 'divider':
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      );
    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
}
