import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  //..
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;