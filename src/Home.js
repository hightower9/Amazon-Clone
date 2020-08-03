import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Banner" />

            <div className="home__row">
                <Product 
                    id="1"
                    title="JavaScript and JQuery: Interactive Front-End Web Development"
                    price={20.53}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41y31M-zcgL._SX400_BO1,204,203,200_.jpg"
                    />

                <Product 
                    id="2"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Cream"
                    price={250}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Fxu2M-oWL._AC_SL1500_.jpg"
                    />
            </div>

            <div className="home__row">
                <Product 
                    id="3"
                    title="Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminum Case with Black Sport Band"
                    price={179}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71O2f4-BvjL._AC_SL1500_.jpg"
                    />

                <Product 
                    id="4"
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
                    price={29.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
                    />

                <Product 
                    id="5"
                    title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
                    price={769}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._AC_SL1500_.jpg"
                    />
            </div>

            <div className="home__row">
                <Product 
                    id="6"
                    title="Samsung LC49HG90DMUXEN 49' Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB"
                    price={814.97}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
                    />
            </div>
        </div>
    )
}

export default Home
