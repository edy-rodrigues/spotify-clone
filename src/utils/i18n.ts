import { AVAILABLE_LANGUAGES } from '@/config/languagues';

export class I18n {
  public static getLanguageName(locale: string): string {
    const name = AVAILABLE_LANGUAGES.find((language) => language.symbol === locale)?.name;

    return name || 'Unknown';
  }

  public static getPathnameWithoutLocale(currentPath: string): string {
    const allLocaleSymbols = AVAILABLE_LANGUAGES.map((lang) => lang.symbol);
    const pathSegments = currentPath.split('/').filter(Boolean);

    if (pathSegments.length > 0 && allLocaleSymbols.includes(pathSegments[0])) {
      return `/${pathSegments.slice(1).join('/')}`;
    }

    return currentPath;
  }
}
