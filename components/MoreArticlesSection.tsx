import React from 'react';
import Link from 'next/link';
import Container from './Container';
import ArticleCard from './ArticleCard';
import { Article } from 'utils/types';

type MoreArticlesSectionProps = {
  title: string;
  linkText: string;
  linkHref: string;
  articles: Article[];
};

const MoreArticlesSection: React.FC<MoreArticlesSectionProps> = ({
  title,
  linkText,
  linkHref,
  articles
}) => {
  return (
    <div className="py-12 border-t">
      <Container>
        <div className="flex items-center justify-between my-8">
          <div className="text-3xl font-bold text-gray-900">{title}</div>
          <Link href={linkHref}>
            <span className="font-semibold text-gray-900 cursor-pointer">
              {linkText} ➜
            </span>
          </Link>
        </div>
        <div className="grid gap-10 lg:gap-12 sm:grid-cols-2">
          {articles.map(article => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MoreArticlesSection;