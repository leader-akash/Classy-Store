import React from 'react'
import {Link} from 'react-router-dom';
import "./Signup.css";


const Signup = () => {
    return (

        <div className="input-container signup-form">
            <h2>Signup</h2>
            <form id="signupForm">
                <div>
                    <p className="form-inputs"> Name </p>
                    <input type="text" id="fullName" placeholder="Akash" required />
                </div>
                <div>
                    <p className="form-inputs"> Email </p>
                    <input type="email" id="email" placeholder="ak@gmail.com" required />
                </div>
                <div>
                    <p className="form-inputs"> Password </p>
                    <input type="password" id="password" placeholder="Password" required />
                </div>
                <div>
                    <p className="form-inputs"> Confirm Password </p>
                    <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
                </div>
                <div id="errorContainer"></div>
                <div>
                    <button className="sign-button" type="submit">Signup</button>
                </div>

                <div class="new-user">
                    <Link className="goto-signup" to="/login">&lt; Back to Login</Link>
                </div>

            </form>
        </div>
    )
}

export default Signup;