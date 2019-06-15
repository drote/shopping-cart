import React from 'react';
import EditProductForm from '../containers/EditProductForm';
import Product from '../containers/Product';

const EditableProduct = ({ product, beingEdited }) => {
    return (
      <div className="product">
        <Product
          {...product}
        />
        {
          beingEdited ?
          <EditProductForm
            {...product}
          /> :
          null
        }
      </div>
    );
};

export default EditableProduct;
