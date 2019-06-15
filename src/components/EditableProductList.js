import React, { Component } from 'react';
import EditableProduct from './EditableProduct';

class EditableProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, edited } = this.props;

    return (
      <div className="product-listing">
        <h2>Products</h2>

        {
        	products.map(p =>
        		<EditableProduct
        			key={p.id}
              beingEdited={edited === p.id}
        			product={p}
        		/>
        	)
        }

      </div>
    )
  }
}

export default EditableProductList;
