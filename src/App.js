import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dff', name: 'Shankha', age: '25' },
      { id: 'ddg', name: 'Aditya', age: '24' },
      { id: 'sgsgsg', name: 'Sayantan', age: '27' }
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonhandler = personIndex => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonhandler(index)}
              ></Person>
            );
          })}
        </div>
      );
    }
    return (
      <div className='App'>
        <h1>Hi I am a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
