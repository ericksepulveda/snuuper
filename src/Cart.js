import React from 'react';

function Cart(props) {
  const { cart } = props
  if ( ! cart || ! Object.keys(cart).filter(category => cart[category].q ).length )
    return (
      <div>
        <h2>EMPTY CART</h2>
        <p>Go buy some stuff!</p>
      </div>
  )

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Q</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(cart)
            .filter(category => cart[category].q > 0)
            .map(category => (
              <tr key={category}>
                <td>{cart[category].item.name}</td>
                <td>{cart[category].item.price}</td>
                <td>{cart[category].q}</td>
                <td>{cart[category].item.price * cart[category].q}</td>
              </tr>
            ))}
          <tr>
            <td className="grand-total" colSpan="3">Total</td>
            <td className="grand-total">{totalFromCart(cart)}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <button className="buy-button">Buy</button>
    </div>
  )
}

function totalFromCart(cart) {
  return Object.keys(cart)
    .filter(category => cart[category].q > 0)
    .reduce((total, category) => {
      return total + cart[category].q * cart[category].item.price
    }, 0)
}

export default Cart;
