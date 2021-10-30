import React from 'react';
import '../styles/CardDeposit.css';
import { useSelector, useDispatch } from 'react-redux';
import {setCardNumber, setMonth, setDay, setYear, setCvvNumber, setCardNumberError, setExpiryError, setCvvNumberError} from '../redux/actions/actions';

const CardDeposit = () => {
    let display = 'none';
    const cardNumber = useSelector(state => state.setCardNumberReducer);
    const day = useSelector(state => state.setDayReducer);
    const month = useSelector(state => state.setMonthReducer);
    const year = useSelector(state => state.setYearReducer);
    const cvvNumber = useSelector(state => state.setCvvNumberReducer);
    const cardNumberError = useSelector(state => state.setCardNumberErrorReducer);
    const expiryError = useSelector(state => state.setExpiryErrorReducer);
    const cvvNumberError = useSelector(state => state.setCvvNumberErrorReducer);
    const dispatch = useDispatch();

    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    let minYear = new Date().getFullYear();
    let minMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);

    const handleCardNumber = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/gi, "");
        dispatch(setCardNumber(event.target.value));
    }

    const handleMonth = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/gi, "");
        dispatch(setMonth(event.target.value));
    }

    const handleYear = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/gi, "");
        dispatch(setYear(event.target.value));
    }

    const handleCvvNumber = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/gi, "");
        dispatch(setCvvNumber(event.target.value));
    }

    const handleSubmit = () => {
        //Checking Card Number 
        if(cardNumber.length === 16 && cardNumber.charAt(0) === '4' || cardNumber.charAt(0) === '5') dispatch(setCardNumberError(false))
        else if(cardNumber !==16) dispatch(setCardNumberError(true))
        
        if(parseFloat(year) >= minYear && parseFloat(month) >= parseFloat(minMonth)) dispatch(setExpiryError(false));
        else if(parseFloat(year) < minYear || parseFloat(month) < parseFloat(minMonth) || year === "" || month === "") dispatch(setExpiryError(true));


        if(cvvNumber.length === 3) dispatch(setCvvNumberError(false));
        else if(cvvNumber.length !== 3) dispatch(setCvvNumberError(true));
    }
    return (
        <div className="cardDeposit">
            <div className="bankDeposit">
            <h1>Card Deposit</h1>
            <div className="card-deposit-wrapper">
                <div className="card-number-container">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input type="text" onChange={handleCardNumber} size="16" maxLength="16" placeholder="16 Digits"/>
                    <div className="card-number-error" style={{display: `${cardNumberError ? 'block' : 'none'}`}}>Invalid Card Number</div>
                </div>
                <div className="expiry-date-container">
                    <label htmlFor="expiry">Expiry Date:</label>
                    <div className="date-inputs-container">
                        <input style={{width: '100px'}} className='date-input' type="text" placeholder="MM" size="2" maxLength="2" onChange={handleMonth}/>
                        <span>/</span>
                        <input style={{width: '100px'}} className='date-input' type="text" placeholder="YYYY" size="4" maxLength="4" onChange={handleYear}/>
                    </div>
                    <div className="expiry-error" style={{display: `${expiryError ? 'block' : 'none'}`}}>Invalid Expiry Date</div>
                </div>
                <div className="cvv-number-container">
                    <label htmlFor="cvv">CVV Number:</label>
                    <input type="text" onChange={handleCvvNumber} size="3" maxLength="3" placeholder="3 Digits"/>
                    <div className="cvv-number-error" style={{display: `${cvvNumberError ? 'block' : 'none'}`}}>Invalid CVV Number</div>
                </div>
                <div className="deposit-button-card" onClick={handleSubmit}>
                    Deposit Now
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardDeposit;
