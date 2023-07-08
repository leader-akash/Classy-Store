import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setIsPasswordVisible(prev => !prev);
  }

  return (
    <div className='login-page'>
      {/* <div className="bg-image">

      </div> */}

      <div>
        <div class="login-container">
          <h2>Login</h2>
          <form id="loginForm">
            <div>
              <p class="form-inputs"> Email Id </p>
              <input type="email" id="login-email" placeholder="Email" required />
            </div>
            <div>
              <p class="form-inputs"> Password </p>
              <input type={isPasswordVisible ? 'text' : 'password'} id="loginPassword" placeholder="Password" required />
              <i class={` pointer-cursor far ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" style={{ marginLeft: '-30px' }}
                onClick={handlePasswordVisible}
              ></i>
              {/* <i class="far  fa-eye-slash" style={{marginLeft: '-30px'}}></i> */}
            </div>
            <div className='test-credentials'>
              <label className='remember-me'>
                <input className="remember-checkbox" type="checkbox" name="keeplogin" />
                Remember me
              </label>

              <p className='forgot-password'>Forgot Password?</p>
            </div>
            <div id="login-errorContainer"></div>
            <div>
              <button className="signin-button" type="submit">Login</button>

              <button className="signin-guest" type="submit">Login as a guest</button>
            </div>

            <div class="new-user">
              <Link className="goto-signup" to="/signup">New on Classy Store? Sign up &gt;</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login