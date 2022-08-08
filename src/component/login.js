import React, { useState } from 'react'
import "./style/signupLogin.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

export default function Login() {
    // Backend Call for Signup
    const [inputs, setInputs] = useState({});
    let [message, setMessage] = useState("");
    let [isSignupSuccess, setIsSignupSuccess] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/userRegistration", inputs)
            .then(res => res.data)
            .then(data => {
                console.log(data);
                setMessage(data.success);
                setIsSignupSuccess(true);
            })
            .catch(error => {
                if (error.response.status === 409) {
                    setMessage(error.response.data.message);
                }
                else if (error.response.status === 400) {
                    setMessage(error.response.data.message);
                }
            });

    }

    // Backend Call for Login
    const [loginputs, setLogInputs] = useState({});
    let [logMessage, setLogMessage] = useState("");
    let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

    const logHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogInputs(values => ({ ...values, [name]: value }))
    }

    const logHandleSubmit = (event) => {
        event.preventDefault();

        axios.post("/userLogin", {
            username: loginputs.username,
            password: loginputs.password
        })
            .then(res => {
                return res.data;
            })
            .then(data => {
                localStorage.setItem("access_token", data.access_token);
                setLogMessage(data.message);
                localStorage.setItem("isLoggedIn", "true");
                setIsLoggedIn(localStorage.getItem("isLoggedIn"));
            })
            .catch(error => {
                if (error.response.status === 401) {
                    setLogMessage(error.response.data.message);
                }
                else {
                    setLogMessage("Internal Server Error!");
                }

            })
    }

    // Switching
    let [addClass, setAddClass] = useState("");
    const signupClick = () => {
        setAddClass("right-panel-active");
    }
    const signinClick = () => {
        setAddClass("");
    }


    return (
        <div className={`loginContainer ${addClass}`}>

            {/* // Sign up  */}
            <div class="form-container sign-up-container">
                {isSignupSuccess ? (
                    <form>
                        {message ? <h2>Registration Successful!</h2> : <h3>{message}</h3>}
                    </form>
                ) :
                    (
                        <form onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <div class="social-container">
                                <a href="#" class="social"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" class="social"><FontAwesomeIcon icon={faGoogle} /></a>
                                <a href="#" class="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input
                                type="text"
                                name="name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                                autoComplete="off"
                                required pattern="[a-z A-Z]+"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="email"
                            />
                            <input
                                type="text"
                                name="username"
                                value={inputs.username || ""}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="username"
                                required pattern="[a-z A-Z 0-9]+"
                            />
                            <input
                                type="password"
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}
                                autoComplete="off"
                                required placeholder="password"
                            />
                            {message ? <span>{message}</span> : <span>{message}</span>}
                            <button>Sign Up</button>
                        </form>
                    )}
            </div>


            {/* // Log in */}
            <div class="form-container sign-in-container">
                <form onSubmit={logHandleSubmit}>
                    <h1>Log in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" class="social"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#" class="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <span>or use your account</span>
                    <input
                        type="text"
                        name='username'
                        value={loginputs.username || ""}
                        onChange={logHandleChange}
                        autoComplete="off"
                        placeholder="username"
                        required pattern="[a-z A-Z 0-9]+" />
                    <input
                        type="password"
                        name='password'
                        value={loginputs.password || ""}
                        onChange={logHandleChange}
                        autoComplete="off"
                        required placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <div>
                        {logMessage ? <h3 style={{ color: "red" }}>{logMessage}</h3> : <h3>{logMessage}</h3>}
                        {isLoggedIn ? <Navigate to="/news_feed" replace /> : <h3> </h3>}
                    </div>
                    <button>Log In</button>
                </form>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Already have an Account?</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" onClick={signinClick} id="signIn">Log In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend! Don't have an Account?</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" onClick={signupClick} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
