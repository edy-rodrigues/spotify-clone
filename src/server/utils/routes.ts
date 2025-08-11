import { EnvConfiguration } from '@/server/env/env-configuration';

type RoutesProps = {
  getSearchUrlProps: {
    locale: string;
    term: string;
  };
  getArtistUrlProps: {
    locale: string;
    artistId: string;
  };
};

export class Routes {
  public static getCurrentBaseUrl(locale: string): string {
    const env = EnvConfiguration.getInstance();

    return `${env.app.baseUrl}/${locale}`;
  }

  public static getHomePageUrl(locale: string): string {
    return this.getCurrentBaseUrl(locale);
  }

  public static getInitialSearchUrl(locale: string): string {
    const baseUrl = this.getCurrentBaseUrl(locale);

    return `${baseUrl}/search`;
  }

  public static getSearchUrl(props: RoutesProps['getSearchUrlProps']): string {
    const { locale, term } = props;

    const baseUrl = this.getCurrentBaseUrl(locale);

    return `${baseUrl}/search/${term}`;
  }

  public static getArtistUrl(props: RoutesProps['getArtistUrlProps']): string {
    const { locale, artistId } = props;

    const baseUrl = this.getCurrentBaseUrl(locale);

    return `${baseUrl}/artist/${artistId}`;
  }
}
