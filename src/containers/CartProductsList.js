import CartProductsList from '../components/CartProductsList';
import client from '../lib/client';
import { connect } from 'react-redux';
import { getCartProducts } from '../reducers/cart';

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
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
)(CartProductsList);
