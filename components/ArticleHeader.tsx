import React from 'react';

type ArticleHeaderProps = {
  publishedOn: string;
  modifiedDate?: string;
  title: string;
  summary: string;
};

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  summary
}) => {
  return (
    <div className="px-6 py-16 pt-16 pb-48 mx-auto -mb-48 text-center bg-gray-100 md:pb-96 md:-mb-96">
      <div className="max-w-3xl mx-auto">
          <div className="font-extrabold tracking-tight text-gray-900 text-w-4xl sm:text-4xl text-2xl">
          {title}
        </div>
        <div className="max-w-3xl mx-auto mt-3 text-xl leading-8 text-gray-500 sm:mt-4">
          {summary}
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;