import { AVAILABLE_LANGUAGES } from '@/config/languagues';

export class I18n {
  public static getLanguageName(locale: string): string {
    const name = AVAILABLE_LANGUAGES.find((language) => language.symbol === locale)?.name;

    return name || 'Unknown';
  }
}
