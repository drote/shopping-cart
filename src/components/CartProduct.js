import React from 'react';

const CartItem = ({title, quantity, price}) => (
	<tr>
	  <td>{title}</td>
    <td>{quantity}</td>
    <td>${(price * quantity).toFixed(2)}</td>
  </tr>
)

export default CartItem;