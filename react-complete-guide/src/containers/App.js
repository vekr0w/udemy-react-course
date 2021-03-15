import React, { Component } from 'react';
import styles from './App.module.css';
import Person from "../components/Persons/Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: 'D11', name: 'Max', age: 28 },
      { id: 'D12', name: 'Manuel', age: 29 },
      { id: 'D13', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); -> get a new copy of the persons array not using reference. slice or spread both work fine.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }



  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = styles.Red;

    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }


    return (

      <div className={styles.App}>
        <h1>Hi, I'm a react App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle persons
          </button>

        {persons}
      </div>

    );
  }
}

export default App;
