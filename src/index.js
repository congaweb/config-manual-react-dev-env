import { logger, getRandomMinMax, transformText } from './utils';

logger(
  getRandomMinMax(),
  transformText(`
    font-size: 5rem;
    font-weight: 700;
  `)
);

logger(
  getRandomMinMax(50, 99),
  transformText(`
    font-size: 5rem;
    font-weight: 700;
    color: salmon;
  `)
);
