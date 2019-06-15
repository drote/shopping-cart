const cart = (state={}, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT_TO_CART':
			return {
				...state,
				[action.product.id]: (state[action.product.id] || 0) + 1,
			}
		case 'PRODUCT_DELETED':
			let newState = {...state};
			delete newState[action.id];
			return newState;
		default:
			return state;
	}
};

export const getCartProducts = (state) => {
	return Object.keys(state.cart).map(pId => (
		{...state.products.byId[pId], quantity: state.cart[pId]}
	));
}

export default cart;
