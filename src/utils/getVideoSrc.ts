export const getVideoSrc = (videoURL: string) => {
  try {
    return `https://www.youtube.com/embed/${videoURL}`;
  } catch (error) {
    throw new Error(error);
  }
};
