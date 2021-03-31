import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxilliary/Auxilliary';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
           </p>
        <p > {this.props.children}</p>
        <input type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>);
  }
};

// Person.propTypes = {
//   click: PropTypes.func,
//   changed: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number
// };

export default withClass(Person, classes.Person);