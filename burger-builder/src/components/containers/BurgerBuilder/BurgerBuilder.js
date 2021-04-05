import React, { Component } from 'react';

import Aux from '../../../hoc/Auxilliary';
import Burger from '../../Burger/Burger';

class BurgerBuilder extends Component {


  render() {
    return (
      <Aux>
        <Burger />
        <div>Build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;