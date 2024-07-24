import { Article } from 'utils/types';
import Image from 'next/image';
import slugify from 'slugify';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  return (
    <a
      href={`/blog/${slug}`}
      className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-2 my-4 flex flex-col"
    >
      <div className="relative w-full pt-[56.25%]">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
        <Image
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
          src={article.thumbnail}
          blurDataURL={article.thumbnail}
          objectFit="cover"
          placeholder="blur"
          layout="fill"
          alt={'article cover'}
        />
      </div>
      <div className="px-6 py-4 bg-white flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>
        <div className="flex flex-wrap space-x-2 text-gray-400">
          {article.categories.map(category => (
            <div key={category} className="font-semibold">{category}</div>
          ))}
        </div>
      </div>
    </a>
  );
}
