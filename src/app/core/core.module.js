import { AccessTokenService } from './services/access-token.service';
import { ApiService } from './services/api.service';
import { LogService } from './services/log.service';
import { NavigationService } from './services/navigation.service';

import rootReducer from './reducers/root.reducer';

export function module() {
  return {
    services: {
      'core.services.accessTokenService': {
        class: AccessTokenService,
        public: true,
        arguments: [{ $ref: 'core.services.logService' }, 'accessToken']
      },
      'core.services.apiService': {
        class: ApiService,
        public: true,
        arguments: [
          {
            BASE_URL: '/api'
          },
          { $ref: 'core.services.accessTokenService' },
          { $ref: 'core.services.navigationService' }
        ]
      },
      'core.services.logService': {
        class: LogService,
        public: true
      },
      'core.services.navigationService': {
        class: NavigationService,
        public: true
      }
    },
    rootReducer
  };
}
