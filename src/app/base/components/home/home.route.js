import Loadable from 'react-loadable';
import Loading from '../../../core/components/loading/loading.component';

export default Loadable({
  loader: () => import('./home.component'),
  loading: Loading
});
