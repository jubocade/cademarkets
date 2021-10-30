import React from 'react';
import '../styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import {mobileMenuClicked, dropDownArrowClicked} from '../redux/actions/actions';
import { Link } from 'react-router-dom';
 
const Header = () => {
    let mobileMenuIndicator = useSelector(state => state.mobileMenuClickedReducer);
    let dropDownIndicator = useSelector(state => state.dropDownArrowClickedReducer);
    const dispatch = useDispatch();
    console.log(mobileMenuIndicator)

    const handleMobileMenu = () => {
        dispatch(mobileMenuClicked());
    }

    const buyCryptoDropDown = () => {
        dispatch(dropDownArrowClicked());
    }

    return (
        <div className="header">
            <nav>
                <Link to="/cademarkets">
                    <div className="logo">
                        <h1>CadeMarkets</h1>
                    </div>
                </Link>

                <ul className="nav-links">
                    <li id="buy-crypto">
                        Buy Crypto
                        <i class="fa fa-arrow-down"></i>
                        <div className="buy-crypto-popup">
                           <ul className="buy-crypto-links">
                           <Link to="/bank-deposit"><li><i style={{color: 'white'}} className="fa fa-university"></i>Bank Deposit</li>
                           </Link>
                            <Link to="/card-deposit"> <li><i style={{color: 'white'}} className="fa fa-credit-card"></i> Credit/Debit Card</li>
                            </Link>
                           </ul>
                       </div>
                    </li>
                    <Link to="/markets"><li>Markets</li> </Link>
                    <Link to="/trade"> <li>Trade</li> </Link>
                    <Link to="/login"><li>Log In</li> </Link>
                    <Link to="/register"><li>Register</li> </Link>
                </ul>

                <div className= {`${mobileMenuIndicator === false ? 'dropdown-menu' : 'dropdown-menu visible'}`}>
                <ul className="mobile-nav-links">
                    {dropDownIndicator === true ? (
                        <li id="buy-crypto-mobile" onClick={buyCryptoDropDown}>
                             Buy Crypto
                            <i className={`${dropDownIndicator === false ? 'fa fa-arrow-down' : 'fa fa-arrow-up'}`}></i>
                                        <div className="buy-crypto-popup">
                                        <ul className="buy-crypto-links">
                                                <Link to="/bank-deposit">
                                                    <li><i className="fa fa-university"></i>Bank Deposit
                                                    </li>
                                                </Link>
                                                <Link to="/card-deposit">
                                                    <li><i className="fa fa-credit-card"></i> Credit/   Debit Card
                                                    </li>
                                                </Link>
                                        </ul>
                                    </div>
                            </li>
                        ) : (
                            <li id="buy-crypto-mobile" onClick={buyCryptoDropDown}>
                            Buy Crypto
                                    <i className={`${dropDownIndicator === false ? 'fa fa-arrow-down' : 'fa fa-arrow-up'}`}></i>
                            </li>
                        )}
                    <Link to="/markets"><li>Markets</li> </Link>
                    <Link to="/trade"><li>Trade</li> </Link>
                    <Link to="/login"><li>Log In</li></Link>
                    <Link to="/register"><li>Register</li></Link>
                </ul>
                </div>

                <div className="bars-container">
                    <i className = {`${mobileMenuIndicator === false ? 'fa fa-bars' : 'fa fa-times'}`} onClick={handleMobileMenu}></i>
                </div>
            </nav>
        </div>
    )
}

export default Header;
