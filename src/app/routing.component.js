import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import Routing from './routing.template';

class RoutingComponent extends PureComponent {
  render() {
    return <Routing />;
  }
}

export default withRouter(RoutingComponent);
