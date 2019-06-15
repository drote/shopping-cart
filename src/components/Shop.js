import React, { Fragment } from 'react';
import CartProductsList from '../containers/CartProductsList';
import EditableProductList from '../containers/EditableProductList';
import FormToggle from '../containers/FormToggle';

const Shop = () => {
	return (
		<Fragment>
			<header>
				<h1>The Shop!</h1>
				<CartProductsList/>
			</header>

	    <main>
	    	<EditableProductList/>
	    	<FormToggle/>
	    </main>

	  </Fragment>
	);
}

export default Shop;
