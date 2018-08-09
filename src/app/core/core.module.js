import reducers from './reducers';
import coreStore from './stores/core.store';

export function module() {
  return {
    services: {},
    store: coreStore(reducers)
  };
}
