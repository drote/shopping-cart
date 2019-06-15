import cart from './cart';
import products from './products';
import ui from './ui';

const reducer = (state={}, action) => {
	return {
		cart: cart(state.cart, action),
		products: products(state.products, action),
		ui: ui(state.ui, action)
	}
}

export default reducer;
