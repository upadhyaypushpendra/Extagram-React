import React from "react";
import './signup.css';
import LinkWithMessageBox from "../LinkWithMessageBox/LinkWithMessageBox";
import AppLogo from "../AppLogo/AppLogo";
import Footer from "../Footer/Footer";

export default function Signup() {
    return (
        <>
        <div className="form-container">
            <h1>Extagram</h1>
            <form id="signup-form" className="signup-form" >
                <input id="email-input" name="email" type="text" placeholder="Mobile Number or Email" />
                <input id="fullName-input" name="fullName" type="text" placeholder="Full Name" />
                <input id="username-input" name="username" type="text" placeholder="Username" />
                <input id="password-input" name="password" type="password" placeholder="Password" />
                <button id='log-in-button' >Sign up</button>
                <a className="anchor-link" href="#" tabIndex="0">Forgot password?</a>
            </form>
            <p className="center para-message" > By signing up, you agree to our Terms , Data Policy and Cookies Policy.</p>
        </div>
    <LinkWithMessageBox link="/login" linkText="Log in" message="Have an account?"/>
    <AppLogo/>
    <Footer/>
    </>
    );
}