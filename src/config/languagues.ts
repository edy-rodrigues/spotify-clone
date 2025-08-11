export type Language = {
  symbol: string;
  name: string;
  nativeName: string;
};

export const AVAILABLE_LANGUAGES: Language[] = [
  {
    symbol: 'en',
    name: 'English',
    nativeName: 'English',
  },
  {
    symbol: 'pt-BR',
    name: 'Português do Brasil',
    nativeName: 'Brazilian Portuguese',
  },
  {
    symbol: 'kr',
    name: 'Korean',
    nativeName: '한국어',
  },
];
