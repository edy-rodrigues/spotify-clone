export const locales = ['en', 'pt-BR', 'kr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt-BR';
