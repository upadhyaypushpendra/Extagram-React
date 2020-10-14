import React from "react";
import "./header.css";
import activityIcon from "./../../static/images/activity-icon.png";
import exploreIcon from "./../../static/images/explore-icon.png";
import chatIcon from "./../../static/images/chat-icon.png";
import homeIcon from "./../../static/images/home-icon.png";
import userIcon from "./../../static/images/user-icon.png";
import profileSettingsIcon from "./../../static/images/profile-settings-icon.png";
import logo from "./../../static/images/logo.png";

export default function Header() {
    return (
        <nav className='header-nav'>
            <div className="fence">
                <div id="navigation" >
                    <div className="app-logo-wrapper" >
                        <img className="app-logo" src={logo} alt="Extagram" />
                    </div>
                    <div className="app-title" >
                        Extagram
                    </div>
                    <div className="search-wrapper">
                        <input id="search-input" name="search-input" type="text"  placeholder="Search" />
                    </div>
                    <div className="icons-outer" >
                        <div className="icon-wrapper"  >
                            <a  href="/home">
                                <img className="icon" src={homeIcon} />
                            </a>
                        </div>
                        <div className="icon-wrapper">
                            <a href="/chat">
                                <img className="icon" src={chatIcon} />
                            </a>
                        </div>
                        <div className="icon-wrapper">
                            <a href="/explore">
                                <img className="icon" src={exploreIcon} />
                            </a>
                        </div>
                        <div className="icon-wrapper">
                            <a href="/activity" >
                                <img className="icon" src={activityIcon} />
                            </a>
                        </div>
                        <div className="icon-wrapper circle">
                            <a href="/settings" >
                                <img className="circle border icon" src={profileSettingsIcon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}