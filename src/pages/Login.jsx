import React from 'react'
import "./Login.css";

const Login = () => {
  return (
    <>
    <div class="input-container">
        <h2>Signup</h2>
        <form id="signupForm">
        <div>
            <p class="form-inputs"> Name </p>
            <input type="text" id="fullName" placeholder="Akash" required />
        </div>
        <div>
            <p class="form-inputs"> Email </p>
            <input type="email" id="email" placeholder="ak@gmail.com" required />
        </div>
        <div>
        <p class="form-inputs"> Password </p>
        <input type="password" id="password" placeholder="Password" required />
        </div>
        <div>
            <p class="form-inputs"> Confirm Password </p>
            <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
        </div>
        <div id="errorContainer"></div>
        <div>
        <button className="sign-button" type="submit">Signup</button>
    </div>
	</form>
</div>
    </>
  )
}

export default Login;