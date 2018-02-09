import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { get, categories } from './api/client'

class App extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    const _categories = await categories()
    this.setState({
      categories: _categories,
      cart: emptyCart(_categories)
    })
  }

  test = (async function() {
    const c = await get('electronics') 
    return  c
  })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.test}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

function emptyCart (categories) {
  return categories
    .map(category => ({ [category]: { q: 0 } }) )
    .reduce( (reduced, current) => ({ ...reduced, ...current }), {})
}