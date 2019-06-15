import Product from '../components/Product';
import { connect } from 'react-redux';
import client from '../lib/client';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddToCart: (id) => {
      client.put(`/api/products/${id}`, {quantity: ownProps.quantity - 1})
            .then(product => dispatch({product, type: 'ADD_PRODUCT_TO_CART'}));
    },

    handleDelete: (id) => {
      client.delete(`/api/products/${id}`)
            .then(dispatch({id, type: 'PRODUCT_DELETED'}));
    },

    handleEditClick: (id) => dispatch({ id, type: 'TOGGLE_PRODUCT_EDIT_FORM' })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
