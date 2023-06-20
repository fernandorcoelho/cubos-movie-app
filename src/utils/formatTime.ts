export const formatTime = (value: number) => {
  const num = value;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  if (rhours === 0) {
    return `${rminutes}min`;
  }

  if (rminutes === 0) {
    return `${rhours}h`;
  }

  if (rhours === 0 && rminutes === 0) {
    return '-';
  }

  return `${rhours}h ${rminutes}min`;
};
