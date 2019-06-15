const ui = (state={}, action) => {
	switch (action.type) {
		case 'TOGGLE_PRODUCT_EDIT_FORM':
		case 'PRODUCT_EDITED':
			return {
				...state,
				editing: state.editing === action.id ? null : action.id
			}
		case 'TOGGLE_ADD_FORM':
		case 'PRODUCT_ADDED':
			return {
				...state,
				showAddForm: !state.showAddForm
			}
		default:
		 return state;
	}
}

export default ui;
