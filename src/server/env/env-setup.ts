import { EnvConfiguration } from '@/server/env/env-configuration';
import { EnvValidator } from '@/server/env/env-validator';

export class EnvSetup {
  public static start(): void {
    EnvValidator.validate();
    EnvConfiguration.initialize();
  }
}

EnvSetup.start();
