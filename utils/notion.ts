import { Client } from '@notionhq/client';
import slugify from 'slugify';

export const notion = new Client({
  auth: process.env.NOTION_SECRET
});

export const getAllArticles = async (databaseId: string) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'status',
        select: {
          equals: '✅ Published'
        }
      }
    });

    return response.results;
  } catch (error) {
    console.error('Error fetching all articles:', error);
    throw error;
  }
};

const mapArticleProperties = (article: any) => {
  const { id, properties } = article;

  return {
    id: id,
    title: properties?.title.title[0]?.plain_text || '',
    categories:
      properties?.categories?.multi_select.map((category: any) => category.name) || [],
    thumbnail:
      properties?.thumbnail?.files[0]?.file?.url ||
      properties?.thumbnail?.files[0]?.external?.url ||
      '/image-background.png',
    publishedDate: properties?.published?.date?.start,
    lastEditedAt: properties?.LastEdited?.last_edited_time,
    summary: properties?.summary?.rich_text[0]?.plain_text ?? ''
  };
};

export const convertToArticleList = (tableData: any) => {
  const categories: string[] = [];

  const articles = tableData.map((article: any) => {
    const { properties } = article;

    properties?.categories?.multi_select?.forEach((category: any) => {
      const { name } = category;
      if (!categories.includes(name) && name) {
        categories.push(name);
      }
    });

    return mapArticleProperties(article);
  });

  return { articles, categories };
};

export const getMoreArticlesToSuggest = async (databaseId: string, currentArticleTitle: string) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'status',
            select: {
              equals: '✅ Published'
            }
          },
          {
            property: 'title',
            text: {
              does_not_equal: currentArticleTitle
            }
          }
        ]
      }
    });

    const moreArticles = response.results.map((article: any) =>
      mapArticleProperties(article)
    );

    return shuffleArray(moreArticles).slice(0, 2);
  } catch (error) {
    console.error('Error fetching more articles to suggest:', error);
    throw error;
  }
};

export const getArticlePage = (data: any[], slug: string) => {
  return data.find(result => {
    if (result.object === 'page') {
      const resultSlug = slugify(
        result.properties.title.title[0].plain_text
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });
};

export function shuffleArray(array: any[]) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const getArticlePageData = async (page: any, slug: string, databaseId: string) => {
  let content: any[] = [];
  let title = '';

  try {
    title = page.properties.title.title[0]?.plain_text || '';

    const moreArticles: any[] = await getMoreArticlesToSuggest(databaseId, title);

    let blocks = await notion.blocks.children.list({
      block_id: page.id
    });

    content = [...blocks.results];

    while (blocks.has_more) {
      blocks = await notion.blocks.children.list({
        block_id: page.id,
        start_cursor: blocks.next_cursor
      });

      content = [...content, ...blocks.results];
    }

    return {
      ...mapArticleProperties(page),
      content,
      slug,
      moreArticles
    };
  } catch (error) {
    console.error('Error fetching article page data:', error);
    throw error;
  }
};
