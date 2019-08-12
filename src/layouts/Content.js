import React, { PureComponent } from 'react';
import Routers from '../router';

class Content extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <Routers />
      </React.Fragment>
    );
  }
}

export default Content;
