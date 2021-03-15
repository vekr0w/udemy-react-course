import React from 'react';

import styles from './Person.module.css';


const person = (props) => {

  return (
    //<div className="Person" style={style}>
    <div className={styles.Person}>
      < p onClick={props.click} > I'm a {props.name} and I am {props.age} years old!</p>
      < p > {props.children}</p >
      <input type="text"
        onChange={props.changed}
        value={props.name} />
    </div>
  )
};

export default person;