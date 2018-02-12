import React, { Component } from 'react';
import { get } from './api/client'
import Item from './Item'

class Category extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const items = await get(this.props.category)
    this.setState({ items })
  }

  changeSelected = (item) => {
    const { updateCart, category, cart } = this.props
    if ( cart && cart.item && item.id === cart.item.id )
      updateCart(category, null, 0)
    else
      updateCart(category, item, 0)
  }

  updateQ = (e) => {
    const { updateCart, category, cart } = this.props
    updateCart(category, cart.item, Number(e.target.value))
  }

  render() {
    const { category, cart } = this.props
    const { items } = this.state
    const selectedItem = cart && cart.item

    return (
      <div>
        <h2>
          {selectedItem ? (
              <div>
                {`${selectedItem.name} `}
                <input type="number" onChange={this.updateQ} value={cart.q === 0 ? "" : cart.q}/>{` x $${selectedItem.price} = $${cart.q * selectedItem.price}`}
              </div>
            ) : `${category[0].toUpperCase() + category.slice(1)}`
          }
        </h2>
        <div className="items-container">
          {items.map(i => (
            <Item item={i} key={i.id} isselected={selectedItem && selectedItem.id === i.id} changeSelected={this.changeSelected}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;