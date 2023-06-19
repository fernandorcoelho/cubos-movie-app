export const getVoteAveragePercentage = (voteAverage: number) => {
  if (!voteAverage) {
    return '-';
  }

  const voteAveragePercentage = Math.round(voteAverage * 10);

  return `${voteAveragePercentage}%`;
};
