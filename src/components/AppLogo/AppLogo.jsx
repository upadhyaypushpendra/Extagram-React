import React from "react";
import playStore from "../../static/images/e9cd846dc748.png";
import appStore from "../../static/images/180ae7a0bcf7.png";
import "./appLogo.css"
export default function AppLogo(){
    return (
        <div className="app-logo-container">
            <p>Get the App</p>
            <div>
                <a><img className="logo-img" src={playStore}/></a>
                <a><img className="logo-img" src={appStore} /></a>
            </div>
        </div>
    );
}