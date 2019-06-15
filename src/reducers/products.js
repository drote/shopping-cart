import product from './product';

const byId = (state = {}, action) => {
	let newState;

	switch (action.type) {
		case 'PRODUCTS_FETCHED':
			newState = {};
			action.products.forEach(p => newState[p.id] = p);
			return newState;
		case 'PRODUCT_ADDED':
		case 'PRODUCT_EDITED':
		case 'ADD_PRODUCT_TO_CART':
			return {
				...state,
				[action.product.id]: product(state[action.product.id], action)
			}
		case 'PRODUCT_DELETED':
			newState = { ...state };
			delete newState[action.id];
			return newState;
		default:
			return state;
	}
}

const allIds = (state = [], action) => {
	switch (action.type) {
		case 'PRODUCTS_FETCHED':
			return action.products.map(p => p.id);
		case 'PRODUCT_DELETED':
			return state.filter(p => p !== action.id);
		case 'PRODUCT_ADDED':
			return [ ...state, action.product.id ];
		default:
			return state;
	}
}

export const getAllProducts = (state) => {
	return state.products.allIds.map(pId => state.products.byId[pId])
}

const products = (state = {}, action) => {
	return {
		byId: byId(state.byId, action),
		allIds: allIds(state.allIds, action)
	}
}

export default products;
