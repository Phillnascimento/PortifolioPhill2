import { convertToArticleList, getAllArticles, notion } from 'utils/notion';
import { Layout } from 'layouts/Layout';
import HeroHeader from 'components/HeroHeader';
import Container from 'components/Container';
import { Fragment, useState } from 'react';
import { filterArticles } from 'utils/filterArticles';
import Category from 'components/Category';
import ArticleCard from 'components/ArticleCard';
import AboutSection from 'components/AboutSection';
import ContactForm from 'components/ContactForm';
import dynamic from 'next/dynamic';

export default function Index(props) {
  const { articles, categories } = props;

  const [selectedTag, setSelectedTag] = useState<string>(null);
  const filteredArticles = filterArticles(articles, selectedTag);
  const HeroHeader = dynamic(() => import('components/HeroHeader'), {ssr:false})

  const handleSubmit = (data: { email: string; subject: string; message: string }) => {
    // Lógica para enviar o formulário
    console.log(data);
  };

  return (
    <Layout>
      <HeroHeader />
      <section id="about">
        <AboutSection />
      </section>

      <section id="projects" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-wrap justify-center my-8 text-3xl font-bold text-gray-900">
          {!selectedTag ? 'Meus Projetos' : `Cases ${selectedTag}`}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {categories.map(tag => (
            <Category
              tag={tag}
              key={tag}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          ))}
        </div>
        <div className="py-8">
          <div className="grid gap-10 lg:gap-12 sm:grid-cols-2">
            {filteredArticles.map(article => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </section>


    </Layout>
  );
}

const fetchPageBlocks = (pageId: string) => {
  return notion.blocks.children.list({ block_id: pageId }).then(res => res.results);
};

export const getStaticProps = async () => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);

  const blocks = await fetchPageBlocks(data[0].id);

  const { articles, categories } = convertToArticleList(data);

  return {
    props: {
      data,
      blocks,
      articles,
      categories
    },
    revalidate: 60 * 60
  };
}