import languages from 'assets/json/languages.json';

export const getLanguage = (originalLanguage: string) => {
  const language = languages.find((item) => item.code === originalLanguage)?.name;

  return language;
};
