import ProductForm from '../components/ProductForm';
import client from '../lib/client';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (product) => {
      client.post(`/api/products`, product)
            .then(product => dispatch({product, type: 'PRODUCT_ADDED'}))
    },
    handleCancel: () => {
    	dispatch({type: 'TOGGLE_ADD_FORM'});
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductForm);
