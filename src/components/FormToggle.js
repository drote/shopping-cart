import React, { Fragment } from 'react';
import AddProductForm from '../containers/AddProductForm';

const FormToggle = ({showAddForm, handleFormOpen}) => {
  return (
    <Fragment>

    {
      showAddForm ?

        <div className='add-form visible'>
          <AddProductForm />
        </div>

        :

        <div className='add-form'>
          <p>
            <a
            className="button add-product-button"
            onClick={handleFormOpen}
          >
          Add A Product
            </a>
          </p>
          <h3>Add Product</h3>
        </div>
    }

    </Fragment>
  );
};

export default FormToggle;
