// import { Title } from '@mui/icons-material';
import React, { useState } from 'react';
import { useStateValue } from "../../StateProvider"
import { Link } from 'react-router-dom';
// Css
import "./styles.css"
// Components
import CheckoutProduct from '../../Components/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
// Stripe Payments
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';



const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
        // Here is where the stripe related things go
    }

    const handleChange = e => {
        // Listen for changes in the CardElement
        // And display any errors as the customer types their card
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    const getTotal = () => {
        let total = 0;
    
        for (let i = 0; i < basket.length; i++){
          total += basket[i].price
        }
        return total;
      }

    return (
        <div className='payment'>

            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Lawrenceville, GA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe magic (payments) */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getTotal()} 
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Payment;
