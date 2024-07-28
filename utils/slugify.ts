import slugify from 'slugify';

export const createSlug = (title: string) => {
  const words = title.split(' ').slice(0, 4).join(' ');
  return slugify(words, {
    lower: true,
    remove: /[*+~.()'"!:@]/g
  });
};
