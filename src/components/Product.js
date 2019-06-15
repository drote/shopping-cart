import React from 'react';

const Product = ({
  id,
  title,
  price,
  quantity,
  handleAddToCart,
  handleEditClick,
  handleDelete
}) => {
  const isDisabled = quantity <= 0;
  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} Left in stock</p>
      <div className="actions product-actions">

        <button
          className={"button add-to-cart" + (isDisabled ? " disabled" : "")}
          onClick={() => handleAddToCart(id)}
          disabled={isDisabled}
        >
          Add to Cart
        </button>

        <button className="button edit" onClick={() => handleEditClick(id)}>Edit</button>
      </div>

      <a
        className="delete-button"
        onClick={() => handleDelete(id)}
      >

        <span>X</span>
      </a>
    </div>
  );
}

export default Product;
