import React from 'react';
import '../styles/BankDeposit.css';

const BankDeposit = () => {
    return (
        <div className="bankDeposit">
            <h1>Bank Deposit</h1>
            <div className="bank-deposit-wrapper">
                <h3>Recepient Bank Account Number:</h3>
                <div className="account-number">1123754893683</div>
                <div className="amount-to-deposit-bank">
                    <input type="text" placeholder="Enter $ Amount"/>
                </div>
                <div className="deposit-button-bank">
                    Deposit Now
                </div>
            </div>
        </div>
    )
}

export default BankDeposit;
