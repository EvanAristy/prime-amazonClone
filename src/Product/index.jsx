import React from 'react';
// Css
import "./styles.css"

const Product = ({ id, title, price, image, rating }) => {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}

                </div>
            </div>

            <img src={image} alt="amazon product" />

            <button>Add to Basket</button>
        </div>
    );
}

export default Product;
