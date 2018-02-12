import React, { Component } from 'react';

class Item extends Component {
  clicked = () => {
    const { changeSelected, item } = this.props
    changeSelected(item)
  }

  render() {
    const { item, isselected } = this.props
    return (
      <div className={`item ${isselected ? "item-selected" : "" }`} onClick={this.clicked}>
        <h4>{truncate(item.name)}</h4>
        <img src={item.url} alt={item.excerpt} width="100" height="100"/>
        <div className="price">${item.price}</div>
        <p>{truncate(item.excerpt)}</p>
      </div>
    )
  }
}

function truncate(s) {
  return s.length > 28 ? `${s.slice(0, 25)}...` : s;
}

export default Item;