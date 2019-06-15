import ProductForm from '../components/ProductForm';
import client from '../lib/client';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (product) => {
      client.put(`/api/products/${ownProps.id}`, product)
            .then(product => dispatch({product, type: 'PRODUCT_EDITED'}))
    },
    handleCancel: () => {
    	dispatch({type: 'TOGGLE_PRODUCT_EDIT_FORM'});
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductForm);
