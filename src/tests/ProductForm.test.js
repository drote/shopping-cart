import React from 'react';
import { shallow } from 'enzyme';

import ProductForm from '../components/ProductForm';

describe('ProductForm', () => {
  let wrapper;

  describe('empty form inputs', () => {
    beforeEach(() => {
      wrapper = shallow(<ProductForm />);
    });

    it('has title input', () => {
      expect(wrapper.find('[name="title"]').length).toBe(1);
    });

    it('has price input', () => {
      expect(wrapper.find('[name="price"]').length).toBe(1);
    });

    it('has quantity input', () => {
      expect(wrapper.find('[name="quantity"]').length).toBe(1);
    });

    describe('then fill in inputs', () => {
      const title = 'Fancy Gentlemans Jacket';
      const price = '150.00';
      const quantity = '2';

      it('state reflects `onChange` for `title` input', () => {
        let input = wrapper.find('[name="title"]').first();
        input.simulate('change', {
          target: {
            name: 'title',
            value: 'Fancy Gentlemans Jacket',
          }
        });
        expect(wrapper.state().fields.title).toEqual(title);
      });

      it('state reflects `onChange` for `price` input', () => {
        let input = wrapper.find('[name="price"]').first();
        input.simulate('change', {
          target: {
            name: 'price',
            value: '150.00',
          }
        });
        expect(wrapper.state().fields.price).toEqual(price);
      });

      it('state reflects `onChange` for `quantity` input', () => {
        let input = wrapper.find('[name="quantity"]').first();
        input.simulate('change', {
          target: {
            name: 'quantity',
            value: '2',
          }
        });
        expect(wrapper.state().fields.quantity).toEqual(quantity);
      });

      describe('then submit form', () => {
        it('`onAddProduct` is called', () => {
          const func = jest.fn();
          wrapper = shallow(<ProductForm onAddProduct={func} onFormToggle={() => {}} />);
          wrapper.find('.button').first().simulate('click');
          expect(func.mock.calls.length).toBe(1);
        });

        it('`onAddProduct` is passed new product', () => {
          const func = jest.fn();
          wrapper = shallow(<ProductForm onAddProduct={func} onFormToggle={() => {}} />);
          wrapper.find('.button').first().simulate('click');
          expect(func.mock.calls[0][0]).toEqual(wrapper.state().fields);
        });

        it('state is emptied', () => {
          const fields = {title: '', price: '', quantity: ''};
          wrapper = shallow(<ProductForm onAddProduct={() => {}} onFormToggle={() => {}} />);
          wrapper.find('.button').first().simulate('click');
          expect(wrapper.state().fields).toEqual(fields);
        });
      });
    });
  });
});
