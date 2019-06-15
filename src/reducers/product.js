const product = (state={}, action) => {
	switch (action.type) {
		case 'PRODUCT_ADDED':
		case 'PRODUCT_EDITED':
		case 'ADD_PRODUCT_TO_CART':
			return action.product;
		default:
			return state;
	}
}

export default product;