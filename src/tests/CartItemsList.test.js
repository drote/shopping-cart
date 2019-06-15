import React from 'react';
import { shallow } from 'enzyme';

import CartItemsList from '../components/CartItemsList';

describe('CartItemsList', () => {
  let wrapper;
  describe('single item in cart', () => {
    const product = {
      id: 1,
      title: 'Fancy Gentlemans Jacket',
      quantity: 1,
      price: 150.00
    };

    beforeEach(() => {
      wrapper = shallow(<CartItemsList items={[product]} />);
    });

    it('renders 1 `CartItem` per item in cart', () => {
      expect(wrapper.find('tbody CartItem').length).toBe(1);
    });

    it('has correct total', () => {
      let total = wrapper.find('.total').first();
      expect(total.text()).toEqual('Total: $' + product.price.toFixed(2));
    });

    describe('then adds another item to cart', () => {
      const product2 = {
        id: 1,
        title: 'Fancy Gentlemans Hat',
        quantity: 1,
        price: 95.00
      };

      beforeEach(() => {
        wrapper = shallow(<CartItemsList items={[product, product2]} />);
      });

      it('renders 1 `CartItem` per item in cart', () => {
        expect(wrapper.find('tbody CartItem').length).toBe(2);
      });

      it('has correct total', () => {
        let total = wrapper.find('.total').first();
        expect(total.text()).toEqual('Total: $' + (product.price + product2.price).toFixed(2));
      });
    });
  });
});
