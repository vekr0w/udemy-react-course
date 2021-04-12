import React from 'react';

import NavigationItems from '../Navigationitems/Navigationitems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';



const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;