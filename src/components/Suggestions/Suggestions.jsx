import React from 'react';
import "./suggestions.css"
import userIcon from "./../../static/images/user-icon.png"
import RainbowCircle from "../RainbowCircle/RainbowCircle";
import User from "../User/User";
export default function Suggestions() {
    return (
        <div>
            <div className="suggestions-heading-container">
                <div>Suggestions For You</div>
                <a href="#" >See All</a>
            </div>
            <div className="suggestions-list">
                <div className="suggestion">
                    <User profileSize={30} username={"person_username"} description={"Follows you"}/>
                    <a className="blue-link center" href="#">Follow</a>
                </div>
                <div className="suggestion">
                    <User profileSize={30} username={"ramesh_sinha"} description={"Suggested for you"}/>
                    <a className="blue-link center" href="#" >Follow</a>
                </div>
                <div className="suggestion">
                    <User profileSize={30} username={"priya_verma"} description={"Follows you"}/>
                    <a className="blue-link center" href="#">Follow</a>
                </div>
                <div className="suggestion">
                    <User profileSize={30} username={"sharma_ravi"} description={"Follows you"}/>
                    <a className="blue-link center" href="#">Follow</a>
                </div>
            </div>
        </div>
    );
}