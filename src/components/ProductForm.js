import React from 'react';

class ProductForm extends React.Component {
  state = {
    fields: {
      title: this.props.title || '',
      price: this.props.price || '',
      quantity: this.props.quantity || '',
    }
  };

  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      fields: {...this.state.fields, [name]: value}
    });
  }

  render() {
    const isNew = !this.props.title;
    const { title, price, quantity } = this.state.fields;
    const { handleSubmit, handleCancel } = this.props;

    return (
      <div className={isNew ? 'add-form visible' : 'edit-form'}>
        <h3>{isNew ? 'Add Product' : 'Edit Product'}</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              name="title"
              type="text"
              id="product-name"
              value={title}
              onChange={this.onInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              name="price"
              type="text"
              id="product-price"
              value={price}
              onChange={this.onInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              name="quantity"
              type="text"
              id="product-quantity"
              value={quantity}
              onChange={this.onInputChange}
            />
          </div>

          <div className="actions form-actions">
            <a
              className="button"
              onClick={() => handleSubmit({title, price, quantity})}
            >
            {isNew ? 'Add' : 'Update'}
          </a>
            <a className="button" onClick={handleCancel}>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
};

export default ProductForm;
