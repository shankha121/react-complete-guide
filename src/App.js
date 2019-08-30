import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Shankha', age: '25' },
			{ name: 'Aditya', age: '24' },
			{ name: 'Sayantan', age: '27' }
		]
	};

	switchNameHandler = newName => {
		this.setState({
			persons: [
				{ name: newName, age: '25' },
				{ name: 'Aditya', age: '24' },
				{ name: 'Sayantan', age: '27' }
			]
		});
	};
	nameChangedHandler = event => {
		this.setState({
			persons: [
				{ name: 'S.S.Ghosh', age: '25' },
				{ name: event.target.value, age: '24' },
				{ name: 'Sayantan', age: '27' }
			],
			otherState: 'Some Other value',
			showPersons: false
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	deletePersonhandler = personIndex => {
		const persons = this.state.persons;
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
								name={person.name}
								age={person.age}
								click={() => this.deletePersonhandler(index)}></Person>
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
