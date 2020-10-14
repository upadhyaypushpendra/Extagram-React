import React from "react";
import './login.css';
import LinkWithMessageBox from "../LinkWithMessageBox/LinkWithMessageBox";
import AppLogo from "../AppLogo/AppLogo";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";

export default function Login() {
    return (
        <>
        <div className="form-container">
            <h1>Extagram</h1>
            <form id="login-form" className="login-form" >
                <input id="username-input" name="username" type="text" placeholder="Username" />
                <input id="password-input" name="password" type="password" placeholder="Password" />
                <button id='log-in-button' >Log in</button>
                <Divider/>
                <a className="anchor-link" href="#" tabIndex="0">Forgot password?</a>
            </form>
        </div>
    <LinkWithMessageBox link="/signup" linkText="Sign up" message="Don't have an account?"/>
    <AppLogo/>
    </>
    );
}