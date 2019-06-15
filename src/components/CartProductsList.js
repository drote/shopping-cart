import React from 'react';
import CartProduct from './CartProduct';
import { getSumOfProducts } from '../lib/helpers';

const CartItemsList = ({ products }) => (
	<div className="cart">
		<h2>Your Cart</h2>
		{

			products.length > 0 ?

				<table className="cart-items">
					<thead>
				    <tr>
				      <th>Item</th>
				      <th>Quantity</th>
				      <th>Price</th>
				    </tr>
					</thead>
					<tbody>
				    {
				    	products.map(p =>
				    		<CartProduct
				    			key={p.id}
				    			{...p}
				    		/>
				    	)
				    }
				    <tr>
				      <td
				      	colSpan="3"
				      	className="total">
				      		Total: ${getSumOfProducts(products)}
				      </td>

				    </tr>
					</tbody>
				</table>

			:

				<div>
					<p>Your cart is empty</p>
	    		<p>Total: $0</p>
	    	</div>	
		}
    <a className="button checkout">Checkout</a>
	</div>
)

export default CartItemsList;
