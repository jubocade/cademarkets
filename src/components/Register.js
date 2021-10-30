import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPassword, setRePassword} from '../redux/actions/actions';
import '../styles/Register.css';

const Register = () => {
    const password = useSelector(state => state.setPasswordReducer);
    const rePassword = useSelector(state => state.setRePasswordReducer);
    const dispatch = useDispatch();
    let display;

    const handlePassword = (event) => {
        dispatch(setPassword(event.target.value));
    }

    const handleRePassword = (event) => {
        dispatch(setRePassword(event.target.value));
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <div className="register-container">
                <form action="#">
                   <div className="name-container">
                        <div className="name-container">
                            <label htmlFor="name-register">Name:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="name-register"/>
                        </div>
                    </div>

                    <div className="surname-container">
                        <div className="label-container">
                            <label htmlFor="surname-register">Surname:</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="surname-register"/>
                        </div>
                    </div>

                    <div className="email-container">
                        <div className="label-container">
                            <label htmlFor="email-register">Email:</label>
                        </div>
                        <div className="input-container">
                            <input type="email" id="email-register"/>
                        </div>
                    </div>

                    <div className="number-container">
                        <div className="label-container">
                            <label htmlFor="number-register">Phone Number:</label>
                        </div>
                        <div className="input-container">
                            <input type="email" id="number-register"/>
                        </div>
                    </div>

                    <div className="password-container">
                        <div className="label-container">
                            <label htmlFor="password-register">Password:</label>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password-register" onChange={handlePassword}/>
                        </div>
                    </div>

                    <div className="re-password-container">
                        <div className="label-container">
                            <label htmlFor="re-password-register">Retype Password:</label>
                        </div>
                        <div className="input-container">
                            <input type="password" id="re-password-register" onChange={handleRePassword}/>
                        </div>
                        <div className="error-re-password" style={{display:`${password===rePassword ? 'none' : 'block'}`}}>Passwords must be same</div>
                    </div>

                    <div className="register-button-container">
                        <input type="submit" value="Register"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
