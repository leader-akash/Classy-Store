import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useUser } from 'contexts/user-context';


const Login = () => {

   const navigate = useNavigate();

   useEffect(()=>{
      window.scrollTo({top:0, left: 0, behavior: "smooth"})
    },[])

   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

   const handlePasswordVisible = () => {
      setIsPasswordVisible(prev => !prev);
   }


   const [emailVal, setEmailVal] = useState("");
   const [passwordVal, setPasswordVal] = useState();
   const [isLogin, setIsLogin] = useState();
   const {setIsLoggedIn, getToken, setGetToken} = useUser();


   const handleEmail = (e) => {
      setEmailVal(e.target.value)
   }

   const handlePassword = (e) => {
      setPasswordVal(e.target.value);
   }

   const handleGuestLogin = (e) => {
      // e.preventDefault();
      setEmailVal("akash@gmail.com");
      setPasswordVal("akashweb");
   }

   const handleSubmit = (e) => {
      e.preventDefault();

     axios.post(`/api/auth/login`, {
         email: emailVal,
         password: passwordVal,
     })
     .then((res) => {
      localStorage.setItem("token", res?.data?.encodedToken)
      localStorage.setItem("userInfo", JSON.stringify(res?.data?.foundUser))
      setGetToken(res?.data?.encodedToken)
      toast.success(`welcome back, ${res.data?.foundUser?.name} 🎉 Enjoy Shopping 🛒`);
      navigate("/");
     })
     .catch((error) => {
      console.log("error", error)
      toast.error('User not found')
     })


   }


   return (
      <div className='login-page'>
         {/* <div className="bg-image">

      </div> */}

         <div>
            <div className="login-container">
               <h2>Login</h2>
               <form id="loginForm" onSubmit={handleSubmit}>
                  <div>
                     <label className="form-inputs"> Email Id </label>
                     <input className='input-box' type="email" id="login-email" placeholder="akash@mail.com" value={emailVal} onChange={handleEmail} required />
                  </div>
                  <div>
                     <label className="form-inputs"> Password </label>
                     <input className='input-box' type={isPasswordVisible ? 'text' : 'password'} id="loginPassword" placeholder="******" value={passwordVal} onChange={handlePassword} required />
                     <i className={` pointer-cursor far ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" style={{ marginLeft: '-30px' }}
                        onClick={handlePasswordVisible}
                     ></i>
                     {/* <i className="far  fa-eye-slash" style={{marginLeft: '-30px'}}></i> */}
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

                     <button className="signin-guest" type="submit" onClick={handleGuestLogin}>Login as Guest</button>
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