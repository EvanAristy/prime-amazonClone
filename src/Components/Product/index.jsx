import React from 'react';
import { useStateValue } from "../../StateProvider"
// Css
import "./styles.css"

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
        console.log('my basket', basket)

    }

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

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
