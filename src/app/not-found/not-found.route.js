import Loadable from 'react-loadable';
import Loading from '../core/loading/loading.component';

export default Loadable({
  loader: () => import('./not-found.component'),
  loading: Loading
});
