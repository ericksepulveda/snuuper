import React, { Component } from 'react';
import './App.css';
import { getCategories } from './api/client'
import { Route } from 'react-router-dom';
import Category from './Category'
import Cart from './Cart'
import Links from './Links'

class App extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    const _categories = await getCategories()
    this.setState({
      categories: _categories,
      cart: emptyCart(_categories)
    })
  }

  updateCart = (category, item, q) => {
    // TODO: LocalStorage or some way of persisting this
    this.setState((prevState) => ({
      ...prevState,
      cart: {
        ...prevState.cart,
        [category]: { item, q }
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.test}>Shopping Cart</h1>
        <Links categories={this.state.categories}/>
        {this.state.categories.map(category => (
          <Route key={category} path={`/${category}`} render={() => (
            <Category updateCart={this.updateCart} category={category} cart={this.state.cart[category]}/>
          )}/>
        ))}
        <Route exact path="/" render={() => (
          <Cart cart={this.state.cart}/>
        )}/>
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