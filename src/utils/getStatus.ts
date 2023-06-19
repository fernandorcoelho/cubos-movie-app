import { StatusProps } from 'interfaces/movieDetailsResponseDTO';

export const getStatus = (status: StatusProps) => {
  const lowerCaseStatus = status?.toLowerCase();

  switch (lowerCaseStatus) {
    case 'released':
      return 'Lançado';
    case 'canceled':
      return 'cancelado';
    case 'in production':
      return 'Em Produção';
    case 'post production':
      return 'Pós Produção';
    case 'rumored':
      return 'Previsto';
  }
};
