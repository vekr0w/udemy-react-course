import React from 'react';

import NavigationItems from '../Navigationitems/Navigationitems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';



const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;