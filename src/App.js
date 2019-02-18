import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  fetchinData(){
    const apiKey = '41b2b87caf3db8efef7f70b9c08b04bf'
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render(){
    var { isLoaded, items } = this.state
    if (!isLoaded){
      return(
        <div>Loading...</div>
      )
    } else {
      return(
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} | {item.email}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default App;
