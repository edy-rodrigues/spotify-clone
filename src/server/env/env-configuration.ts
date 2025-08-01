interface EnvConfigurationProps {
  env: 'development' | 'production' | 'test';
  app: {
    baseUrl: string;
  };
  spotify: {
    clientId: string;
    clientSecret: string;
  };
}

export class EnvConfiguration {
  private props: EnvConfigurationProps;
  private static instance: EnvConfiguration;

  public constructor() {
    this.props = {
      env: process.env.NODE_ENV,
      app: {
        baseUrl: process.env.BASE_URL,
      },
      spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      },
    };
  }

  public static getInstance(): EnvConfiguration {
    if (!this.instance) {
      this.instance = new EnvConfiguration();
    }

    return this.instance;
  }

  public static initialize(): EnvConfiguration {
    return this.getInstance();
  }

  public get env(): EnvConfigurationProps['env'] {
    return this.props.env;
  }

  public get app(): EnvConfigurationProps['app'] {
    return this.props.app;
  }

  public get spotify(): EnvConfigurationProps['spotify'] {
    return this.props.spotify;
  }

  public toObject(): EnvConfigurationProps {
    return this.props;
  }
}
