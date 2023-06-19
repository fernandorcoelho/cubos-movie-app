export const formatCurrency = (amount: number) => {
  if (isNaN(amount) || amount === 0 || !isFinite(amount)) {
    return '-';
  }

  const formatToUSD = new Intl.NumberFormat('pt-BR', {
    currency: 'USD',
    style: 'currency',
  });

  const formattedAmount = formatToUSD.format(amount);

  return formattedAmount;
};
