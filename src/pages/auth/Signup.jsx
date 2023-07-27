import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Auth.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useUser } from 'contexts/user-context';


const Signup = () => {

    const navigate = useNavigate();

    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState();
    const [passwordVal, setPasswordVal] = useState();
    const [confirmPasswordVal, setConfirmPasswordVal] = useState();
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const {setGetToken} = useUser();

    const handleName = (e) => {
        setNameVal(e.target.value);
    }

    const handleEmail = (e) => {
        setEmailVal(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordVal(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPasswordVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordVal !== confirmPasswordVal) {
            setIsPasswordMatch(true)
        }
        else {
            axios.post(`/api/auth/signup`, {
                name: nameVal,
                email: emailVal,
                password: passwordVal
            })
                .then((res) => {
                    console.log("signup", res)
                    localStorage.setItem("signup token", res.data?.encodedToken);
                    localStorage.setItem("singup Info", JSON.stringify(res.data?.createdUser));
                    setGetToken(res.data?.encodedToken)
                    toast.success(`Hi ${nameVal}, Welcome to Classy Store 💖`);
                    navigate("/")
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Failed to Create User 😔");
                })
        }


    }


    return (

        <div className="input-container signup-form">
            <h2>Signup</h2>
            <form id="signupForm" onSubmit={handleSubmit}>
                <div>
                    <label className="form-inputs"> Name </label>
                    <input className='input-box' type="text" id="fullName" placeholder="Akash" onChange={handleName} required />
                </div>
                <div>
                    <label className="form-inputs"> Email </label>
                    <input className='input-box' type="email" id="email" placeholder="ak@gmail.com" onChange={handleEmail} required />
                </div>
                <div>
                    <label className="form-inputs"> Password </label>
                    <input className='input-box' type="password" id="password" placeholder="Password" onChange={handlePassword} required />
                </div>
                <div>
                    <label className="form-inputs"> Confirm Password </label>
                    <input className='input-box' type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPasswordVal} onChange={handleConfirmPassword} required />
                </div>
                <div id="errorContainer" >
                {
                    (isPasswordMatch ? "Password do not match" : null)
                }
                </div>
                
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