import { z } from 'zod';

export class EnvValidator {
  public static validate(): void {
    const envSchema = z.object({
      NODE_ENV: z.enum(['development', 'production', 'test']),

      // App
      BASE_URL: z.string(),

      // Spotify
      SPOTIFY_CLIENT_ID: z.string(),
      SPOTIFY_CLIENT_SECRET: z.string(),
    });

    const result = envSchema.safeParse(process.env);

    if (result.success) {
      return;
    }

    throw result.error;
  }
}
