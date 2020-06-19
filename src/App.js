import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }


  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users })) 
  }

  handleChange = e =>{
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="page-title">Monsters Rolodex</h1>
        {/* Add console.log() as a call back in order to seee changes reflected as a user inputs a value */}
        <SearchBox placeholder='Search monsters...' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}



export default App;
