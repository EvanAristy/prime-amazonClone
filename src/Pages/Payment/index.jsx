import { Title } from '@mui/icons-material';
import React from 'react';
import { useStateValue } from "../../StateProvider"
import { Link } from 'react-router-dom';
// Css
import "./styles.css"
// Components
import CheckoutProduct from '../../Components/CheckoutProduct';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

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

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Payment;
