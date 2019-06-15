import EditableProductList from '../components/EditableProductList';
import client from '../lib/client';
import { connect } from 'react-redux';
import { getAllProducts } from '../reducers/products';

const mapStateToProps = (state) => {
  return {
    products: getAllProducts(state),
    edited: state.ui.editing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      client.get('/api/products')
            .then(products => dispatch({products, type: 'PRODUCTS_FETCHED'}))
            .catch(message => dispatch({message, type: 'PRODUCTS_FETCH_FAILED'}));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableProductList);
