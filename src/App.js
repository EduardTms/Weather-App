import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'location',
      searchfield: ''
    }
  }

  onSearchChange(event) {
    // this.setState({ searchField: event.target.value });
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <Search searchChange={this.onSearchChange}/>
      </div>
    );
  }
  
}

export default App;
