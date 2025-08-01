declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // BOTH ENV VARIABLES
      NODE_ENV: 'development' | 'production' | 'test';

      // SERVER VARIABLES
      // App
      BASE_URL: string;

      // Spotify
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;

      // CLIENT VARIABLES
      // App
      NEXT_PUBLIC_BASE_URL: string;
    }
  }
}

export {};
