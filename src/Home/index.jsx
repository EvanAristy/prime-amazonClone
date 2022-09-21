import React from 'react';
// CSS
import "./styles.css"
// Components
import Product from '../Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon banner" />

                <div className="home__row">
                    < Product 
                        id="12321341"
                        title="The lean startup"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="amazon product"
                        rating={5}
                    />
                    < Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    < Product />
                    < Product />
                    < Product />
                </div>

                <div className="home__row">
                    < Product />
                </div>
            </div>
        </div>
    );
}

export default Home;
