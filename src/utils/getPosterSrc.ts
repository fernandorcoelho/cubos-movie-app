const IMAGE_PATH = 'https://image.tmdb.org/t/p/w';

export const getPosterSrc = (width: number, path: string) => {
  const imageSrc = `${IMAGE_PATH}${width}${path}`;

  return imageSrc;
};
