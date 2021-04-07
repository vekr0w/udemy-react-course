import React from 'react';
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <Navigationitem link="/" active>Burger Builder</Navigationitem>
    <Navigationitem link="/">Checkout Page</Navigationitem>
  </ul>
);

export default navigationItems;