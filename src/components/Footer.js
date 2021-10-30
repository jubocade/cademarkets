import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="info-container">
                <div className="about">
                    <h1>About Us</h1>

                    <p className="about-paragraph">
                        We are a trading platform which offers individuals instant and comfortable trades. Here you can track prices and buy Cryptos or sell instantly. Wining is more pleasurable with us!
                    </p>
                </div>

                <div className="products">
                    <h1>Products</h1>

                    <ul className="products-list">
                        <li>Exchange</li>
                        <li>Trade</li>
                        <li>Hold</li>
                   </ul>
                </div>

                <div className="community">
                    <h1>Community</h1>

                    <ul className="community-links">
                        <li><i className="fa fa-facebook"> </i></li>
                        <li><i className="fa fa-instagram"> </i></li>
                        <li><i className="fa fa-twitter"> </i></li>
                        <li><i className="fa fa-vk"> </i></li>
                        <li><i className="fa fa-youtube"> </i></li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default Footer;
